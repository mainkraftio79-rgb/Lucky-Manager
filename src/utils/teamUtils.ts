import { Player } from '../data/leagues';

export type FormationType = '4-3-3' | '4-4-2' | '3-5-2' | '5-3-2' | '4-2-3-1';

export interface Lineup {
  startingXI: Player[];
  bench: Player[];
  formation: FormationType;
}

export const FORMATIONS: Record<FormationType, string[]> = {
  '4-3-3': ['GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'LW', 'ST', 'RW'],
  '4-4-2': ['GK', 'LB', 'CB', 'CB', 'RB', 'LM', 'CM', 'CM', 'RM', 'ST', 'ST'],
  '3-5-2': ['GK', 'CB', 'CB', 'CB', 'LWB', 'CM', 'CM', 'CM', 'RWB', 'ST', 'ST'],
  '5-3-2': ['GK', 'LB', 'CB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'ST', 'ST'],
  '4-2-3-1': ['GK', 'LB', 'CB', 'CB', 'RB', 'CDM', 'CDM', 'CAM', 'LM', 'RM', 'ST'],
};

// Map granular positions to general categories for auto-lineup
export const POS_MAP: Record<string, 'GK' | 'DEF' | 'MID' | 'FWD'> = {
  'GK': 'GK',
  'LB': 'DEF', 'CB': 'DEF', 'RB': 'DEF', 'LWB': 'DEF', 'RWB': 'DEF',
  'CM': 'MID', 'LM': 'MID', 'RM': 'MID', 'CDM': 'MID', 'CAM': 'MID',
  'LW': 'FWD', 'ST': 'FWD', 'RW': 'FWD'
};

export const getPlayerSpecificPosition = (player: Player): string => {
  if (player.naturalPosition) return player.naturalPosition;
  
  // Deterministic specific position from generic position
  let hash = 0;
  for (let i = 0; i < player.id.length; i++) {
    hash = player.id.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);

  switch (player.position) {
    case 'GK': return 'GK';
    case 'DEF': {
      const p = hash % 100;
      if (p < 55) return 'CB';
      if (p < 75) return 'LB';
      if (p < 95) return 'RB';
      return p % 2 === 0 ? 'LWB' : 'RWB';
    }
    case 'MID': {
      const p = hash % 100;
      if (p < 35) return 'CM';
      if (p < 60) return 'CDM';
      if (p < 75) return 'CAM';
      if (p < 87) return 'LM';
      return 'RM';
    }
    case 'FWD': {
      const p = hash % 100;
      if (p < 50) return 'ST';
      if (p < 75) return 'LW';
      return 'RW';
    }
    default:
      return 'CB'; // fallback
  }
};

export const getEffectiveRating = (player: Player, playingPos: string): number => {
  const natural = getPlayerSpecificPosition(player);
  let rating = player.rating;

  // 1 & 2. GK -> non-GK or non-GK -> GK
  if (natural === 'GK' && playingPos !== 'GK') return 20;
  if (natural !== 'GK' && playingPos === 'GK') return 20;

  // Same position -> no penalty
  if (natural === playingPos) return rating;

  const natGen = POS_MAP[natural] || player.position;
  const playGen = POS_MAP[playingPos];

  // 3. CB to LB/RB and vice versa -> -4
  const isCB = natural === 'CB';
  const isOuterBack = natural === 'LB' || natural === 'RB' || natural === 'LWB' || natural === 'RWB';
  const playingCB = playingPos === 'CB';
  const playingOuterBack = playingPos === 'LB' || playingPos === 'RB' || playingPos === 'LWB' || playingPos === 'RWB';

  if (isCB && playingOuterBack) return rating - 4;
  if (isOuterBack && playingCB) return rating - 4;

  // Minor penalty for playing on the opposite side (LB at RB)
  if ((natural === 'LB' && playingPos === 'RB') || (natural === 'RB' && playingPos === 'LB')) return rating - 2;

  // 4. CMF, LMF, RMF, DMF to Defender -> -8
  // Central Midfielder (CM), Left, Right, Defensive
  const isAnyMid = natGen === 'MID';
  if (isAnyMid && playGen === 'DEF') return rating - 8;

  // 5. Central Midfielder to another midfield position -> -4
  // We'll treat CM, CAM, CDM as central midfielders. The prompt says "central midfielder to another midfield position"
  if ((natural === 'CM' || natural === 'CAM' || natural === 'CDM') && playGen === 'MID' && natural !== playingPos) {
    return rating - 4;
  }
  // What about LM to RM? Penalty -2 for realism, prompt doesn't strictly say LM->RM. But prompt says "If you change a central midfielder...". We will add -4 for any mid to another mid just to be safe if that matches intent? The prompt says: "If you change a central midfielder to another midfield position, the rating would be -4." Let's do exactly that.

  // 6. Forward (RW/LW/ST) to any midfield position -> -6
  if (natGen === 'FWD' && playGen === 'MID') return rating - 6;

  // Attackers to CB, RB, LB -> -25
  if (natGen === 'FWD' && playGen === 'DEF') return rating - 25;

  // 7. Forward to another forward position -> -3
  if (natGen === 'FWD' && playGen === 'FWD' && natural !== playingPos) return rating - 3;

  // Unspecified penalties:
  // Defender to Midfield -> -6
  if (natGen === 'DEF' && playGen === 'MID') return rating - 6;
  // Defender to Forward -> -10
  if (natGen === 'DEF' && playGen === 'FWD') return rating - 10;
  // Midfielder to Forward -> -4
  if (natGen === 'MID' && playGen === 'FWD') return rating - 4;

  // Fallback penalty if mismatched position inside same generic block (e.g. LM to CM if not handled)
  if (natGen === playGen && natural !== playingPos) return rating - 2;

  return rating;
};

export const getBestLineup = (players: Player[], formation: FormationType = '4-3-3'): Lineup => {
  const sortedPlayers = [...players].sort((a, b) => b.rating - a.rating);
  const startingXI: (Player | null)[] = new Array(11).fill(null);
  const usedIds = new Set<string>();

  const findBest = (targetPos: string, requireAvailable: boolean, requireExactSpecific: boolean): Player | undefined => {
    const generalRole = POS_MAP[targetPos];
    
    let bestPlayer: Player | undefined;
    let highestEffective = -100;

    for (const p of sortedPlayers) {
      if (usedIds.has(p.id)) continue;
      if (requireAvailable && ((p.suspensionMatches && p.suspensionMatches > 0) || (p.injuryMatches && p.injuryMatches > 0))) continue;
      if (p.position !== generalRole) continue;
      
      const specific = getPlayerSpecificPosition(p);
      if (requireExactSpecific && specific !== targetPos) continue;

      const effRating = getEffectiveRating(p, targetPos);
      if (effRating > highestEffective) {
        highestEffective = effRating;
        bestPlayer = p;
      }
    }
    
    if (bestPlayer) {
      usedIds.add(bestPlayer.id);
      return bestPlayer;
    }
    return undefined;
  };

  const formationPositions = FORMATIONS[formation];

  // 1. Try to fill based on EXACT specific role, ensuring available first
  formationPositions.forEach((pos, index) => {
    const best = findBest(pos, true, true);
    if (best) startingXI[index] = best;
  });

  // 2. Try to fill based on general roles, ensuring available first
  formationPositions.forEach((pos, index) => {
    if (!startingXI[index]) {
      const best = findBest(pos, true, false) || findBest(pos, false, false);
      if (best) startingXI[index] = best;
    }
  });

  // 3. Fill any empty slots with best available players regardless of position
  for (let i = 0; i < 11; i++) {
    if (!startingXI[i]) {
      // Prefer available
      let filler = sortedPlayers.find(p => !usedIds.has(p.id) && !(p.suspensionMatches && p.suspensionMatches > 0) && !(p.injuryMatches && p.injuryMatches > 0));
      if (!filler) filler = sortedPlayers.find(p => !usedIds.has(p.id));
      
      if (filler) {
        usedIds.add(filler.id);
        startingXI[i] = filler;
      }
    }
  }

  const bench = sortedPlayers.filter(p => !usedIds.has(p.id));

  return { 
    startingXI: startingXI as Player[], 
    bench,
    formation
  };
};
