import { Team } from '../data/leagues';

export type CompetitionType = 'league' | 'cl' | 'el';

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore?: number;
  awayScore?: number;
  played: boolean;
  competition: CompetitionType;
  round?: string; // e.g., 'Group A', 'Quarter-final', etc.
  matchday: number;
}

/**
 * Generates a double round-robin schedule using the Circle Method.
 * Ensures teams don't play each other twice in a row.
 */
export const generateSchedule = (teams: Team[]): Match[] => {
  const teamIds = teams.map(t => t.id);
  if (teamIds.length % 2 !== 0) {
    teamIds.push('BYE'); // Should not happen with our data but good practice
  }

  const n = teamIds.length;
  const rounds: Match[][] = [];

  // Single round robin
  for (let j = 0; j < n - 1; j++) {
    const round: Match[] = [];
    for (let i = 0; i < n / 2; i++) {
      const home = teamIds[i];
      const away = teamIds[n - 1 - i];
      if (home !== 'BYE' && away !== 'BYE') {
        round.push({ 
          id: `league-${j}-${i}`,
          homeTeamId: home, 
          awayTeamId: away, 
          played: false,
          competition: 'league',
          matchday: j + 1
        });
      }
    }
    rounds.push(round);
    // Rotate teamIds (keep first element fixed)
    teamIds.splice(1, 0, teamIds.pop()!);
  }

  // Second round robin (reverse fixtures)
  const secondHalf = rounds.map((round, j) => 
    round.map((m, i) => ({ 
      ...m, 
      id: `league-${j + n - 1}-${i}`,
      homeTeamId: m.awayTeamId, 
      awayTeamId: m.homeTeamId, 
      played: false,
      matchday: j + n
    }))
  );

  // Combine and flatten
  return [...rounds, ...secondHalf].flat();
};

/**
 * Generates a knockout tournament schedule.
 */
export const generateKnockoutSchedule = (
  teams: Team[], 
  competition: 'cl' | 'el', 
  roundName: string,
  matchday: number
): Match[] => {
  const matches: Match[] = [];
  for (let i = 0; i < teams.length; i += 2) {
    if (teams[i] && teams[i+1]) {
      matches.push({
        id: `${competition}-${roundName}-${i}`,
        homeTeamId: teams[i].id,
        awayTeamId: teams[i+1].id,
        played: false,
        competition,
        round: roundName,
        matchday
      });
    }
  }
  return matches;
};

/**
 * Generates all league and continental matches for a season.
 */
export const initializeSeasonMatches = (
  leagues: Team[][],
  allTeams: Team[],
  currentYear: number,
  nextSeasonContinental?: { cl: Team[], el: Team[] } | null
): { allMatches: Match[], continentalMatches: Match[] } => {
  const allLeagueMatches = leagues.flatMap(teams => generateSchedule(teams));

  let clTeams: Team[];
  let elTeams: Team[];

  const teamLeagueMap = new Map<string, number>();
  leagues.forEach((league, index) => {
    league.forEach(team => teamLeagueMap.set(team.id, index));
  });

  const distributeByPots = (candidates: Team[]) => {
    const selected = candidates.slice(0, 32).sort((a,b) => b.rating - a.rating);
    const pots = [
      selected.slice(0, 8).sort(() => Math.random() - 0.5),
      selected.slice(8, 16).sort(() => Math.random() - 0.5),
      selected.slice(16, 24).sort(() => Math.random() - 0.5),
      selected.slice(24, 32).sort(() => Math.random() - 0.5)
    ];

    const groups: Team[][] = Array.from({ length: 8 }, () => []);
    
    for (let p = 0; p < 4; p++) {
      const pot = pots[p];
      for (const team of pot) {
        const lId = teamLeagueMap.get(team.id);
        
        let placed = false;
        // Try random group order to avoid patterns
        const groupIndices = [0, 1, 2, 3, 4, 5, 6, 7].sort(() => Math.random() - 0.5);
        
        for (const g of groupIndices) {
          const group = groups[g];
          // Only place if group has space for this pot
          if (group.length === p) {
            const hasSameLeague = group.some(t => teamLeagueMap.get(t.id) === lId);
            if (!hasSameLeague) {
              group.push(team);
              placed = true;
              break;
            }
          }
        }
        
        // Fallback: if we couldn't place without conflict, just place in first available slot for this pot
        if (!placed) {
          for (const g of groupIndices) {
            if (groups[g].length === p) {
              groups[g].push(team);
              break;
            }
          }
        }
      }
    }
    return groups.flat();
  };

  if (nextSeasonContinental) {
    clTeams = distributeByPots(nextSeasonContinental.cl);
    elTeams = distributeByPots(nextSeasonContinental.el);
  } else {
    // Top teams based on rating
    // Rank all teams across leagues
    const allRanked = [...allTeams].sort((a, b) => b.rating - a.rating);

    // Filter top teams per league
    const sortedLeagues = leagues.map(teamList => [...teamList].sort((a, b) => b.rating - a.rating));
    
    const clCandidates = sortedLeagues.map(l => l.slice(0, 4)).flat().sort((a, b) => b.rating - a.rating);
    const elCandidates = sortedLeagues.map(l => l.slice(4, 9)).flat().sort((a, b) => b.rating - a.rating);

    clTeams = distributeByPots(clCandidates);
    elTeams = distributeByPots(elCandidates);
  }

  const clSchedule: Match[] = [];
  const elSchedule: Match[] = [];

  for (let g = 0; g < 8; g++) {
    const clGroup = clTeams.slice(g * 4, (g + 1) * 4);
    if (clGroup.length === 4) {
      clSchedule.push(...generateSchedule(clGroup).map(m => ({
        ...m,
        id: `cl-group-${g}-${m.id}-${currentYear}`,
        competition: 'cl' as CompetitionType,
        round: `Group ${String.fromCharCode(65 + g)}`
      })));
    }
    const elGroup = elTeams.slice(g * 4, (g + 1) * 4);
    if (elGroup.length === 4) {
      elSchedule.push(...generateSchedule(elGroup).map(m => ({
        ...m,
        id: `el-group-${g}-${m.id}-${currentYear}`,
        competition: 'el' as CompetitionType,
        round: `Group ${String.fromCharCode(65 + g)}`
      })));
    }
  }

  return { allMatches: allLeagueMatches, continentalMatches: [...clSchedule, ...elSchedule] };
};

/**
 * Filters the full league schedule to get only the matches for a specific team.
 */
export const getTeamSchedule = (fullSchedule: Match[], teamId: string): Match[] => {
  return fullSchedule.filter(m => m.homeTeamId === teamId || m.awayTeamId === teamId);
};
