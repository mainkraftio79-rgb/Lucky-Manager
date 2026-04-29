import React, { useState, useMemo } from 'react';
import { League, Player, Team } from '../data/leagues';
import { getPlayerValue } from '../utils/marketUtils';
import { getPlayerSpecificPosition } from '../utils/teamUtils';
import { PlayerCard } from './PlayerCard';
import { Search, Filter, Euro, ChevronRight, ChevronLeft, X } from 'lucide-react';

interface TransferMarketProps {
  leagues: League[];
  userTeam: Team;
  budget: number;
  onBuyPlayer: (player: Player, price: number) => void;
}

export const TransferMarket: React.FC<TransferMarketProps> = ({ leagues, userTeam, budget, onBuyPlayer }) => {
  const [search, setSearch] = useState('');
  const [posFilter, setPosFilter] = useState<'ALL' | 'GK' | 'DEF' | 'MID' | 'FWD'>('ALL');
  const [minOvr, setMinOvr] = useState(60);
  const [maxAge, setMaxAge] = useState(40);
  const [page, setPage] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const itemsPerPage = 12;

  // Flatten all players from all leagues for searching/filtering
  const allPlayers = useMemo(() => {
    const players: (Player & { teamName: string, teamColors: [string, string] })[] = [];
    leagues.forEach(league => {
      league.teams.forEach(team => {
        if (team.id === userTeam.id) return; // Don't show own players
        team.players.forEach(p => {
          // Check if player is already in userTeam (by ID)
          if (userTeam.players.some(up => up.id === p.id)) return;
          players.push({ ...p, teamName: team.name, teamColors: team.colors });
        });
      });
    });
    return players;
  }, [leagues, userTeam.id, userTeam.players]);

  const filteredPlayers = useMemo(() => {
    return allPlayers.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPos = posFilter === 'ALL' || p.position === posFilter;
      const matchesOvr = p.rating >= minOvr;
      const matchesAge = p.age <= maxAge;
      return matchesSearch && matchesPos && matchesOvr && matchesAge;
    }).sort((a, b) => b.rating - a.rating);
  }, [allPlayers, search, posFilter, minOvr, maxAge]);

  const totalPages = Math.ceil(filteredPlayers.length / itemsPerPage);
  const paginatedPlayers = filteredPlayers.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div className="flex flex-col h-full gap-6 overflow-y-auto lg:overflow-hidden pb-24 lg:pb-0">
      {/* Header & Filters */}
      <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 shrink-0">
        <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between mb-6">
          <div className="relative w-full xl:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input 
              type="text"
              placeholder="Search players..."
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
            <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10 shrink-0">
              {(['ALL', 'GK', 'DEF', 'MID', 'FWD'] as const).map(pos => (
                <button
                  key={pos}
                  onClick={() => { setPosFilter(pos); setPage(0); }}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    posFilter === pos ? 'bg-green-600 text-white shadow-lg' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 text-xs font-bold text-white/60 shrink-0 min-w-max">
              <div className="flex flex-col gap-1.5">
                <span>Min OVR: {minOvr}</span>
                <input 
                  type="range" min="60" max="99" value={minOvr} 
                  onChange={(e) => { setMinOvr(parseInt(e.target.value)); setPage(0); }}
                  className="w-24 sm:w-32 accent-green-500"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span>Max Age: {maxAge}</span>
                <input 
                  type="range" min="16" max="40" value={maxAge} 
                  onChange={(e) => { setMaxAge(parseInt(e.target.value)); setPage(0); }}
                  className="w-24 sm:w-32 accent-green-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 text-white/50">
            <Filter size={16} />
            <span>Found {filteredPlayers.length} players</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-lg border border-green-500/30">
            <Euro size={16} className="text-green-400" />
            <span className="font-bold text-green-400">Budget: €{budget}M</span>
          </div>
        </div>
      </div>

      {/* Player Grid */}
      <div className="flex-none lg:flex-1 lg:overflow-y-auto pr-0 lg:pr-2 pb-12 lg:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paginatedPlayers.map(player => {
            const price = getPlayerValue(player);
            const canAfford = budget >= price;

            return (
              <div 
                key={player.id} 
                onClick={() => setSelectedPlayer(player)}
                className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-3 flex flex-col group hover:border-green-500/30 transition-all cursor-pointer"
              >
                <div className="w-full mb-3">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-black text-sm truncate pr-2">{player.name}</h3>
                    <span className="text-green-400 text-[10px] font-black">
                      {player.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                    <span>{getPlayerSpecificPosition(player)}</span>
                    <span>•</span>
                    <span>Age {player.age}</span>
                  </div>
                </div>
                
                <div className="w-full flex items-center justify-between mt-auto pt-2 border-t border-white/5">
                  <span className="text-sm font-black text-green-400">€{price}M</span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBuyPlayer(player, price);
                      // Simple beep sound using AudioContext to avoid external assets
                      try {
                        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
                        if (AudioContext) {
                          const ctx = new AudioContext();
                          const osc = ctx.createOscillator();
                          const gain = ctx.createGain();
                          osc.connect(gain);
                          gain.connect(ctx.destination);
                          osc.type = 'sine';
                          osc.frequency.setValueAtTime(880, ctx.currentTime); // High pitch for success
                          osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1);
                          gain.gain.setValueAtTime(0.1, ctx.currentTime);
                          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                          osc.start();
                          osc.stop(ctx.currentTime + 0.1);
                        }
                      } catch (e) {
                        console.error("Audio play failed", e);
                      }
                    }}
                    disabled={!canAfford}
                    className={`
                      px-4 md:px-6 py-1.5 md:py-2 rounded-lg font-black transition-all
                      ${canAfford 
                        ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/40 hover:scale-105' 
                        : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}
                      text-[10px] md:text-sm
                    `}
                  >
                    {canAfford ? 'Buy' : 'N/A'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-white/30">
            <Search size={48} className="mb-4 opacity-20" />
            <p className="text-lg font-bold">No players found matching filters</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 py-4 shrink-0">
          <button 
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-lg bg-white/5 border border-white/10 disabled:opacity-20 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm font-bold text-white/50 uppercase tracking-widest">
            Page {page + 1} of {totalPages}
          </span>
          <button 
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="p-2 rounded-lg bg-white/5 border border-white/10 disabled:opacity-20 hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Player Card Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative bg-[#051818] rounded-3xl p-6 md:p-8 border border-emerald-500/30 shadow-2xl flex flex-col items-center max-h-none sm:max-h-[90vh] my-auto">
            <button 
              onClick={() => setSelectedPlayer(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all z-10"
            >
              <X size={24} />
            </button>
            
            <div className="mb-4 md:mb-6 flex-1 flex items-center justify-center min-h-0">
              <div className="scale-[0.7] sm:scale-[0.85] md:scale-100 origin-center -my-8 md:my-0">
                <PlayerCard player={selectedPlayer} size="lg" showDetails={true} price={getPlayerValue(selectedPlayer)} />
              </div>
            </div>

            <div className="w-full flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Market Value</span>
                <span className="text-2xl font-black text-green-400">€{getPlayerValue(selectedPlayer)}M</span>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBuyPlayer(selectedPlayer, getPlayerValue(selectedPlayer));
                  setSelectedPlayer(null);
                  try {
                    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
                    if (AudioContext) {
                      const ctx = new AudioContext();
                      const osc = ctx.createOscillator();
                      const gain = ctx.createGain();
                      osc.connect(gain);
                      gain.connect(ctx.destination);
                      osc.type = 'sine';
                      osc.frequency.setValueAtTime(880, ctx.currentTime);
                      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1);
                      gain.gain.setValueAtTime(0.1, ctx.currentTime);
                      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                      osc.start();
                      osc.stop(ctx.currentTime + 0.1);
                    }
                  } catch (e) {}
                }}
                disabled={budget < getPlayerValue(selectedPlayer)}
                className={`
                  px-8 py-3 rounded-xl font-black text-lg transition-all
                  ${budget >= getPlayerValue(selectedPlayer)
                    ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20' 
                    : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10'}
                `}
              >
                {budget >= getPlayerValue(selectedPlayer) ? 'BUY NOW' : 'INSUFFICIENT FUNDS'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
