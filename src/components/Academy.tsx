import React, { useState } from 'react';
import { Player } from '../data/leagues';
import { firstNames, lastNames } from '../utils/names';
import { getPlayerValue } from '../utils/marketUtils';
import { motion, AnimatePresence } from 'motion/react';
import { Star, UserPlus, Shield, DollarSign, Users, ChevronRight, TrendingUp } from 'lucide-react';
import { PlayerCard } from './PlayerCard';

interface AcademyProps {
  budget: number;
  onPromotePlayer: (player: Player) => void;
  onDeductBudget: (amount: number) => void;
}

interface Scout {
  id: string;
  name: string;
  stars: number;
  cost: number;
  ovrRange: [number, number];
  potRange: [number, number];
  description: string;
}

const SCOUTS: Scout[] = [
  {
    id: 'scout-3',
    name: 'Regional Scout',
    stars: 3,
    cost: 15,
    ovrRange: [45, 52],
    potRange: [70, 75],
    description: 'Finds promising local talents with solid fundamentals.'
  },
  {
    id: 'scout-4',
    name: 'National Scout',
    stars: 4,
    cost: 35,
    ovrRange: [50, 57],
    potRange: [80, 85],
    description: 'Scours the country for the brightest young prospects.'
  },
  {
    id: 'scout-5',
    name: 'Global Scout',
    stars: 5,
    cost: 60,
    ovrRange: [55, 60],
    potRange: [90, 95],
    description: 'Access to elite world-class youth academies worldwide.'
  }
];

export const Academy: React.FC<AcademyProps> = ({ budget, onPromotePlayer, onDeductBudget }) => {
  const [scoutingResults, setScoutingResults] = useState<Player[]>([]);
  const [isScouting, setIsScouting] = useState(false);
  const [selectedScout, setSelectedScout] = useState<Scout | null>(null);
  const [hasAlreadySignedForFree, setHasAlreadySignedForFree] = useState(false);

  const generateScoutedPlayer = (minOvr: number, maxOvr: number, minPot: number, maxPot: number): Player => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const positions: ('GK' | 'DEF' | 'MID' | 'FWD')[] = ['GK', 'DEF', 'MID', 'FWD'];
    const position = positions[Math.floor(Math.random() * positions.length)];
    
    const rating = Math.floor(Math.random() * (maxOvr - minOvr + 1)) + minOvr;
    const age = 16 + Math.floor(Math.random() * 4); // 16-19
    const potential = Math.floor(Math.random() * (maxPot - minPot + 1)) + minPot;

    return {
      id: `academy-${Date.now()}-${Math.random()}`,
      name: `${firstName} ${lastName}`,
      position,
      rating,
      potential,
      age,
      isYouthPlayer: true,
      matchesPlayedAsYouth: 0,
      initialRating: rating
    };
  };

  const handleHireScout = (scout: Scout) => {
    if (budget < scout.cost) return;

    onDeductBudget(scout.cost);
    setIsScouting(true);
    setSelectedScout(scout);
    setHasAlreadySignedForFree(false);

    // Simulate scouting delay
    setTimeout(() => {
      const results = [
        generateScoutedPlayer(scout.ovrRange[0], scout.ovrRange[1], scout.potRange[0], scout.potRange[1]),
        generateScoutedPlayer(scout.ovrRange[0], scout.ovrRange[1], scout.potRange[0], scout.potRange[1]),
        generateScoutedPlayer(scout.ovrRange[0], scout.ovrRange[1], scout.potRange[0], scout.potRange[1])
      ];
      setScoutingResults(results);
      setIsScouting(false);
    }, 1500);
  };

  const handleSignPlayer = (player: Player) => {
    const marketValue = getPlayerValue(player);
    const signingFee = hasAlreadySignedForFree ? Math.max(1, Math.floor(marketValue * 0.1)) : 0;
    
    if (budget < signingFee) return;

    onDeductBudget(signingFee);
    onPromotePlayer(player);
    // Limit to one player per scout report: clear all results
    setScoutingResults([]);
    if (!hasAlreadySignedForFree) setHasAlreadySignedForFree(true);
  };

  return (
    <div className="flex flex-col h-full gap-6 overflow-y-auto lg:overflow-hidden pb-24 lg:pb-0">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 shrink-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2 gap-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="text-green-400" />
            Youth Academy
          </h2>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-lg border border-green-500/30">
            <DollarSign size={16} className="text-green-400" />
            <span className="font-bold text-green-400">Budget: €{budget}M</span>
          </div>
        </div>
        <p className="text-white/60 text-sm">Invest in your future. Hire elite scouts to find the next generation of superstars.</p>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:overflow-hidden min-h-0">
        {/* Scout Selection */}
        <div className="w-full lg:w-1/3 space-y-4 lg:overflow-y-auto pr-2 custom-scrollbar shrink-0">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Available Scouts</h3>
          {SCOUTS.map((scout) => (
            <button
              key={scout.id}
              onClick={() => handleHireScout(scout)}
              disabled={budget < scout.cost || isScouting}
              className={`w-full p-4 rounded-xl border transition-all text-left flex flex-col gap-2 group ${
                budget < scout.cost 
                  ? 'bg-white/5 border-white/5 opacity-50 cursor-not-allowed' 
                  : 'bg-white/5 border-white/10 hover:border-green-500/50 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">{scout.name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < scout.stars ? 'text-yellow-400 fill-yellow-400' : 'text-white/10'} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">{scout.description}</p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-white/40 font-bold">OVR</span>
                    <span className="font-mono font-bold text-white">{scout.ovrRange[0]}-{scout.ovrRange[1]}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-white/40 font-bold">POT</span>
                    <span className="font-mono font-bold text-green-400">{scout.potRange[0]}-{scout.potRange[1]}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-green-600 px-3 py-1 rounded-lg text-white font-bold text-sm shadow-lg group-hover:scale-105 transition-transform">
                  €{scout.cost}M
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Scouting Results */}
        <div className="flex-none lg:flex-1 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col lg:overflow-hidden relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {isScouting ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center"
              >
                <div className="relative w-24 h-24 mb-6">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-green-500/20 border-t-green-500 rounded-full"
                  />
                  <Users className="absolute inset-0 m-auto text-green-400 animate-pulse" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Scouting in progress...</h3>
                <p className="text-white/40 text-sm">Our {selectedScout?.name} is analyzing youth matches.</p>
              </motion.div>
            ) : scoutingResults.length > 0 ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 flex flex-col min-h-0"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 shrink-0">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <UserPlus className="text-green-400" />
                    Scouting Report
                  </h3>
                  <button 
                    onClick={() => setScoutingResults([])}
                    className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                  >
                    Clear Results
                  </button>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 flex-1 lg:overflow-y-auto min-h-0 custom-scrollbar items-start pb-8">
                  {scoutingResults.map((player) => {
                    const marketValue = getPlayerValue(player);
                    const signingFee = Math.max(1, Math.floor(marketValue * 0.1));
                    const canAfford = budget >= signingFee;

                    return (
                      <div key={player.id} className="flex flex-col items-center gap-2 md:gap-4 group">
                        <div className="scale-[0.85] md:scale-100 origin-top -mb-4 md:mb-0 relative">
                          <PlayerCard player={player} size="md" showDetails={true} price={marketValue} />
                          {/* Value Info Overlay */}
                          <div className="absolute -top-2 -right-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Estimated Value</span>
                            <span className="text-xs font-black text-emerald-400">€{marketValue}M</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center w-full gap-1">
                           <div className="flex items-center gap-1 text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">
                              <TrendingUp size={10} />
                              Potential: {player.potential}
                           </div>
                           <button
                            onClick={() => handleSignPlayer(player)}
                            disabled={!canAfford}
                            className={`w-full max-w-[140px] md:max-w-[210px] py-2 md:py-4 font-black rounded-xl shadow-lg transition-all flex flex-col items-center justify-center text-[10px] md:text-sm border-b-4 ${
                              canAfford 
                              ? 'bg-green-600 hover:bg-green-500 text-white border-green-800 hover:border-green-700 active:border-b-0 active:translate-y-1' 
                              : 'bg-white/5 text-white/20 border-white/10 cursor-not-allowed'
                            }`}
                          >
                            <span className="uppercase tracking-widest">Sign Talent</span>
                            <span className="text-[10px] md:text-xs opacity-80">{!hasAlreadySignedForFree ? 'FREE' : `Fee: €${signingFee}M`}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center text-white/20"
              >
                <Users size={64} className="mb-4" />
                <h3 className="text-xl font-bold">No Active Scouting</h3>
                <p className="text-sm max-w-xs mx-auto mt-2">Hire a scout from the list on the left to start finding new players for your academy.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
