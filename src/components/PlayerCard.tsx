import React from 'react';
import { Player } from '../data/leagues';
import { getPlayerSpecificPosition } from '../utils/teamUtils';
import { Shield, Star, Zap, Activity, Footprints } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
  price?: number;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, size = 'md', showDetails = false, price }) => {
  // Mock data for visual elements not in core model
  // Deterministic generation based on player ID/rating
  const skillMoves = Math.min(5, Math.max(2, Math.floor((player.rating % 5) + 1)));
  const weakFoot = Math.min(5, Math.max(2, Math.floor((player.rating % 4) + 2)));
  const workRate = player.rating > 80 ? 'H/M' : player.rating > 70 ? 'M/M' : 'M/L';
  
  // Size scaling
  const scale = size === 'sm' ? 0.6 : size === 'md' ? 0.8 : 1.2;
  const width = 240 * scale;
  const height = 340 * scale;
  
  return (
    <div 
      className="relative flex flex-col items-center select-none overflow-hidden"
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        // Adjusted clip-path: bottom corners moved down to 90% to give more space for stats
        clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 90%, 50% 100%, 0% 90%, 0% 15%)',
        background: 'linear-gradient(135deg, #0f2e2e 0%, #051818 100%)', // Dark teal base
      }}
    >
      {/* Cost plate if price provided */}
      {price !== undefined && (
        <div className="absolute top-[20%] w-full flex justify-center z-40">
           <div className="bg-black/80 text-emerald-400 font-black px-3 py-1 rounded-full text-xs border border-emerald-500/50">
             €{price}M
           </div>
        </div>
      )}
      
      {/* Suspension/Injury Plate */}
      {(player.suspensionMatches || 0) > 0 && (
        <div className="absolute top-[35%] w-full flex justify-center z-40">
           <div className="bg-red-600 border border-white text-white font-black px-2 py-0.5 rounded-full text-[10px] shadow-md shadow-black/50">
             SUSPENDED 🟥
           </div>
        </div>
      )}
      {((player.injuryMatches || 0) > 0 && !((player.suspensionMatches || 0) > 0)) && (
        <div className="absolute top-[35%] w-full flex justify-center z-40">
           <div className="bg-orange-500 border border-white text-white font-black px-2 py-0.5 rounded-full text-[10px] shadow-md shadow-black/50">
             INJURED 🏥
           </div>
        </div>
      )}
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,200,0.2),_transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 border-l border-t border-emerald-500/20 transform rotate-12 translate-y-10 translate-x-10" />
        <div className="absolute top-10 left-0 w-full h-px bg-emerald-500/30" />
        <div className="absolute bottom-20 right-0 w-full h-px bg-emerald-500/30" />
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 border-[3px] border-emerald-500/50 z-20 pointer-events-none" 
           style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 90%, 50% 100%, 0% 90%, 0% 15%)' }} 
      />

      {/* Top Left: Rating & Position & Chem */}
      <div className="absolute top-[12%] left-[8%] flex flex-col items-center z-30">
        <span className="font-black text-yellow-400 leading-none" style={{ fontSize: `${42 * scale}px` }}>
          {player.rating}
        </span>
        <span className="font-bold text-white uppercase mt-1" style={{ fontSize: `${14 * scale}px` }}>
          {getPlayerSpecificPosition(player)}
        </span>
        <div className="mt-2 text-yellow-400">
           {/* Chem Style Icon Placeholder */}
           <div className="relative flex items-center justify-center">
             <div className="absolute border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-yellow-400/20 w-0 h-0" />
             <Zap size={16 * scale} fill="currentColor" />
           </div>
        </div>
      </div>

      {/* Right Side: Skills / Weak Foot / Work Rate / Potential */}
      <div className="absolute top-[25%] right-[8%] flex flex-col items-end gap-1 z-30 text-white text-right">
        {/* Potential (New) */}
        {showDetails && (
          <div className="flex flex-col items-end mb-1">
            <span className="text-[8px] uppercase text-yellow-400 font-bold tracking-wider">Potential</span>
            <span className="font-black text-sm text-yellow-400">{player.potential}</span>
          </div>
        )}
        
        {/* Skill Moves */}
        <div className="flex flex-col items-end">
          <span className="text-[8px] uppercase text-emerald-400 font-bold tracking-wider opacity-70">Skills</span>
          <div className="flex items-center gap-0.5">
            <span className="font-bold text-sm">{skillMoves}</span>
            <Star size={10 * scale} fill="white" className="text-white" />
          </div>
        </div>

        {/* Weak Foot */}
        <div className="flex flex-col items-end mt-1">
          <span className="text-[8px] uppercase text-emerald-400 font-bold tracking-wider opacity-70">W. Foot</span>
          <div className="flex items-center gap-0.5">
             <span className="font-bold text-sm">{weakFoot}</span>
             <Star size={10 * scale} fill="white" className="text-white" />
          </div>
        </div>

        {/* Work Rate */}
        <div className="flex flex-col items-end mt-1">
          <span className="text-[8px] uppercase text-emerald-400 font-bold tracking-wider opacity-70">Work Rate</span>
          <span className="font-bold text-[10px]">{workRate}</span>
        </div>
      </div>

      {/* Player Silhouette - Improved with Hair */}
      <div className="absolute bottom-[30%] right-[-5%] w-[80%] h-[50%] z-10 opacity-90">
         <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl text-black fill-current">
            <defs>
              <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
            {/* Body/Shoulders */}
            <path d="M100,135 Q150,140 180,170 V200 H20 V170 Q50,140 100,135 Z" fill="url(#silhouetteGrad)" />
            
            {/* Neck */}
            <path d="M85,120 Q100,125 115,120 V140 H85 V120 Z" fill="url(#silhouetteGrad)" />

            {/* Head Base */}
            <path d="M100,45 C122,45 135,65 135,90 C135,115 122,130 100,130 C78,130 65,115 65,90 C65,65 78,45 100,45 Z" fill="url(#silhouetteGrad)" />

            {/* Ears */}
            <path d="M65,85 C60,85 60,100 65,100 Z" fill="url(#silhouetteGrad)" />
            <path d="M135,85 C140,85 140,100 135,100 Z" fill="url(#silhouetteGrad)" />

            {/* Hair - Textured High Top Style */}
            <path d="M64,82 
                     L63,35 
                     L68,38 L74,32 L80,37 L86,30 L92,36 L100,28 L108,36 L114,30 L120,37 L126,32 L132,38 
                     L137,35 
                     L136,82 
                     Q100,92 64,82 Z" fill="url(#silhouetteGrad)" />
         </svg>
      </div>

      {/* Name Plate - Moved Up */}
      <div className="absolute bottom-[20%] w-full text-center z-30">
        <h3 className="font-black text-white uppercase tracking-tighter drop-shadow-md truncate px-4" 
            style={{ fontSize: `${18 * scale}px` }}>
          {player.name.split(' ').pop()}
        </h3>
      </div>

      {/* Bottom Stats Row - Moved Up and Centered */}
      <div className="absolute bottom-[10%] w-[90%] flex justify-between px-3 z-30 border-t border-emerald-500/30 pt-1.5">
         <div className="flex flex-col items-center">
           <span className="text-[8px] text-emerald-400 font-bold tracking-widest">PAC</span>
           <span className="text-white font-bold text-sm">{Math.min(99, player.rating + 2)}</span>
         </div>
         <div className="flex flex-col items-center">
           <span className="text-[8px] text-emerald-400 font-bold tracking-widest">SHO</span>
           <span className="text-white font-bold text-sm">{Math.min(99, player.rating - 5)}</span>
         </div>
         <div className="flex flex-col items-center">
           <span className="text-[8px] text-emerald-400 font-bold tracking-widest">PAS</span>
           <span className="text-white font-bold text-sm">{Math.min(99, player.rating - 2)}</span>
         </div>
         <div className="flex flex-col items-center">
           <span className="text-[8px] text-emerald-400 font-bold tracking-widest">DRI</span>
           <span className="text-white font-bold text-sm">{Math.min(99, player.rating + 1)}</span>
         </div>
         <div className="flex flex-col items-center">
           <span className="text-[8px] text-emerald-400 font-bold tracking-widest">DEF</span>
           <span className="text-white font-bold text-sm">{Math.min(99, player.rating - 10)}</span>
         </div>
         <div className="flex flex-col items-center">
           <span className="text-[8px] text-emerald-400 font-bold tracking-widest">PHY</span>
           <span className="text-white font-bold text-sm">{Math.min(99, player.rating - 3)}</span>
         </div>
      </div>
      
      {/* Extra Details Overlay (Age/Years) */}
      {showDetails && (
        <div className="absolute top-[4%] left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1 rounded-full text-[10px] text-emerald-300 font-bold font-mono z-40 border border-emerald-500/50 shadow-lg whitespace-nowrap flex gap-3">
          <span>AGE: <span className="text-white">{player.age}</span></span>
          <span>BORN: <span className="text-white">{2026 - player.age}</span></span>
        </div>
      )}
    </div>
  );
};
