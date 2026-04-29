import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Team, League, Player } from '../data/leagues';
import { Lineup, getBestLineup, FORMATIONS, getEffectiveRating } from '../utils/teamUtils';
import { SquadManagement } from './SquadManagement';
import { LeagueTable } from './LeagueTable';
import { MatchSimulation } from './MatchSimulation';
import { TransferMarket } from './TransferMarket';
import { SeasonSummary } from './SeasonSummary';
import { Academy } from './Academy';
import { generateSchedule, getTeamSchedule, generateKnockoutSchedule, Match, CompetitionType } from '../utils/scheduleUtils';
import { simulateMatchResult } from '../utils/matchUtils';
import { Home, Users, Trophy, Calendar, Play, ChevronRight, ShoppingCart, Star, Globe, LogOut } from 'lucide-react';

interface GameLoopProps {
  team: Team | null;
  league: League | null;
  leagues: League[];
  budget: number;
  currentYear: number;
  initialAllMatches?: Match[];
  initialContinentalMatches?: Match[];
  initialMatchIndex?: number;
  onAdvanceSeason: (reward: number) => void;
  onBuyPlayer: (player: Player, price: number) => void;
  onSellPlayer: (player: Player, price: number) => void;
  onDeductBudget: (amount: number) => void;
  onPromotePlayer: (player: Player) => void;
  onUpdateLeagues: (leagues: League[]) => void;
  onPlayerGrowthAfterMatch: (playerIds: Set<string>, userTeamId: string, opponentId: string, userStats: any, opponentStats: any) => void;
  onSaveAndExit: (data: any) => void;
  activeTab: 'home' | 'squad' | 'league' | 'market' | 'continental' | 'academy';
  onSetActiveTab: (tab: 'home' | 'squad' | 'league' | 'market' | 'continental' | 'academy') => void;
  onNextMatchCompetitionChange: (comp: 'league' | 'cl' | 'el') => void;
}

const TOP_5_LEAGUES = ['pl', 'laliga', 'seriea', 'bundesliga', 'ligue1'];

export const GameLoop: React.FC<GameLoopProps> = ({ 
  team, league, leagues, budget, currentYear, 
  initialAllMatches, initialContinentalMatches, initialMatchIndex,
  onAdvanceSeason, onBuyPlayer, onSellPlayer, onDeductBudget, onPromotePlayer, onUpdateLeagues, onPlayerGrowthAfterMatch, onSaveAndExit,
  activeTab, onSetActiveTab, onNextMatchCompetitionChange
}) => {
  const [lineup, setLineup] = useState<Lineup | null>(null);
  const [showMatchSim, setShowMatchSim] = useState(false);
  const [injuredPlayersAlert, setInjuredPlayersAlert] = useState<Player[] | null>(null);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(initialMatchIndex || 0);
  const [allMatches, setAllMatches] = useState<Match[]>(initialAllMatches || []);

  const getLineupRating = useCallback((l: Lineup | null): number => {
    if (!l) return team.rating;
    const formationPositions = FORMATIONS[l.formation];
    const total = l.startingXI.reduce((sum, p, i) => sum + (p ? getEffectiveRating(p, formationPositions[i]) : 0), 0);
    const count = l.startingXI.filter(Boolean).length;
    return count > 0 ? Math.round(total / count) : team.rating;
  }, [team.rating]);
  const [showSummary, setShowSummary] = useState(false);
  const [seasonStats, setSeasonStats] = useState<{ rank: number, points: number, reward: number, clResult?: string, elResult?: string } | null>(null);
  const [continentalMatches, setContinentalMatches] = useState<Match[]>(initialContinentalMatches || []);
  const [isCheatEndingSeason, setIsCheatEndingSeason] = useState(false);
  const [continentalTab, setContinentalTab] = useState<'groups' | 'knockouts'>('groups');
  const [nextSeasonContinental, setNextSeasonContinental] = useState<{ cl: Team[], el: Team[] } | null>(null);

  const allTeams = useMemo(() => leagues.flatMap(l => l.teams), [leagues]);

  // Filter for user team matches
  const userSchedule = useMemo(() => {
    if (!team || allMatches.length === 0) return [];
    const leagueMatches = getTeamSchedule(allMatches, team.id);
    const contMatches = getTeamSchedule(continentalMatches, team.id);
    
    const getContSortOrder = (md: number) => {
      switch(md) {
        case 1: return 65;
        case 2: return 105;
        case 3: return 145;
        case 4: return 185;
        case 5: return 225;
        case 6: return 265;
        case 7: return 305;
        case 8: return 335;
        case 9: return 365;
        case 10: return 395; // After league MD 38 (380)
        default: return md * 40;
      }
    };

    const combined = [...leagueMatches, ...contMatches];
    
    combined.sort((a, b) => {
      const orderA = a.competition === 'league' ? a.matchday * 10 : getContSortOrder(a.matchday);
      const orderB = b.competition === 'league' ? b.matchday * 10 : getContSortOrder(b.matchday);
      return orderA - orderB;
    });

    return combined;
  }, [allMatches, continentalMatches, team?.id]);

  const getQualifiedFromGroups = useCallback((competition: 'cl' | 'el') => {
    const groupResults = calculateContinentalStandings(competition);
    const qualified: Team[] = [];
    // Sort groups A-H
    groupResults.sort((a, b) => a.round.localeCompare(b.round));
    
    // Standard pairing: A1 vs B2, B1 vs A2, C1 vs D2, D1 vs C2 ...
    for (let i = 0; i < 8; i += 2) {
      if (groupResults[i] && groupResults[i+1]) {
        const g1 = groupResults[i].standings;
        const g2 = groupResults[i+1].standings;
        if (g1.length >= 2 && g2.length >= 2) {
          qualified.push(g1[0]); // A1
          qualified.push(g2[1]); // B2
          qualified.push(g2[0]); // B1
          qualified.push(g1[1]); // A2
        }
      }
    }
    return qualified;
  }, [continentalMatches, allTeams]);

  const getWinnersOfRound = useCallback((competition: 'cl' | 'el', roundName: string) => {
    const matches = continentalMatches.filter(m => m.competition === competition && m.round === roundName);
    const winners: Team[] = [];
    matches.forEach(m => {
      if (m.played && m.homeScore !== undefined && m.awayScore !== undefined) {
        if (m.homeScore > m.awayScore) {
          const winner = allTeams.find(t => t.id === m.homeTeamId);
          if (winner) winners.push(winner);
          else console.error("Winner not found", m.homeTeamId);
        } else {
          const winner = allTeams.find(t => t.id === m.awayTeamId);
          if (winner) winners.push(winner);
          else console.error("Winner not found", m.awayTeamId);
        }
      }
    });
    return winners;
  }, [continentalMatches, allTeams]);

  // Advance Continental Rounds
  useEffect(() => {
    if (continentalMatches.length === 0) return;

    const checkAndAdvance = (competition: 'cl' | 'el') => {
      const matches = continentalMatches.filter(m => m.competition === competition);
      
      // 1. Group Stage -> Round of 16
      const groupMatches = matches.filter(m => m.round?.startsWith('Group'));
      console.log(`Checking ${competition}: groupMatches=${groupMatches.length}, allPlayed=${groupMatches.every(m => m.played)}`);
      if (groupMatches.length > 0 && groupMatches.every(m => m.played)) {
        if (!matches.some(m => m.round === 'Round of 16')) {
          console.log(`Advancing ${competition} to Round of 16`);
          const qualified = getQualifiedFromGroups(competition);
          const r16Matches = generateKnockoutSchedule(qualified, competition, 'Round of 16', 7);
          console.log(`Generated ${r16Matches.length} R16 matches`);
          setContinentalMatches(prev => [...prev, ...r16Matches]);
          return;
        }
      }

      // 2. Round of 16 -> Quarter-final
      const r16Matches = matches.filter(m => m.round === 'Round of 16');
      console.log(`Checking ${competition}: r16Matches=${r16Matches.length}, allPlayed=${r16Matches.every(m => m.played)}`);
      if (r16Matches.length > 0 && r16Matches.every(m => m.played)) {
        if (!matches.some(m => m.round === 'Quarter-final')) {
          console.log(`Advancing ${competition} to Quarter-final`);
          const winners = getWinnersOfRound(competition, 'Round of 16');
          const qfMatches = generateKnockoutSchedule(winners, competition, 'Quarter-final', 8);
          console.log(`Generated ${qfMatches.length} QF matches`);
          setContinentalMatches(prev => [...prev, ...qfMatches]);
          return;
        }
      }

      // 3. Quarter-final -> Semi-final
      const qfMatches = matches.filter(m => m.round === 'Quarter-final');
      console.log(`Checking ${competition}: qfMatches=${qfMatches.length}, allPlayed=${qfMatches.every(m => m.played)}`);
      if (qfMatches.length > 0 && qfMatches.every(m => m.played)) {
        if (!matches.some(m => m.round === 'Semi-final')) {
          console.log(`Advancing ${competition} to Semi-final`);
          const winners = getWinnersOfRound(competition, 'Quarter-final');
          const sfMatches = generateKnockoutSchedule(winners, competition, 'Semi-final', 9);
          console.log(`Generated ${sfMatches.length} SF matches`);
          setContinentalMatches(prev => [...prev, ...sfMatches]);
          return;
        }
      }

      // 4. Semi-final -> Final
      const sfMatches = matches.filter(m => m.round === 'Semi-final');
      console.log(`Checking ${competition}: sfMatches=${sfMatches.length}, allPlayed=${sfMatches.every(m => m.played)}`);
      if (sfMatches.length > 0 && sfMatches.every(m => m.played)) {
        if (!matches.some(m => m.round === 'Final')) {
          console.log(`Advancing ${competition} to Final`);
          const winners = getWinnersOfRound(competition, 'Semi-final');
          const fMatches = generateKnockoutSchedule(winners, competition, 'Final', 10);
          console.log(`Generated ${fMatches.length} Final matches`);
          setContinentalMatches(prev => [...prev, ...fMatches]);
          return;
        }
      }
    };

    checkAndAdvance('cl');
    checkAndAdvance('el');
  }, [continentalMatches, getQualifiedFromGroups, getWinnersOfRound]);

  const isPendingContinentalGeneration = useMemo(() => {
    const checkComp = (comp: 'cl' | 'el') => {
        const matches = continentalMatches.filter(m => m.competition === comp);
        if (matches.length === 0) return false;
        
        const hasFinal = matches.some(m => m.round === 'Final');
        if (hasFinal) return false; 
        
        return matches.every(m => m.played);
    };
    return checkComp('cl') || checkComp('el');
  }, [continentalMatches]);

  // Auto-simulate matches if cheat is active
  useEffect(() => {
    const nextMatch = userSchedule[currentMatchIndex];
    if (nextMatch) {
      onNextMatchCompetitionChange(nextMatch.competition === 'league' ? 'league' : nextMatch.competition as 'cl' | 'el');
    } else {
      onNextMatchCompetitionChange('league');
    }
  }, [userSchedule, currentMatchIndex, onNextMatchCompetitionChange]);

  useEffect(() => {
    if (isCheatEndingSeason) {
      const hasUnplayedLeague = allMatches.some(m => !m.played);
      const hasUnplayedCont = continentalMatches.some(m => !m.played);
      
      if (hasUnplayedLeague) {
        setAllMatches(prev => prev.map(m => {
          if (m.played) return m;
          const homeTeam = allTeams.find(t => t.id === m.homeTeamId);
          const awayTeam = allTeams.find(t => t.id === m.awayTeamId);
          if (!homeTeam || !awayTeam) return m;
          
          const result = simulateMatchResult(homeTeam.rating, awayTeam.rating, false);
          return {
            ...m,
            played: true,
            homeScore: result.homeScore,
            awayScore: result.awayScore
          };
        }));
      }
      
      if (hasUnplayedCont) {
        setContinentalMatches(prev => prev.map(m => {
          if (m.played) return m;
          const homeTeam = allTeams.find(t => t.id === m.homeTeamId);
          const awayTeam = allTeams.find(t => t.id === m.awayTeamId);
          if (!homeTeam || !awayTeam) return m;

          const isKnockout = m.round && !m.round.startsWith('Group');
          const result = simulateMatchResult(homeTeam.rating, awayTeam.rating, !!isKnockout);
          
          return {
            ...m,
            played: true,
            homeScore: result.homeScore,
            awayScore: result.awayScore
          };
        }));
      }

      // If everything is played and we are at the end of the user schedule
      if (!hasUnplayedLeague && !hasUnplayedCont && !isPendingContinentalGeneration) {
        setCurrentMatchIndex(userSchedule.length);
        setIsCheatEndingSeason(false);
      }
    }
  }, [isCheatEndingSeason, allMatches, continentalMatches, userSchedule.length, isPendingContinentalGeneration]);

  // Developer Cheat: Press 'p' to end season
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'p' || e.key === 'P') {
        console.log('Developer Cheat: Ending Season');
        setIsCheatEndingSeason(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [allMatches.length]);

  // Filter for user team matches
  // (Moved up)

  const currentMatch = userSchedule[currentMatchIndex];
  const opponentId = currentMatch 
    ? (currentMatch.homeTeamId === team?.id ? currentMatch.awayTeamId : currentMatch.homeTeamId)
    : null;
  
  const opponent = useMemo(() => {
    if (!opponentId) return null;
    return allTeams.find(t => t.id === opponentId) || null;
  }, [allTeams, opponentId]);

  useEffect(() => {
    if (team) {
      if (!lineup) {
        setLineup(getBestLineup(team.players, '4-3-3'));
      } else {
        const currentIds = new Set([
          ...lineup.startingXI.map(p => p.id),
          ...lineup.bench.map(p => p.id)
        ]);
        const newPlayers = team.players.filter(p => !currentIds.has(p.id));
        if (newPlayers.length > 0) {
          setLineup({
            ...lineup,
            bench: [...lineup.bench, ...newPlayers]
          });
        } else {
          const teamIds = new Set(team.players.map(p => p.id));
          const removed = Array.from(currentIds).some(id => !teamIds.has(id));
          if (removed) {
            setLineup(getBestLineup(team.players, lineup.formation));
          } else {
            const playerMap = new Map(team.players.map(p => [p.id, p]));
            setLineup({
              ...lineup,
              startingXI: lineup.startingXI.map(p => playerMap.get(p.id) || p),
              bench: lineup.bench.map(p => playerMap.get(p.id) || p)
            });
          }
        }
      }
    }
  }, [team]);

  const isFirstSeasonRender = useRef(true);

  const calculateStandings = useCallback((targetLeague: League = league!, matches: Match[] = allMatches) => {
    if (!targetLeague) return [];
    const statsMap = new Map<string, { pts: number, gf: number, ga: number }>();
    targetLeague.teams.forEach(t => statsMap.set(t.id, { pts: 0, gf: 0, ga: 0 }));

    matches.forEach(m => {
      if (!m.played || m.homeScore === undefined || m.awayScore === undefined) return;
      
      const home = statsMap.get(m.homeTeamId);
      const away = statsMap.get(m.awayTeamId);
      
      if (home && away) {
        home.gf += m.homeScore; home.ga += m.awayScore;
        away.gf += m.awayScore; away.ga += m.homeScore;
        if (m.homeScore > m.awayScore) home.pts += 3;
        else if (m.homeScore < m.awayScore) away.pts += 3;
        else { home.pts += 1; away.pts += 1; }
      }
    });

    return [...targetLeague.teams].sort((a, b) => {
      const sA = statsMap.get(a.id)!;
      const sB = statsMap.get(b.id)!;
      if (sB.pts !== sA.pts) return sB.pts - sA.pts;
      return (sB.gf - sB.ga) - (sA.gf - sA.ga);
    }).map((t, i) => ({ ...t, rank: i + 1, pts: statsMap.get(t.id)!.pts }));
  }, [league, allMatches]);

  const handleStartMatch = () => {
    if (lineup) {
      if (lineup.startingXI.some(p => p && (p.suspensionMatches || 0) > 0)) {
          alert("You cannot start a match with suspended players in your Starting XI. Please substitute them before continuing.");
          onSetActiveTab('squad');
          return;
      }
      if (lineup.startingXI.some(p => p && (p.injuryMatches || 0) > 0)) {
          alert("You cannot start a match with injured players in your Starting XI. Please substitute them before continuing.");
          onSetActiveTab('squad');
          return;
      }
    }
    setShowMatchSim(true);
  };

  const handleMatchComplete = (userScore: number, opponentScore: number, userStats: any, opponentStats: any) => {
    if (!team || !league || !lineup) return;

    if (userStats && userStats.injuries && userStats.injuries.length > 0) {
        const injuredNames = userStats.injuries;
        const newlyInjured = [...lineup.startingXI, ...lineup.bench].filter(p => p && injuredNames.includes(p.name));
        if (newlyInjured.length > 0) {
           setInjuredPlayersAlert(newlyInjured as Player[]);
        }
    }

    // Requirement: Increment matchesPlayedAsYouth for players in the starting XI
    const startingIds = new Set(lineup.startingXI.map(p => p.id));
    
    // We update player stats and growth in one go via App's callback
    const opponent = currentMatch?.homeTeamId === team.id ? allTeams.find(t => t.id === currentMatch.awayTeamId) : allTeams.find(t => t.id === currentMatch.homeTeamId);
    
    if (opponent) {
      onPlayerGrowthAfterMatch(startingIds, team.id, opponent.id, userStats, opponentStats);
    }
    
    const isLeagueMatch = currentMatch?.competition === 'league';

    if (isLeagueMatch) {
      setAllMatches(prevMatches => {
        const updatedMatches = [...prevMatches];
        const matchIndex = updatedMatches.findIndex(m => m.id === currentMatch.id);

        if (matchIndex !== -1) {
          const userMatch = { ...updatedMatches[matchIndex] };
          userMatch.played = true;
          if (userMatch.homeTeamId === team.id) {
            userMatch.homeScore = userScore;
            userMatch.awayScore = opponentScore;
          } else {
            userMatch.homeScore = opponentScore;
            userMatch.awayScore = userScore;
          }
          updatedMatches[matchIndex] = userMatch;

          // Simulate other matches in the same matchday
          const matchday = userMatch.matchday;
          updatedMatches.forEach((m, i) => {
            if (m.matchday === matchday && !m.played) {
              const homeTeam = allTeams.find(t => t.id === m.homeTeamId);
              const awayTeam = allTeams.find(t => t.id === m.awayTeamId);
              
              if (homeTeam && awayTeam) {
                const result = simulateMatchResult(homeTeam.rating, awayTeam.rating, false);
                
                m.homeScore = result.homeScore;
                m.awayScore = result.awayScore;
                m.played = true;
                updatedMatches[i] = m;
              }
            }
          });
        }
        return updatedMatches;
      });

      // Auto-simulate continental matches if user is not involved
      setContinentalMatches(prevCont => {
        let updatedCont = [...prevCont];
        let changed = false;
        
        // Calculate how many league matches the user has played
        const userLeagueMatchesPlayed = allMatches.filter(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.played).length + 1;
        
        // Every ~3.5 league matches, a continental matchday passes
        const expectedContMatchday = Math.floor(userLeagueMatchesPlayed / 3.5);
        
        for (let md = 1; md <= expectedContMatchday; md++) {
          const userInvolved = updatedCont.some(m => m.matchday === md && (m.homeTeamId === team.id || m.awayTeamId === team.id));
          
          if (!userInvolved) {
            updatedCont.forEach((m, i) => {
              if (m.matchday === md && !m.played) {
                const homeTeam = allTeams.find(t => t.id === m.homeTeamId)!;
                const awayTeam = allTeams.find(t => t.id === m.awayTeamId)!;
                const isKnockout = m.round && !m.round.startsWith('Group');
                const result = simulateMatchResult(homeTeam.rating, awayTeam.rating, !!isKnockout);

                m.homeScore = result.homeScore;
                m.awayScore = result.awayScore;

                m.played = true;
                updatedCont[i] = m;
                changed = true;
              }
            });
          }
        }
        return changed ? updatedCont : prevCont;
      });
    } else {
      // Continental Match
      setContinentalMatches(prevMatches => {
        const updatedMatches = [...prevMatches];
        const matchIndex = updatedMatches.findIndex(m => m.id === currentMatch.id);

        if (matchIndex !== -1) {
          const userMatch = { ...updatedMatches[matchIndex] };
          userMatch.played = true;
          if (userMatch.homeTeamId === team.id) {
            userMatch.homeScore = userScore;
            userMatch.awayScore = opponentScore;
          } else {
            userMatch.homeScore = opponentScore;
            userMatch.awayScore = userScore;
          }
          updatedMatches[matchIndex] = userMatch;

          // Handle draws in knockout matches
          if (userMatch.round && !userMatch.round.startsWith('Group') && userMatch.homeScore === userMatch.awayScore) {
            if (Math.random() > 0.5) userMatch.homeScore! += 1;
            else userMatch.awayScore! += 1;
          }

          // Simulate other matches in the same matchday across all groups
          const matchday = userMatch.matchday;
          const competition = userMatch.competition;
          updatedMatches.forEach((m, i) => {
            if (m.competition === competition && m.matchday === matchday && !m.played) {
              const homeTeam = allTeams.find(t => t.id === m.homeTeamId)!;
              const awayTeam = allTeams.find(t => t.id === m.awayTeamId)!;
              const isKnockout = m.round && !m.round.startsWith('Group');
              const result = simulateMatchResult(homeTeam.rating, awayTeam.rating, !!isKnockout);

              m.homeScore = result.homeScore;
              m.awayScore = result.awayScore;

              m.played = true;
              updatedMatches[i] = m;
            }
          });
        }
        return updatedMatches;
      });
    }

    setShowMatchSim(false);
    if (currentMatchIndex < userSchedule.length - 1) {
      setCurrentMatchIndex(prev => prev + 1);
    } else {
      setCurrentMatchIndex(userSchedule.length);
    }
  };

  const hasUnplayedContinental = useMemo(() => {
    return continentalMatches.some(m => !m.played);
  }, [continentalMatches]);

  const isSeasonOver = allMatches.length > 0 && currentMatchIndex >= userSchedule.length && !isPendingContinentalGeneration && !hasUnplayedContinental;

  // Auto-simulate remaining continental matches when user season is done
  useEffect(() => {
    if (currentMatchIndex >= userSchedule.length && hasUnplayedContinental) {
      const timer = setTimeout(() => {
        setContinentalMatches(prev => {
          const updated = [...prev];
          let changed = false;
          updated.forEach((m, i) => {
            if (!m.played) {
              const homeTeam = allTeams.find(t => t.id === m.homeTeamId);
              const awayTeam = allTeams.find(t => t.id === m.awayTeamId);
              if (homeTeam && awayTeam) {
                const isKnockout = m.round && !m.round.startsWith('Group');
                const result = simulateMatchResult(homeTeam.rating, awayTeam.rating, !!isKnockout);
                updated[i] = { ...m, played: true, homeScore: result.homeScore, awayScore: result.awayScore };
                changed = true;
              } else {
                console.error("Match teams not found for auto-simulation", m.homeTeamId, m.awayTeamId);
              }
            }
          });
          return changed ? updated : prev;
        });
      }, 1000); // 1 second delay for effect
      return () => clearTimeout(timer);
    }
  }, [currentMatchIndex, userSchedule.length, hasUnplayedContinental, allTeams]);

  const calculateContinentalStandings = useCallback((competition: 'cl' | 'el') => {
    const matches = continentalMatches.filter(m => m.competition === competition && m.round?.startsWith('Group'));
    const rounds: string[] = Array.from(new Set<string>(matches.map(m => (m.round as string) || 'Unknown')));
    const results: { round: string, standings: any[] }[] = [];

    rounds.forEach((round: string) => {
      const roundMatches = matches.filter(m => ((m.round as string) || 'Unknown') === round);
      const teamIds: string[] = Array.from(new Set<string>(roundMatches.flatMap(m => [m.homeTeamId, m.awayTeamId])));
      const statsMap = new Map<string, { pts: number, gf: number, ga: number }>();
      teamIds.forEach((id: string) => statsMap.set(id, { pts: 0, gf: 0, ga: 0 }));

      roundMatches.forEach(m => {
        if (!m.played || m.homeScore === undefined || m.awayScore === undefined) return;
        const home = statsMap.get(m.homeTeamId)!;
        const away = statsMap.get(m.awayTeamId)!;
        home.gf += m.homeScore; home.ga += m.awayScore;
        away.gf += m.awayScore; away.ga += m.homeScore;
        if (m.homeScore > m.awayScore) home.pts += 3;
        else if (m.homeScore < m.awayScore) away.pts += 3;
        else { home.pts += 1; away.pts += 1; }
      });

      const standings = teamIds.map((id: string) => {
        const team = allTeams.find(t => t.id === id)!;
        return { ...team, ...statsMap.get(id)! };
      }).sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        return (b.gf - b.ga) - (a.gf - a.ga);
      });

      results.push({ round, standings });
    });

    return results;
  }, [continentalMatches, allTeams]);

  const handleEndSeason = () => {
    // 1. Simulate any remaining unplayed matches in ALL leagues
    const simulatedMatches = allMatches.map(m => {
      if (m.played) return m;
      const homeTeam = allTeams.find(t => t.id === m.homeTeamId);
      const awayTeam = allTeams.find(t => t.id === m.awayTeamId);
      if (homeTeam && awayTeam) {
        const result = simulateMatchResult(homeTeam.rating, awayTeam.rating, false);
        return { ...m, played: true, homeScore: result.homeScore, awayScore: result.awayScore };
      }
      return m;
    });
    setAllMatches(simulatedMatches);

    // 2. Calculate standings for current league (for user reward)
    const standings = calculateStandings(league!, simulatedMatches);
    const userStanding = standings.find(t => t.id === team?.id);
    
    // 3. Calculate qualifiers for NEXT season
    const nextCL: Team[] = [];
    const nextEL: Team[] = [];

    const getTopTeams = (leagueId: string, count: number, offset: number = 0) => {
      const l = leagues.find(lg => lg.id === leagueId);
      if (!l) return [];
      const s = calculateStandings(l, simulatedMatches);
      return s.slice(offset, offset + count);
    };

    // Tier 1: Top 5 Leagues (4 CL, 3 EL)
    ['pl', 'laliga', 'seriea', 'bundesliga', 'ligue1'].forEach(lid => {
      nextCL.push(...getTopTeams(lid, 4));
      nextEL.push(...getTopTeams(lid, 3, 4));
    });

    // Tier 2: Portugal, Netherlands, Turkey (3 CL, 3 EL) - Adjusted to fill spots
    // Actually, let's stick to the plan:
    // Tier 2: 1 CL, 2 CL Qual (Total 3 CL spots? No, let's do 2 CL, 3 EL)
    // Wait, previous plan:
    // Tier 1 (5 leagues): 4 CL, 3 EL -> 20 CL, 15 EL
    // Tier 2 (3 leagues): 3 CL, 3 EL -> 9 CL, 9 EL
    // Tier 3 (1 league): 2 CL, 4 EL -> 2 CL, 4 EL
    // Tier 4 (1 league): 1 CL, 4 EL -> 1 CL, 4 EL
    // Total CL: 20 + 9 + 2 + 1 = 32.
    // Total EL: 15 + 9 + 4 + 4 = 32.
    
    ['nos', 'eredivisie'].forEach(lid => {
      nextCL.push(...getTopTeams(lid, 3));
      nextEL.push(...getTopTeams(lid, 4, 3));
    });

    ['superlig'].forEach(lid => {
      nextCL.push(...getTopTeams(lid, 3));
      nextEL.push(...getTopTeams(lid, 3, 3));
    });

    ['rpl'].forEach(lid => {
      nextCL.push(...getTopTeams(lid, 2));
      nextEL.push(...getTopTeams(lid, 4, 2));
    });

    ['kpl'].forEach(lid => {
      nextCL.push(...getTopTeams(lid, 1));
      nextEL.push(...getTopTeams(lid, 2, 1));
    });

    console.log("Season Ends. Computed next continental spots:", {
       nextCL: nextCL.length,
       nextEL: nextEL.length,
       nextClEmpty: nextCL.filter(x => !x).length,
       nextElEmpty: nextEL.filter(x => !x).length
    });

    setNextSeasonContinental({ cl: nextCL, el: nextEL });

    if (userStanding && league) {
      const isTop5 = TOP_5_LEAGUES.includes(league.id);
      const winReward = isTop5 ? 80 : 45;
      const rankReward = Math.max(0, (21 - userStanding.rank) * 2);
      
      let totalReward = (userStanding.rank === 1 ? winReward : 0) + rankReward;
      let clResult = undefined;
      let elResult = undefined;

      // Check CL
      const clMatches = continentalMatches.filter(m => m.competition === 'cl');
      const clFinal = clMatches.find(m => m.round === 'Final');
      if (clFinal && clFinal.played) {
        const winnerId = clFinal.homeScore! > clFinal.awayScore! ? clFinal.homeTeamId : clFinal.awayTeamId;
        if (winnerId === team.id) {
          totalReward += 70;
          clResult = 'WINNER';
        } else if (clMatches.some(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.round === 'Final')) {
          clResult = 'RUNNER-UP';
        } else if (clMatches.some(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.round === 'Semi-final')) {
          clResult = 'SEMI-FINAL';
        } else if (clMatches.some(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.round === 'Quarter-final')) {
          clResult = 'QUARTER-FINAL';
        } else if (clMatches.some(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.round === 'Round of 16')) {
          clResult = 'ROUND OF 16';
        } else {
          clResult = 'Group Stage';
        }
      } else {
        const clStandings = calculateContinentalStandings('cl');
        const userClGroup = clStandings.find(r => r.standings.some(t => t.id === team.id));
        if (userClGroup) {
          const userRank = userClGroup.standings.findIndex(t => t.id === team.id) + 1;
          if (userRank <= 2) clResult = 'Qualified for Knockouts';
          else clResult = 'Group Stage';
        }
      }

      // Check EL
      const elMatches = continentalMatches.filter(m => m.competition === 'el');
      const elFinal = elMatches.find(m => m.round === 'Final');
      if (elFinal && elFinal.played) {
        const winnerId = elFinal.homeScore! > elFinal.awayScore! ? elFinal.homeTeamId : elFinal.awayTeamId;
        if (winnerId === team.id) {
          totalReward += 35;
          elResult = 'WINNER';
        } else if (elMatches.some(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.round === 'Final')) {
          elResult = 'RUNNER-UP';
        } else if (elMatches.some(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.round === 'Semi-final')) {
          elResult = 'SEMI-FINAL';
        } else if (elMatches.some(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.round === 'Quarter-final')) {
          elResult = 'QUARTER-FINAL';
        } else if (elMatches.some(m => (m.homeTeamId === team.id || m.awayTeamId === team.id) && m.round === 'Round of 16')) {
          elResult = 'ROUND OF 16';
        } else {
          elResult = 'Group Stage';
        }
      } else {
        const elStandings = calculateContinentalStandings('el');
        const userElGroup = elStandings.find(r => r.standings.some(t => t.id === team.id));
        if (userElGroup) {
          const userRank = userElGroup.standings.findIndex(t => t.id === team.id) + 1;
          if (userRank <= 2) elResult = 'Qualified for Knockouts';
          else elResult = 'Group Stage';
        }
      }
      
      setSeasonStats({
        rank: userStanding.rank,
        points: userStanding.pts,
        reward: totalReward,
        clResult,
        elResult
      });
      setShowSummary(true);
    }
  };

  const handleExit = () => {
    onSaveAndExit({
        allLeagues: leagues,
        userTeam: team,
        userLeague: league,
        budget,
        currentYear,
        allMatches,
        continentalMatches,
        currentMatchIndex
    });
  };

  if (!team || !league) {
    return <div className="flex items-center justify-center h-full text-white"><p>Loading manager data...</p></div>;
  }

  return (
    <div className="flex flex-col h-full text-white">
      {/* Top Navigation Bar (Desktop) */}
      <div className="hidden md:flex bg-black/40 backdrop-blur-md border-b border-white/10 p-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-black shadow-lg"
            style={{ background: `linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]})`, color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            {team.name.substring(0, 1)}
          </div>
          <div>
            <h2 className="font-bold leading-tight">{team.name}</h2>
            <p className="text-xs text-white/60">{league.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
          <button onClick={() => onSetActiveTab('home')} className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${activeTab === 'home' ? 'bg-green-600 text-white shadow-lg' : 'hover:bg-white/10 text-white/70'}`}><Home size={18} /><span className="hidden sm:inline">Overview</span></button>
          <button onClick={() => onSetActiveTab('squad')} className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${activeTab === 'squad' ? 'bg-green-600 text-white shadow-lg' : 'hover:bg-white/10 text-white/70'}`}><Users size={18} /><span className="hidden sm:inline">Squad</span></button>
          <button onClick={() => onSetActiveTab('league')} className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${activeTab === 'league' ? 'bg-green-600 text-white shadow-lg' : 'hover:bg-white/10 text-white/70'}`}><Trophy size={18} /><span className="hidden sm:inline">League</span></button>
          <button onClick={() => onSetActiveTab('market')} className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${activeTab === 'market' ? 'bg-green-600 text-white shadow-lg' : 'hover:bg-white/10 text-white/70'}`}><ShoppingCart size={18} /><span className="hidden sm:inline">Market</span></button>
          <button onClick={() => onSetActiveTab('academy')} className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${activeTab === 'academy' ? 'bg-green-600 text-white shadow-lg' : 'hover:bg-white/10 text-white/70'}`}><Star size={18} /><span className="hidden sm:inline">Academy</span></button>
          <button onClick={() => onSetActiveTab('continental')} className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${activeTab === 'continental' ? 'bg-green-600 text-white shadow-lg' : 'hover:bg-white/10 text-white/70'}`}><Globe size={18} /><span className="hidden sm:inline">Continental</span></button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-black/40 backdrop-blur-md border-b border-white/10 p-4 flex items-center gap-4">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-black shadow-lg"
            style={{ background: `linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]})`, color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            {team.name.substring(0, 1)}
          </div>
          <div>
            <h2 className="font-bold leading-tight">{team.name}</h2>
            <p className="text-xs text-white/60">{league.name}</p>
          </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden p-4 md:p-8 pb-[90px] md:pb-8 flex flex-col min-h-0 relative">
        {activeTab === 'home' && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-center bg-black/40 p-8 rounded-2xl backdrop-blur-md border border-white/10 max-w-2xl w-full relative">
              <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                {isSeasonOver ? 'Season Finished' : `Match ${currentMatchIndex + 1} / ${userSchedule.length}`}
              </div>
              <h2 className="text-3xl font-bold mb-2">Season {currentYear}/{currentYear + 1}</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto mb-6 rounded-full" />
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                  <p className="text-white/50 mb-1 uppercase text-xs tracking-wider">Next Match</p>
                  <p className="font-bold text-lg">{isSeasonOver ? 'None' : (opponent?.name || 'Loading...')}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                  <p className="text-white/50 mb-1 uppercase text-xs tracking-wider">Budget</p>
                  <p className="font-bold text-lg text-green-300">€{budget}M</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                {!isSeasonOver ? (
                  currentMatchIndex < userSchedule.length ? (
                    <button onClick={handleStartMatch} className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/20"><Play size={18} fill="currentColor" />Simulate Match</button>
                  ) : (
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg font-bold text-white/50 animate-pulse">
                      <Globe size={18} className="animate-spin" />
                      Processing Continental Results...
                    </div>
                  )
                ) : (
                  <button onClick={handleEndSeason} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg"><ChevronRight size={18} />End Season</button>
                )}

                <button 
                  onClick={handleExit}
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg font-bold flex items-center justify-center gap-2 transition-all border border-white/10"
                >
                  <LogOut size={18} />
                  Save & Exit
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'squad' && lineup && <SquadManagement lineup={lineup} onUpdateLineup={setLineup} onSellPlayer={onSellPlayer} onAddPlayer={onPromotePlayer} />}
        {activeTab === 'league' && <div className="h-full overflow-y-auto pr-2"><LeagueTable league={league} userTeamId={team.id} matches={allMatches} /></div>}
        {activeTab === 'market' && <TransferMarket leagues={leagues} userTeam={team} budget={budget} onBuyPlayer={onBuyPlayer} />}
        {activeTab === 'academy' && (
          <Academy 
            budget={budget}
            onPromotePlayer={onPromotePlayer}
            onDeductBudget={onDeductBudget}
          />
        )}
        {activeTab === 'continental' && (
          <div className="h-full overflow-y-auto pr-2 space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="text-blue-400" size={32} />
              <div>
                <h3 className="text-2xl font-bold">Continental Competitions</h3>
                <p className="text-white/50 text-sm">Champions League & Europa League Group Stages</p>
              </div>
            </div>

            {/* Continental Tabs */}
            <div className="flex gap-4 border-b border-white/10 pb-4">
              <button 
                onClick={() => setContinentalTab('groups')}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${continentalTab === 'groups' ? 'bg-blue-600 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
              >
                Group Stage
              </button>
              <button 
                onClick={() => setContinentalTab('knockouts')}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${continentalTab === 'knockouts' ? 'bg-blue-600 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
              >
                Knockout Stage
              </button>
            </div>

            {/* Champions League */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
                <Star size={16} fill="currentColor" />
                Champions League
              </div>
              
              {/* CL Knockouts */}
              {continentalTab === 'knockouts' && (
                <div className="space-y-4">
                  {continentalMatches.filter(m => m.competition === 'cl' && !m.round?.startsWith('Group')).length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {['Round of 16', 'Quarter-final', 'Semi-final', 'Final'].map(round => {
                        const roundMatches = continentalMatches.filter(m => m.competition === 'cl' && m.round === round);
                        if (roundMatches.length === 0) return null;
                        return (
                          <div key={round} className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-3">
                            <div className="text-[10px] font-bold text-blue-400 uppercase mb-2">{round}</div>
                            <div className="space-y-2">
                              {roundMatches.map(m => {
                                const isUserMatch = m.homeTeamId === team.id || m.awayTeamId === team.id;
                                return (
                                  <div key={m.id} className={`flex items-center justify-between text-[11px] p-2 rounded border ${isUserMatch ? 'bg-blue-500/20 border-blue-400' : 'bg-black/20 border-white/5'}`}>
                                    <div className={`truncate flex-1 text-right pr-2 ${m.homeTeamId === team.id ? 'text-yellow-400 font-bold' : ''}`}>{allTeams.find(t => t.id === m.homeTeamId)?.name}</div>
                                    <div className="bg-blue-500/20 px-2 py-0.5 rounded font-mono text-blue-300">
                                      {m.played ? `${m.homeScore} - ${m.awayScore}` : 'vs'}
                                    </div>
                                    <div className={`truncate flex-1 pl-2 ${m.awayTeamId === team.id ? 'text-yellow-400 font-bold' : ''}`}>{allTeams.find(t => t.id === m.awayTeamId)?.name}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-white/30 text-center py-8">Knockout stage hasn't started yet.</div>
                  )}
                </div>
              )}

              {continentalTab === 'groups' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {calculateContinentalStandings('cl').map((group, idx) => (
                    <div key={idx} className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
                      <div className="bg-blue-900/20 p-3 border-b border-white/10 font-bold text-sm">
                        {group.round}
                      </div>
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="text-white/40 border-b border-white/5">
                            <th className="p-2 text-left">Team</th>
                            <th className="p-2 text-center">PTS</th>
                            <th className="p-2 text-center">GD</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.standings.map((t, i) => (
                            <tr key={t.id} className={`border-b border-white/5 ${t.id === team.id ? 'bg-blue-500/20 border-l-2 border-l-blue-400' : ''}`}>
                              <td className="p-2 flex items-center gap-2">
                                <span className="w-4 text-white/30">{i + 1}</span>
                                <span className={`font-medium truncate max-w-[120px] ${t.id === team.id ? 'text-yellow-400 font-bold' : ''}`}>{t.name}</span>
                              </td>
                              <td className="p-2 text-center font-bold">{t.pts}</td>
                              <td className="p-2 text-center text-white/50">{t.gf - t.ga}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Europa League */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm">
                <Star size={16} fill="currentColor" />
                Europa League
              </div>

              {/* EL Knockouts */}
              {continentalTab === 'knockouts' && (
                <div className="space-y-4">
                  {continentalMatches.filter(m => m.competition === 'el' && !m.round?.startsWith('Group')).length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {['Round of 16', 'Quarter-final', 'Semi-final', 'Final'].map(round => {
                        const roundMatches = continentalMatches.filter(m => m.competition === 'el' && m.round === round);
                        if (roundMatches.length === 0) return null;
                        return (
                          <div key={round} className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-3">
                            <div className="text-[10px] font-bold text-orange-400 uppercase mb-2">{round}</div>
                            <div className="space-y-2">
                              {roundMatches.map(m => {
                                const isUserMatch = m.homeTeamId === team.id || m.awayTeamId === team.id;
                                return (
                                  <div key={m.id} className={`flex items-center justify-between text-[11px] p-2 rounded border ${isUserMatch ? 'bg-orange-500/20 border-orange-400' : 'bg-black/20 border-white/5'}`}>
                                    <div className={`truncate flex-1 text-right pr-2 ${m.homeTeamId === team.id ? 'text-yellow-400 font-bold' : ''}`}>{allTeams.find(t => t.id === m.homeTeamId)?.name}</div>
                                    <div className="bg-orange-500/20 px-2 py-0.5 rounded font-mono text-orange-300">
                                      {m.played ? `${m.homeScore} - ${m.awayScore}` : 'vs'}
                                    </div>
                                    <div className={`truncate flex-1 pl-2 ${m.awayTeamId === team.id ? 'text-yellow-400 font-bold' : ''}`}>{allTeams.find(t => t.id === m.awayTeamId)?.name}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-white/30 text-center py-8">Knockout stage hasn't started yet.</div>
                  )}
                </div>
              )}

              {continentalTab === 'groups' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {calculateContinentalStandings('el').map((group, idx) => (
                    <div key={idx} className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
                      <div className="bg-orange-900/20 p-3 border-b border-white/10 font-bold text-sm">
                        {group.round}
                      </div>
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="text-white/40 border-b border-white/5">
                            <th className="p-2 text-left">Team</th>
                            <th className="p-2 text-center">PTS</th>
                            <th className="p-2 text-center">GD</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.standings.map((t, i) => (
                            <tr key={t.id} className={`border-b border-white/5 ${t.id === team.id ? 'bg-orange-500/20 border-l-2 border-l-orange-400' : ''}`}>
                              <td className="p-2 flex items-center gap-2">
                                <span className="w-4 text-white/30">{i + 1}</span>
                                <span className={`font-medium truncate max-w-[120px] ${t.id === team.id ? 'text-yellow-400 font-bold' : ''}`}>{t.name}</span>
                              </td>
                              <td className="p-2 text-center font-bold">{t.pts}</td>
                              <td className="p-2 text-center text-white/50">{t.gf - t.ga}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {showSummary && seasonStats && (
        <SeasonSummary 
          year={currentYear} 
          leagueName={league.name} 
          rank={seasonStats.rank} 
          points={seasonStats.points} 
          budgetEarned={seasonStats.reward} 
          onContinue={() => onAdvanceSeason(seasonStats.reward, nextSeasonContinental)} 
        />
      )}

      {showMatchSim && opponent && currentMatch && <MatchSimulation competition={currentMatch.competition} userTeam={{ ...team, rating: getLineupRating(lineup), players: lineup ? lineup.startingXI.filter((p): p is Player => p !== null) : team.players }} opponentTeam={opponent} onClose={() => setShowMatchSim(false)} onComplete={handleMatchComplete} />}

      {injuredPlayersAlert && injuredPlayersAlert.length > 0 && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-orange-500/50 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl shadow-orange-500/20">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏥</span>
            </div>
            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Player Injured</h2>
            <div className="space-y-3 mb-6">
              {injuredPlayersAlert.map((p, idx) => (
                <div key={idx} className="bg-black/50 p-3 rounded-xl border border-white/5">
                  <div className="text-lg font-bold text-white">{p.name}</div>
                  <div className="text-sm text-orange-400 font-medium">Out for 6 matches</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setInjuredPlayersAlert(null)}
              className="w-full py-3 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 px-2 flex justify-around items-center z-[100] pb-safe pt-1 min-h-[64px]">
        <button onClick={() => onSetActiveTab('home')} className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-all ${activeTab === 'home' ? 'text-green-400 bg-white/5' : 'text-white/50 hover:text-white/80'}`}>
          <Home size={22} />
          <span className="text-[9px] mt-1 font-bold">Home</span>
        </button>
        <button onClick={() => onSetActiveTab('squad')} className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-all ${activeTab === 'squad' ? 'text-green-400 bg-white/5' : 'text-white/50 hover:text-white/80'}`}>
          <Users size={22} />
          <span className="text-[9px] mt-1 font-bold">Squad</span>
        </button>
        <button onClick={() => onSetActiveTab('league')} className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-all ${activeTab === 'league' ? 'text-green-400 bg-white/5' : 'text-white/50 hover:text-white/80'}`}>
          <Trophy size={22} />
          <span className="text-[9px] mt-1 font-bold">League</span>
        </button>
        <button onClick={() => onSetActiveTab('market')} className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-all ${activeTab === 'market' ? 'text-green-400 bg-white/5' : 'text-white/50 hover:text-white/80'}`}>
          <ShoppingCart size={22} />
          <span className="text-[9px] mt-1 font-bold">Market</span>
        </button>
        <button onClick={() => onSetActiveTab('academy')} className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-all ${activeTab === 'academy' ? 'text-green-400 bg-white/5' : 'text-white/50 hover:text-white/80'}`}>
          <Star size={22} />
          <span className="text-[9px] mt-1 font-bold">Academy</span>
        </button>
        <button onClick={() => onSetActiveTab('continental')} className={`flex flex-col items-center p-2 min-w-[56px] rounded-lg transition-all ${activeTab === 'continental' ? 'text-green-400 bg-white/5' : 'text-white/50 hover:text-white/80'}`}>
          <Globe size={22} />
          <span className="text-[9px] mt-1 font-bold">Europe</span>
        </button>
      </div>
    </div>
  );
};
