import React, { useState, useEffect } from 'react';
import { Team } from '../data/leagues';
import { Clover, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CompetitionType } from '../utils/scheduleUtils';

interface MatchSimulationProps {
  userTeam: Team;
  opponentTeam: Team;
  onClose: () => void;
  onComplete: (userScore: number, opponentScore: number, userStats: any, opponentStats: any) => void;
  competition: CompetitionType;
}

export const MatchSimulation: React.FC<MatchSimulationProps> = ({ userTeam, opponentTeam, onClose, onComplete, competition }) => {
  const [score, setScore] = useState<{ 
      user: number, 
      opponent: number, 
      userScorers: string[], 
      userAssists: string[],
      opponentScorers: string[],
      opponentAssists: string[],
      userYellowCards: string[],
      userRedCards: string[],
      userInjuries: string[],
      opponentYellowCards: string[],
      opponentRedCards: string[],
      opponentInjuries: string[]
  } | null>(null);
  const [isSimulating, setIsSimulating] = useState(true);

  useEffect(() => {
    const simulate = () => {
      const diff = Math.abs(userTeam.rating - opponentTeam.rating);
      const isUserHigher = userTeam.rating >= opponentTeam.rating;
      
      let winChanceHigh = 0;
      let drawChance = 0;

      if (diff <= 2) {
        winChanceHigh = 0.45;
        drawChance = 0.10;
      } else if (diff <= 5) {
        winChanceHigh = 0.60;
        drawChance = 0.03;
      } else if (diff <= 10) {
        winChanceHigh = 0.75;
        drawChance = 0.01;
      } else {
        winChanceHigh = 0.91;
        drawChance = 0.00;
      }

      const rand = Math.random();
      let result: 'user' | 'opponent' | 'draw';

      if (rand < winChanceHigh) {
        result = isUserHigher ? 'user' : 'opponent';
      } else if (rand < winChanceHigh + drawChance) {
        result = 'draw';
      } else {
        result = isUserHigher ? 'opponent' : 'user';
      }

      // Generate scores
      let userGoals = 0;
      let opponentGoals = 0;

      if (result === 'draw') {
        const goals = Math.floor(Math.random() * 4); // 0-3 goals
        userGoals = goals;
        opponentGoals = goals;
      } else if (result === 'user') {
        userGoals = Math.floor(Math.random() * 3) + 1; // 1-3 min
        opponentGoals = Math.floor(Math.random() * userGoals);
        if (diff > 5 && Math.random() > 0.5) userGoals += 1;
        if (diff > 10 && Math.random() > 0.5) userGoals += 2;
      } else {
        opponentGoals = Math.floor(Math.random() * 3) + 1;
        userGoals = Math.floor(Math.random() * opponentGoals);
        if (diff > 5 && Math.random() > 0.5) opponentGoals += 1;
        if (diff > 10 && Math.random() > 0.5) opponentGoals += 2;
      }

      // Generate scorers
      const chooseScorer = (team: Team): string => {
        const rand = Math.random();
        let pos: 'GK' | 'DEF' | 'MID' | 'FWD';
        if (rand < 0.65) pos = 'FWD';
        else if (rand < 0.90) pos = 'MID';
        else if (rand < 0.98) pos = 'DEF';
        else pos = 'GK';
        
        let candidates = team.players.filter(p => p.position === pos);
        if (candidates.length === 0) candidates = team.players;
        
        // Weight selection by rating
        const totalRating = candidates.reduce((sum, p) => sum + p.rating, 0);
        let randomRating = Math.random() * totalRating;
        for (const player of candidates) {
          randomRating -= player.rating;
          if (randomRating <= 0) return player.name;
        }
        return candidates[candidates.length - 1].name;
      };

      const userScorers: string[] = [];
      const userAssists: string[] = [];
      const userYellowCards: string[] = [];
      const userRedCards: string[] = [];
      const userInjuries: string[] = [];

      for (let i = 0; i < userGoals; i++) {
        userScorers.push(chooseScorer(userTeam));
        userAssists.push(userTeam.players[Math.floor(Math.random() * userTeam.players.length)]?.name || 'Player');
      }
      
      // Simulate cards/injuries
      const simulateEvents = (team: Team, yellowCards: string[], redCards: string[], injuries: string[]) => {
        const cardRand = Math.random();
        
        if (cardRand < 0.10) { // 10% chance per team: 20% per match (1 every 5 matches overall)
           const p = team.players[Math.floor(Math.random() * team.players.length)];
           redCards.push(p.name);
        } else if (cardRand < 0.50) { // 40% chance per team for up to 2 yellow cards
           const numYellows = Math.random() < 0.5 ? 1 : 2;
           for (let i = 0; i < numYellows; i++) {
               const p = team.players[Math.floor(Math.random() * team.players.length)];
               yellowCards.push(p.name);
           }
        }

        if (Math.random() < 0.05) { // 5% chance per team: 10% per match (1 every 10 matches overall)
           const p = team.players[Math.floor(Math.random() * team.players.length)];
           injuries.push(p.name);
        }
      };

      const opponentScorers: string[] = [];
      const opponentAssists: string[] = [];
      const opponentYellowCards: string[] = [];
      const opponentRedCards: string[] = [];
      const opponentInjuries: string[] = [];
      for (let i = 0; i < opponentGoals; i++) {
        opponentScorers.push(chooseScorer(opponentTeam));
        opponentAssists.push(opponentTeam.players[Math.floor(Math.random() * opponentTeam.players.length)]?.name || 'Player');
      }

      simulateEvents(userTeam, userYellowCards, userRedCards, userInjuries);
      simulateEvents(opponentTeam, opponentYellowCards, opponentRedCards, opponentInjuries);

      setTimeout(() => {
        setScore({ 
            user: userGoals, 
            opponent: opponentGoals, 
            userScorers,
            userAssists,
            opponentScorers,
            opponentAssists,
            userYellowCards,
            userRedCards,
            userInjuries,
            opponentYellowCards,
            opponentRedCards,
            opponentInjuries
        });
        setIsSimulating(false);
      }, 1500); // Delay for suspense
    };

    simulate();
  }, [userTeam.rating, opponentTeam.rating]);

  const aggregateScorers = (scorers: string[]) => {
    const counts: Record<string, number> = {};
    scorers.forEach(name => {
      counts[name] = (counts[name] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  };

  const handleContinue = () => {
    if (score) {
      onComplete(score.user, score.opponent, {
          goals: score.userScorers,
          assists: score.userAssists,
          yellowCards: score.userYellowCards,
          redCards: score.userRedCards,
          injuries: score.userInjuries
      }, {
          goals: score.opponentScorers,
          assists: score.opponentAssists,
          yellowCards: score.opponentYellowCards,
          redCards: score.opponentRedCards,
          injuries: score.opponentInjuries
      });
    }
  };

  const renderClovers = (count: number) => {
    return (
      <div className="flex flex-wrap justify-center gap-1 max-w-[150px]">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.2, type: "spring" }}
          >
            <Clover className="text-green-300 fill-green-500" size={24} />
          </motion.div>
        ))}
        {count === 0 && <span className="text-white/30 text-sm font-mono">0</span>}
      </div>
    );
  };

  const getUserRedDisplayCount = (scoreObj?: typeof score) => {
    if (!scoreObj) return 0;
    const countYellows = (arr: string[]) => {
        const counts: Record<string, number> = {};
        arr.forEach(a => counts[a] = (counts[a] || 0) + 1);
        return Object.values(counts).filter(c => c >= 2).length;
    };
    return scoreObj.userRedCards.length + countYellows(scoreObj.userYellowCards);
  };

  const getOpponentRedDisplayCount = (scoreObj?: typeof score) => {
    if (!scoreObj) return 0;
    const countYellows = (arr: string[]) => {
        const counts: Record<string, number> = {};
        arr.forEach(a => counts[a] = (counts[a] || 0) + 1);
        return Object.values(counts).filter(c => c >= 2).length;
    };
    return scoreObj.opponentRedCards.length + countYellows(scoreObj.opponentYellowCards);
  };

  const themes: Record<string, { bg: string, icons: string }> = {
    'cl': { bg: 'bg-blue-900', icons: 'text-green-300' },
    'el': { bg: 'bg-orange-800', icons: 'text-green-300' },
    'league': { bg: 'bg-green-900', icons: 'text-green-300' }
  };

  const theme = themes[competition] || themes['league'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`${theme.bg}/90 border-4 ${competition === 'cl' ? 'border-blue-500' : competition === 'el' ? 'border-orange-500' : 'border-green-500'} rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden my-auto`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />



        <h2 className="text-2xl font-black text-center text-white mb-8 uppercase tracking-widest">
          Match Result
        </h2>

        <div className="flex items-center justify-between gap-4">
          {/* User Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black shadow-lg mb-4 border-4 border-white/20"
                style={{ 
                  background: `linear-gradient(135deg, ${userTeam.colors[0]}, ${userTeam.colors[1]})`,
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                {userTeam.name.substring(0, 1)}
              </div>
              {!isSimulating && getUserRedDisplayCount(score) > 0 && (
                <div className="absolute bottom-4 -right-2 flex gap-0.5">
                  {Array.from({ length: getUserRedDisplayCount(score) }).map((_, i) => (
                    <div key={`red-${i}`} className="w-4 h-5 bg-red-600 rounded-sm border border-white/50 shadow-sm" />
                  ))}
                </div>
              )}
            </div>
            <h3 className="font-bold text-white text-center leading-tight mb-4">{userTeam.name}</h3>
            
            {!isSimulating && score && (
                <>
                    {renderClovers(score.user)}
                    <div className="mt-2 text-[10px] text-white/70 text-center font-mono flex flex-col gap-1">
                        {aggregateScorers(score.userScorers).map(({name, count}, idx) => (
                           <span key={idx}>{name}{count > 1 ? ` (${count})` : ''}</span>
                        ))}
                    </div>
                </>
            )}
          </div>

          {/* VS / Score */}
          <div className="flex flex-col items-center justify-center w-20">
            {isSimulating ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <Clover className="text-white/20" size={40} />
              </motion.div>
            ) : (
              <div className="text-5xl font-black text-white font-mono">
                {score?.user}-{score?.opponent}
              </div>
            )}
          </div>

          {/* Opponent Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black shadow-lg mb-4 border-4 border-white/20"
                style={{ 
                  background: `linear-gradient(135deg, ${opponentTeam.colors[0]}, ${opponentTeam.colors[1]})`,
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                {opponentTeam.name.substring(0, 1)}
              </div>
              {!isSimulating && getOpponentRedDisplayCount(score) > 0 && (
                <div className="absolute bottom-4 -right-2 flex gap-0.5">
                  {Array.from({ length: getOpponentRedDisplayCount(score) }).map((_, i) => (
                    <div key={`red-${i}`} className="w-4 h-5 bg-red-600 rounded-sm border border-white/50 shadow-sm" />
                  ))}
                </div>
              )}
            </div>
            <h3 className="font-bold text-white text-center leading-tight mb-4">{opponentTeam.name}</h3>
            
            {!isSimulating && score && (
                <>
                    {renderClovers(score.opponent)}
                    <div className="mt-2 text-[10px] text-white/70 text-center font-mono flex flex-col gap-1">
                        {aggregateScorers(score.opponentScorers).map(({name, count}, idx) => (
                           <span key={idx}>{name}{count > 1 ? ` (${count})` : ''}</span>
                        ))}
                    </div>
                </>
            )}
          </div>
        </div>

        {!isSimulating && (
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={handleContinue}
            className="w-full mt-8 bg-white text-green-900 font-bold py-3 rounded-xl hover:bg-green-50 transition-colors shadow-lg"
          >
            Continue
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
