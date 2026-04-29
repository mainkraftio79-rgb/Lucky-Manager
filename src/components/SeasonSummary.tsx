import React from 'react';
import { Trophy, Medal, Star, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SeasonSummaryProps {
  year: number;
  leagueName: string;
  rank: number;
  points: number;
  budgetEarned: number;
  clResult?: string;
  elResult?: string;
  onContinue: () => void;
}

export const SeasonSummary: React.FC<SeasonSummaryProps> = ({
  year,
  leagueName,
  rank,
  points,
  budgetEarned,
  clResult,
  elResult,
  onContinue
}) => {
  const isWinner = rank === 1;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden my-auto"
      >
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-500/20 to-transparent pointer-events-none" />
        
        <div className="text-center mb-8 relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4 border border-green-500/30">
            <Trophy className="text-green-400" size={40} />
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            Season {year}/{year + 1} Finished
          </h2>
          <p className="text-white/50 font-medium">{leagueName}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Medal className="text-yellow-500" size={20} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/70">League Performance</h3>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black text-white">{rank}</span>
              <span className="text-xl font-bold text-white/30 mb-1">/ 20</span>
            </div>
            <p className="text-sm text-white/50 mt-2">Total Points: <span className="text-white font-bold">{points}</span></p>
          </div>

          <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-green-500" size={20} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/70">Financial Rewards</h3>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-black text-green-400">+{budgetEarned}</span>
              <span className="text-xl font-bold text-green-400/30 mb-1">M</span>
            </div>
            <p className="text-sm text-white/50 mt-2">Added to next season budget</p>
          </div>

          {(clResult || elResult) && (
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Star className="text-blue-400" size={20} />
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/70">Continental Results</h3>
              </div>
              <div className="flex flex-col gap-2">
                {clResult && (
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Champions League</span>
                    <span className="font-bold text-blue-400">{clResult}</span>
                  </div>
                )}
                {elResult && (
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Europa League</span>
                    <span className="font-bold text-orange-400">{elResult}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-green-400 transition-all flex items-center justify-center gap-2 group"
        >
          START NEXT SEASON
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </motion.div>
    </div>
  );
};
