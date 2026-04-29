/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { StartMenu } from './components/StartMenu';
import { GameLoop } from './components/GameLoop';
import { CareerSetup } from './components/CareerSetup';
import { League, Team, Player, leagues as initialLeagues } from './data/leagues';
import { CloverBackground } from './components/CloverBackground';
import { getStartingBudget } from './utils/marketUtils';
import { firstNames, lastNames } from './utils/names';
import { Match, generateSchedule, CompetitionType, initializeSeasonMatches } from './utils/scheduleUtils';

export default function App() {
  const [gameState, setGameState] = useState<'menu' | 'setup' | 'playing'>('menu');
  const [allLeagues, setAllLeagues] = useState<League[]>(initialLeagues);
  const [userTeam, setUserTeam] = useState<Team | null>(null);
  const [userLeague, setUserLeague] = useState<League | null>(null);
  const [budget, setBudget] = useState(0);

  const [currentYear, setCurrentYear] = useState(2026);
  const [allMatches, setAllMatches] = useState<Match[]>([]);
  const [continentalMatches, setContinentalMatches] = useState<Match[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  const [activeSlot, setActiveSlot] = useState<number | null>(null);

  // Clover Background definition
  const leagueThemes: Record<string, { bg: string, icons: string }> = {
    'pl': { bg: 'bg-purple-900', icons: 'text-blue-500' },
    'seriea': { bg: 'bg-blue-800', icons: 'text-white' },
    'laliga': { bg: 'bg-orange-700', icons: 'text-red-500' },
    'bundesliga': { bg: 'bg-red-800', icons: 'text-white' },
    'cl': { bg: 'bg-blue-900', icons: 'text-green-300' },
    'el': { bg: 'bg-orange-800', icons: 'text-green-300' },
  };

  const [activeTab, setActiveTab] = useState<'home' | 'squad' | 'league' | 'market' | 'continental' | 'academy'>('home');
  const [nextMatchCompetition, setNextMatchCompetition] = useState<'league' | 'cl' | 'el'>('league');

  const getCloverTheme = () => {
    if (gameState === 'playing') {
      if (nextMatchCompetition === 'cl') return leagueThemes['cl'];
      if (nextMatchCompetition === 'el') return leagueThemes['el'];
      
      if (userLeague && leagueThemes[userLeague.id]) {
        return leagueThemes[userLeague.id];
      }
    }
    return { bg: 'bg-green-700', icons: 'text-green-300' };
  };

  const cloverTheme = getCloverTheme();

  const [saveSlots, setSaveSlots] = useState<{ id: number, exists: boolean, teamName?: string, year?: number }[]>(() => {
    return [1, 2, 3].map(id => {
      const savedData = localStorage.getItem(`fm_career_save_slot_${id}`);
      if (savedData) {
        try {
          const data = JSON.parse(savedData);
          return { 
            id, 
            exists: true, 
            teamName: data.userTeam?.name || 'Unknown Team',
            year: data.currentYear 
          };
        } catch (e) {
          return { id, exists: false };
        }
      }
      return { id, exists: false };
    });
  });

  const handleStartSetup = (slotId: number) => {
    setActiveSlot(slotId);
    setGameState('setup');
  };

  const handleContinueCareer = (slotId: number) => {
    const savedData = localStorage.getItem(`fm_career_save_slot_${slotId}`);
    if (savedData) {
      const data = JSON.parse(savedData);
      setActiveSlot(slotId);
      setAllLeagues(data.allLeagues);
      setUserTeam(data.userTeam);
      setUserLeague(data.userLeague);
      setBudget(data.budget);
      setCurrentYear(data.currentYear || 2026);
      setAllMatches(data.allMatches || []);
      setContinentalMatches(data.continentalMatches || []);
      setCurrentMatchIndex(data.currentMatchIndex || 0);
      setGameState('playing');
    }
  };

  const handleSaveAndExit = (gameStateData: {
    allLeagues: League[];
    userTeam: Team;
    userLeague: League;
    budget: number;
    currentYear: number;
    allMatches: Match[];
    continentalMatches: Match[];
    currentMatchIndex: number;
  }) => {
    if (activeSlot !== null) {
      localStorage.setItem(`fm_career_save_slot_${activeSlot}`, JSON.stringify(gameStateData));
      setSaveSlots(prev => prev.map(s => s.id === activeSlot ? { 
        ...s, 
        exists: true, 
        teamName: gameStateData.userTeam.name,
        year: gameStateData.currentYear
      } : s));
    }
    setGameState('menu');

    // Clean up local state too
    setUserTeam(null);
    setUserLeague(null);
    setAllMatches([]);
    setContinentalMatches([]);
    setCurrentMatchIndex(0);
    setActiveSlot(null);
  };

  const handleDeleteSave = (slotId: number) => {
    localStorage.removeItem(`fm_career_save_slot_${slotId}`);
    setSaveSlots(prev => prev.map(s => s.id === slotId ? { id: slotId, exists: false } : s));
  };

  const handleSetupComplete = (league: League, team: Team) => {
    setUserLeague(league);
    setUserTeam(team);
    setBudget(getStartingBudget(team.rating));
    setCurrentYear(2026);
    setCurrentMatchIndex(0);

    const matchData = initializeSeasonMatches(
      allLeagues.map(l => l.teams),
      allLeagues.flatMap(l => l.teams),
      2026
    );

    setAllMatches(matchData.allMatches);
    setContinentalMatches(matchData.continentalMatches);
    setGameState('playing');
  };

  const handleBuyPlayer = (player: Player, price: number) => {
    if (!userTeam || !userLeague || budget < price) return;

    // 1. Deduct budget
    setBudget(prev => prev - price);

    // 2. Add player to user team
    const updatedUserTeam = {
      ...userTeam,
      players: [...userTeam.players, player]
    };
    setUserTeam(updatedUserTeam);

    // 3. Update league state
    const updatedLeague = {
      ...userLeague,
      teams: userLeague.teams.map(t => {
        if (t.id === userTeam.id) return updatedUserTeam;
        // Remove player from their old team
        return {
          ...t,
          players: t.players.filter(p => p.id !== player.id)
        };
      })
    };
    setUserLeague(updatedLeague);

    // 4. Update allLeagues
    setAllLeagues(prev => prev.map(l => {
      if (l.id === updatedLeague.id) return updatedLeague;
      return {
        ...l,
        teams: l.teams.map(t => ({
          ...t,
          players: t.players.filter(p => p.id !== player.id)
        }))
      };
    }));
  };

  const handleSellPlayer = (player: Player, price: number) => {
    if (!userTeam || !userLeague) return;

    // 1. Add budget
    setBudget(prev => prev + price);

    // 2. Remove player from user team
    const updatedUserTeam = {
      ...userTeam,
      players: userTeam.players.filter(p => p.id !== player.id)
    };
    setUserTeam(updatedUserTeam);

    // 3. Update league state
    const updatedLeague = {
      ...userLeague,
      teams: userLeague.teams.map(t => {
        if (t.id === userTeam.id) return updatedUserTeam;
        return t;
      })
    };
    setUserLeague(updatedLeague);

    // 4. Update allLeagues
    setAllLeagues(prev => prev.map(l => {
      if (l.id === updatedLeague.id) return updatedLeague;
      return l;
    }));
  };

  const handleAdvanceSeason = (reward: number = 0, nextSeasonCont?: { cl: Team[], el: Team[] } | null) => {
    if (!userTeam || !userLeague) return;

    const nextYear = currentYear + 1;
    setCurrentYear(nextYear);
    setBudget(prev => prev + reward);
    setCurrentMatchIndex(0);

    const processPlayer = (p: Player, teamId: string): Player => {
      const newAge = p.age + 1;
      
      if (newAge >= 40) {
        // Regen logic
        const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
        
        return {
          ...p,
          id: `${p.id}-regen-${nextYear}`,
          name: `${randomFirst} ${randomLast}`,
          age: 16 + Math.floor(Math.random() * 3), // 16-18
          rating: 55 + Math.floor(Math.random() * 15), // 55-70 base rating, higher start
          potential: Math.max(60, Math.min(99, p.potential + Math.floor(Math.random() * 11) - 5)), // Vary potential by +/- 5
          matchesPlayedAsYouth: 0,
          matchesThisSeason: 0,
          isYouthPlayer: false,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
          injuries: 0
        };
      }

      let newRating = p.rating;
      
      // Growth/Decline logic
      let ratingChange = 0;
      const potentialDiff = Math.max(0, p.potential - p.rating);

      if (newAge >= 16 && newAge <= 20) {
        // Growth max +10
        if (potentialDiff > 0) {
          ratingChange = Math.floor(Math.random() * 10) + 1;
          ratingChange = Math.min(ratingChange, potentialDiff);
        }
      } else if (newAge >= 21 && newAge <= 27) {
        // Growth max +3
        if (potentialDiff > 0) {
          ratingChange = Math.min(3, potentialDiff);
        }
      } else if (newAge >= 28 && newAge <= 32) {
        // Growth max +1
        if (potentialDiff > 0 && Math.random() < 0.4) {
          ratingChange = 1;
          ratingChange = Math.min(ratingChange, potentialDiff);
        }
      } else if (newAge >= 33 && newAge <= 40) {
        // Decline max -3, lower potential/rating players decline slightly faster
        const potentialFactor = p.potential / 100;
        ratingChange = -1 * Math.floor(Math.random() * 3 + 1 - (potentialFactor - 0.5));
        ratingChange = Math.max(-3, Math.min(-1, ratingChange));
      }

      newRating = Math.min(p.potential, Math.max(40, p.rating + ratingChange));

      // If they have played 10 matches or reached 20 y/o, they are fully integrated and no longer "youth"
      let finalIsYouth = p.isYouthPlayer;
      if (p.isYouthPlayer && ((p.matchesPlayedAsYouth || 0) >= 10 || newAge >= 20)) {
          finalIsYouth = false;
      }

      return { 
        ...p, 
        age: newAge, 
        rating: newRating, 
        matchesThisSeason: 0, 
        isYouthPlayer: finalIsYouth,
        goals: 0,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        injuries: 0
      };
    };

    // Update All Leagues
    const updatedLeagues = allLeagues.map(l => ({
      ...l,
      teams: l.teams.map(t => ({
        ...t,
        players: t.players.map(p => processPlayer(p, t.id))
      }))
    }));
    setAllLeagues(updatedLeagues);

    // Update User Team and League from the processed leagues
    const foundUserLeague = updatedLeagues.find(l => l.id === userLeague.id)!;
    const foundUserTeam = foundUserLeague.teams.find(t => t.id === userTeam.id)!;
    
    setUserLeague(foundUserLeague);
    setUserTeam(foundUserTeam);

    // Generate matches for the upcoming season immediately
    const matchData = initializeSeasonMatches(
      updatedLeagues.map(l => l.teams),
      updatedLeagues.flatMap(l => l.teams),
      nextYear,
      nextSeasonCont
    );

    console.log("INITIALIZING NEXT SEASON", {
      nextSeasonContCL: nextSeasonCont?.cl?.length,
      nextSeasonContEL: nextSeasonCont?.el?.length,
      matchDataCLLength: matchData.continentalMatches.length
    });

    setAllMatches(matchData.allMatches);
    setContinentalMatches(matchData.continentalMatches);
  };

  const handlePromotePlayer = (player: Player) => {
    if (!userTeam || !userLeague) return;

    const updatedUserTeam = {
      ...userTeam,
      players: [...userTeam.players, player]
    };
    setUserTeam(updatedUserTeam);

    const updatedLeague = {
      ...userLeague,
      teams: userLeague.teams.map(t => {
        if (t.id === userTeam.id) return updatedUserTeam;
        return t;
      })
    };
    setUserLeague(updatedLeague);

    // Update allLeagues
    setAllLeagues(prev => prev.map(l => {
      if (l.id === updatedLeague.id) return updatedLeague;
      return l;
    }));
  };

  const handleDeductBudget = (amount: number) => {
    setBudget(prev => prev - amount);
  };

  const handleUpdateLeagues = (updatedLeagues: League[]) => {
    setAllLeagues(updatedLeagues);
    if (userLeague) {
      const foundL = updatedLeagues.find(l => l.id === userLeague.id);
      if (foundL) {
        setUserLeague(foundL);
        const foundT = foundL.teams.find(t => t.id === userTeam?.id);
        if (foundT) setUserTeam(foundT);
      }
    }
  };

  const handlePlayerGrowthAfterMatch = (matchPlayerIds: Set<string>, userTeamId: string, opponentId: string, userStats: any, opponentStats: any) => {
    const updatedLeagues = allLeagues.map(l => ({
      ...l,
      teams: l.teams.map(t => {
        const isUser = t.id === userTeamId;
        const isOpponent = t.id === opponentId;
        const stats = isUser ? userStats : (isOpponent ? opponentStats : null);
        const countOccurrences = (arr: string[] | undefined, name: string) => arr ? arr.filter(n => n === name).length : 0;

        return {
          ...t,
          players: t.players.map(p => {
            let updatedPlayer = { ...p };

            // Apply stats
            if (stats) {
              const goals = countOccurrences(stats.goals, p.name);
              const assists = countOccurrences(stats.assists, p.name);
              const yellows = countOccurrences(stats.yellowCards, p.name);
              const reds = countOccurrences(stats.redCards, p.name);
              const injuries = countOccurrences(stats.injuries, p.name);

              updatedPlayer.goals = (updatedPlayer.goals || 0) + goals;
              updatedPlayer.assists = (updatedPlayer.assists || 0) + assists;
              let currentYellows = (updatedPlayer.yellowCards || 0) + yellows;
              let currentReds = (updatedPlayer.redCards || 0) + reds;
              let newRedsFromMatch = reds;

              if (currentYellows >= 2) {
                  const convertedReds = Math.floor(currentYellows / 2);
                  currentReds += convertedReds;
                  currentYellows = currentYellows % 2;
                  newRedsFromMatch += convertedReds;
              }

              newRedsFromMatch = Math.min(1, newRedsFromMatch);

              updatedPlayer.yellowCards = currentYellows;
              updatedPlayer.redCards = currentReds;
              updatedPlayer.injuries = (updatedPlayer.injuries || 0) + injuries;
              
              if (newRedsFromMatch > 0) {
                 updatedPlayer.suspensionMatches = 2;
              } else if ((updatedPlayer.suspensionMatches || 0) > 0) {
                 updatedPlayer.suspensionMatches! -= 1;
              }

              if (injuries > 0) {
                 updatedPlayer.injuryMatches = 6;
              } else if ((updatedPlayer.injuryMatches || 0) > 0) {
                 updatedPlayer.injuryMatches! -= 1;
              }
            }

            // Apply match player growth for user team
            if (isUser && matchPlayerIds.has(p.id)) {
              updatedPlayer.matchesPlayedAsYouth = (updatedPlayer.matchesPlayedAsYouth || 0) + 1;
              updatedPlayer.matchesThisSeason = (updatedPlayer.matchesThisSeason || 0) + 1;

              let growthChance = 0;
              if (p.age <= 20) growthChance = p.isYouthPlayer ? 0.35 : 0.20;
              else if (p.age <= 24) growthChance = 0.08;
              else if (p.age <= 29) growthChance = 0.03;

              if (Math.random() < growthChance && p.rating < p.potential) {
                let newRating = p.rating + 1;
                if (!(p.isYouthPlayer && p.initialRating !== undefined && (p.matchesPlayedAsYouth || 0) < 10 && newRating > p.initialRating + 5)) {
                  updatedPlayer.rating = newRating;
                }
              }
              
              if (updatedPlayer.isYouthPlayer && ((updatedPlayer.matchesPlayedAsYouth || 0) >= 10 || updatedPlayer.age >= 20)) {
                updatedPlayer.isYouthPlayer = false;
              }
            }

            return updatedPlayer;
          })
        };
      })
    }));

    handleUpdateLeagues(updatedLeagues);
  };

  return (
    <div className="min-h-[100dvh] bg-neutral-900 flex items-center justify-center md:p-8 font-sans overflow-hidden">
      {/* Main Game Container */}
      <div className="relative w-full md:max-w-6xl h-[100dvh] md:h-auto md:aspect-video bg-green-700 md:rounded-3xl shadow-2xl overflow-hidden md:border-8 border-green-800/50 md:ring-4 ring-white/10 flex flex-col">
        
        {/* Pitch Pattern Background - Only visible in menu/playing, dimmed in setup */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${gameState === 'setup' ? 'opacity-5' : 'opacity-20'}`}>
          <div className="w-full h-full" 
               style={{ 
                 backgroundImage: 'linear-gradient(to right, transparent 50%, rgba(255,255,255,0.1) 50%)', 
                 backgroundSize: '10% 100%' 
               }} 
          />
          <div className="absolute inset-0 border-2 border-white/30 m-8 rounded-lg" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/30 rounded-full" />
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30" />
        </div>


...
        {/* Clover Background */}
        <CloverBackground backgroundColor={cloverTheme.bg} iconColor={cloverTheme.icons} />

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full">
          {gameState === 'menu' && (
            <StartMenu 
              onStart={handleStartSetup} 
              onContinue={handleContinueCareer}
              onDelete={handleDeleteSave}
              saveSlots={saveSlots}
            />
          )}
          
          {gameState === 'setup' && (
            <CareerSetup 
              onComplete={handleSetupComplete} 
              onBack={() => setGameState('menu')} 
            />
          )}

          {gameState === 'playing' && userTeam && userLeague && (
            <GameLoop 
              key={currentYear}
              team={userTeam} 
              league={userLeague} 
              leagues={allLeagues}
              budget={budget}
              currentYear={currentYear}
              initialAllMatches={allMatches}
              initialContinentalMatches={continentalMatches}
              initialMatchIndex={currentMatchIndex}
              onAdvanceSeason={handleAdvanceSeason}
              onBuyPlayer={handleBuyPlayer}
              onSellPlayer={handleSellPlayer}
              onDeductBudget={handleDeductBudget}
              onPromotePlayer={handlePromotePlayer}
              onUpdateLeagues={handleUpdateLeagues}
              onPlayerGrowthAfterMatch={handlePlayerGrowthAfterMatch}
              onSaveAndExit={handleSaveAndExit}
              activeTab={activeTab}
              onSetActiveTab={setActiveTab}
              onNextMatchCompetitionChange={setNextMatchCompetition}
            />
          )}

          {/* Developer Credit - Only visible in menu */}
          {gameState === 'menu' && (
            <div className="absolute bottom-4 right-6 text-[11px] md:text-sm font-bold font-mono text-white/70 pointer-events-none uppercase tracking-[0.2em] z-50 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Developer MARKA & YT_LUCKY
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

