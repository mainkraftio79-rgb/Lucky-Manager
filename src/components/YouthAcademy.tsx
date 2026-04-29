import React, { useState, useMemo } from 'react';
import { Player } from '../data/leagues';
import { getPlayerValue } from '../utils/marketUtils';
import { PlayerCard } from './PlayerCard';
import { User, Star, DollarSign, UserPlus, Search, AlertCircle } from 'lucide-react';

export interface Scout {
  id: string;
  stars: 3 | 4 | 5;
  cost: number;
  name: string;
}

interface YouthAcademyProps {
  budget: number;
  youthPlayers: Player[];
  scouts: Scout[];
  onHireScout: (stars: 3 | 4 | 5) => void;
  onSignPlayer: (player: Player) => void;
  onRejectPlayer: (playerId: string) => void;
}

const SCOUT_TIERS = [
  { stars: 3, cost: 15, range: '60-70 OVR' },
  { stars: 4, cost: 35, range: '70-80 OVR' },
  { stars: 5, cost: 60, range: '80-90 OVR' },
] as const;

export const YouthAcademy: React.FC<YouthAcademyProps> = ({
  budget,
  youthPlayers,
  scouts,
  onHireScout,
  onSignPlayer,
  onRejectPlayer,
}) => {
  const [activeTab, setActiveTab] = useState<'scouts' | 'players'>('scouts');

  return (
    <div className="flex flex-col h-full gap-6 text-white">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <UserPlus className="text-green-400" />
            Youth Academy
          </h2>
          <p className="text-white/60 text-sm">Develop the next generation of stars</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-lg border border-green-500/30">
          <DollarSign size={16} className="text-green-400" />
          <span className="font-bold text-green-400">Budget: €{budget}M</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-white/10 pb-1">
        <button
          onClick={() => setActiveTab('scouts')}
          className={`px-4 py-2 font-bold text-sm transition-colors relative ${
            activeTab === 'scouts' ? 'text-green-400' : 'text-white/50 hover:text-white'
          }`}
        >
          Scouts
          {activeTab === 'scouts' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 rounded-t-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('players')}
          className={`px-4 py-2 font-bold text-sm transition-colors relative ${
            activeTab === 'players' ? 'text-green-400' : 'text-white/50 hover:text-white'
          }`}
        >
          Youth Players
          {youthPlayers.length > 0 && (
            <span className="ml-2 px-1.5 py-0.5 bg-red-500 text-white text-[10px] rounded-full">
              {youthPlayers.length}
            </span>
          )}
          {activeTab === 'players' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 rounded-t-full" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {activeTab === 'scouts' ? (
          <div className="space-y-8">
            {/* Hired Scouts */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Search size={20} />
                Active Scouts ({scouts.length}/3)
              </h3>
              {scouts.length === 0 ? (
                <div className="bg-white/5 rounded-xl p-8 text-center border border-white/10 border-dashed">
                  <p className="text-white/40">No scouts hired yet. Hire a scout to start finding players.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {scouts.map((scout) => (
                    <div key={scout.id} className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold">{scout.name}</h4>
                          <div className="flex text-yellow-400 mt-1">
                            {Array.from({ length: scout.stars }).map((_, i) => (
                              <Star key={i} size={14} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold uppercase">
                          Active
                        </div>
                      </div>
                      <p className="text-xs text-white/50 mt-2">
                        Searching for players...
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hire New Scouts */}
            {scouts.length < 3 && (
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <UserPlus size={20} />
                  Hire New Scout
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {SCOUT_TIERS.map((tier) => (
                    <div
                      key={tier.stars}
                      className="bg-gradient-to-br from-white/5 to-white/0 rounded-xl p-6 border border-white/10 flex flex-col items-center text-center hover:border-green-500/30 transition-all group"
                    >
                      <div className="flex text-yellow-400 mb-2 group-hover:scale-110 transition-transform">
                        {Array.from({ length: tier.stars }).map((_, i) => (
                          <Star key={i} size={24} fill="currentColor" />
                        ))}
                      </div>
                      <h4 className="text-xl font-bold mb-1">{tier.stars} Star Scout</h4>
                      <p className="text-white/60 text-sm mb-4">Finds {tier.range} players</p>
                      <div className="mt-auto w-full">
                        <div className="text-2xl font-black text-green-400 mb-4">€{tier.cost}M</div>
                        <button
                          onClick={() => onHireScout(tier.stars)}
                          disabled={budget < tier.cost}
                          className={`w-full py-3 rounded-lg font-bold transition-all ${
                            budget >= tier.cost
                              ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20'
                              : 'bg-white/10 text-white/30 cursor-not-allowed'
                          }`}
                        >
                          {budget >= tier.cost ? 'Hire Scout' : 'Insufficient Funds'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Youth Players List */}
            {youthPlayers.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-white/30">
                <User size={48} className="mb-4 opacity-20" />
                <p className="text-lg font-bold">No youth players found yet</p>
                <p className="text-sm">Wait for your scouts to report back</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {youthPlayers.map((player) => (
                  <div key={player.id} className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10 flex flex-col">
                    <PlayerCard player={player} size="md" showDetails={true} />
                    
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSignPlayer(player)}
                        className="py-2 bg-green-600 hover:bg-green-500 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Sign
                      </button>
                      <button
                        onClick={() => onRejectPlayer(player.id)}
                        className="py-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-500/30 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
