import React, { useState } from 'react';
import { Player } from '../data/leagues';
import { Lineup, FORMATIONS, getBestLineup, FormationType, getEffectiveRating, getPlayerSpecificPosition } from '../utils/teamUtils';
import { getPlayerValue } from '../utils/marketUtils';
import { motion, AnimatePresence } from 'motion/react';
import { User, Shield, X, DollarSign, Settings2, ChevronRight } from 'lucide-react';
import { PlayerCard } from './PlayerCard';

interface SquadManagementProps {
  lineup: Lineup;
  onUpdateLineup: (newLineup: Lineup) => void;
  onSellPlayer: (player: Player, price: number) => void;
  onAddPlayer: (player: Player) => void;
}

// Coordinates for different formations (Top % , Left %)
const FORMATION_MAP: Record<FormationType, { top: string, left: string }[]> = {
  '4-3-3': [
    { top: '76%', left: '50%' }, // GK (Moved up slightly for visibility)
    { top: '65%', left: '15%' }, // LB
    { top: '65%', left: '38%' }, // LCB
    { top: '65%', left: '62%' }, // RCB
    { top: '65%', left: '85%' }, // RB
    { top: '40%', left: '30%' }, // LCM
    { top: '40%', left: '50%' }, // CM
    { top: '40%', left: '70%' }, // RCM
    { top: '18%', left: '20%' }, // LW
    { top: '14%', left: '50%' }, // ST
    { top: '18%', left: '80%' }, // RW
  ],
  '4-4-2': [
    { top: '76%', left: '50%' }, // GK
    { top: '65%', left: '15%' }, // LB
    { top: '65%', left: '38%' }, // LCB
    { top: '65%', left: '62%' }, // RCB
    { top: '65%', left: '85%' }, // RB
    { top: '42%', left: '15%' }, // LM
    { top: '42%', left: '38%' }, // LCM
    { top: '42%', left: '62%' }, // RCM
    { top: '42%', left: '85%' }, // RM
    { top: '18%', left: '35%' }, // LST
    { top: '18%', left: '65%' }, // RST
  ],
  '3-5-2': [
    { top: '76%', left: '50%' }, // GK
    { top: '65%', left: '30%' }, // LCB
    { top: '65%', left: '50%' }, // CB
    { top: '65%', left: '70%' }, // RCB
    { top: '45%', left: '10%' }, // LWB
    { top: '42%', left: '35%' }, // LCM
    { top: '42%', left: '50%' }, // CM
    { top: '42%', left: '65%' }, // RCM
    { top: '45%', left: '90%' }, // RWB
    { top: '18%', left: '35%' }, // LST
    { top: '18%', left: '65%' }, // RST
  ],
  '5-3-2': [
    { top: '76%', left: '50%' }, // GK
    { top: '68%', left: '15%' }, // LB
    { top: '68%', left: '33%' }, // LCB
    { top: '68%', left: '50%' }, // CB
    { top: '68%', left: '67%' }, // RCB
    { top: '68%', left: '85%' }, // RB
    { top: '40%', left: '30%' }, // LCM
    { top: '40%', left: '50%' }, // CM
    { top: '40%', left: '70%' }, // RCM
    { top: '18%', left: '35%' }, // LST
    { top: '18%', left: '65%' }, // RST
  ],
  '4-2-3-1': [
    { top: '76%', left: '50%' }, // GK
    { top: '66%', left: '15%' }, // LB
    { top: '66%', left: '38%' }, // LCB
    { top: '66%', left: '62%' }, // RCB
    { top: '66%', left: '85%' }, // RB
    { top: '48%', left: '35%' }, // LCDM
    { top: '48%', left: '65%' }, // RCDM
    { top: '32%', left: '50%' }, // CAM
    { top: '22%', left: '15%' }, // LM
    { top: '22%', left: '85%' }, // RM
    { top: '12%', left: '50%' }, // ST
  ],
};

export const SquadManagement: React.FC<SquadManagementProps> = ({ lineup, onUpdateLineup, onSellPlayer, onAddPlayer }) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'pitch' | 'bench' | 'all' | 'stats'>('pitch');
  const [showFormationMenu, setShowFormationMenu] = useState(false);

  const allPlayers = [...lineup.startingXI, ...lineup.bench];
  const activeFormation = lineup.formation || '4-3-3';
  const formationPositions = FORMATIONS[activeFormation];
  const formationCoords = FORMATION_MAP[activeFormation];

  const getSelectedPlayer = () => {
    if (!selectedPlayerId) return null;
    return lineup.startingXI.find(p => p.id === selectedPlayerId) || lineup.bench.find(p => p.id === selectedPlayerId);
  };

  const selectedPlayer = getSelectedPlayer();

  const handleFormationChange = (newFormation: FormationType) => {
    onUpdateLineup({
      ...lineup,
      formation: newFormation
    });
    setShowFormationMenu(false);
  };

  const handlePlayerClick = (targetPlayer: Player, targetIsBench: boolean, targetIndex: number) => {
    if (!selectedPlayerId) {
      // Select first player
      setSelectedPlayerId(targetPlayer.id);
    } else {
      // If clicking the same player, deselect
      if (selectedPlayerId === targetPlayer.id) {
        setSelectedPlayerId(null);
        return;
      }

      // Find the source player
      const sourceInStarting = lineup.startingXI.findIndex(p => p.id === selectedPlayerId);
      const sourceInBench = lineup.bench.findIndex(p => p.id === selectedPlayerId);

      if (sourceInStarting === -1 && sourceInBench === -1) {
        setSelectedPlayerId(null);
        return;
      }

      const newStartingXI = [...lineup.startingXI];
      const newBench = [...lineup.bench];

      let sourcePlayer: Player;
      if (sourceInStarting !== -1) {
        sourcePlayer = newStartingXI[sourceInStarting];
      } else {
        sourcePlayer = newBench[sourceInBench];
      }
      
      // Prevent suspended or injured player from moving to stating XI
      if (!targetIsBench && (sourcePlayer.suspensionMatches || 0) > 0) {
          alert('This player is suspended and cannot be placed in the Starting XI.');
          setSelectedPlayerId(null);
          return;
      }
      if (!targetIsBench && (sourcePlayer.injuryMatches || 0) > 0) {
          alert('This player is injured and cannot be placed in the Starting XI.');
          setSelectedPlayerId(null);
          return;
      }

      if (sourceInStarting !== -1 && targetIsBench && (targetPlayer.suspensionMatches || 0) > 0) {
           // Source is on pitch, target is on bench and is suspended. Target gets moved to pitch. Block this.
          alert('The target player is suspended and cannot be placed in the Starting XI.');
          setSelectedPlayerId(null);
          return;
      }
      if (sourceInStarting !== -1 && targetIsBench && (targetPlayer.injuryMatches || 0) > 0) {
          alert('The target player is injured and cannot be placed in the Starting XI.');
          setSelectedPlayerId(null);
          return;
      }

      // Perform the swap
      if (sourceInStarting !== -1 && !targetIsBench) {
        newStartingXI[sourceInStarting] = targetPlayer;
        newStartingXI[targetIndex] = sourcePlayer;
      }
      else if (sourceInStarting !== -1 && targetIsBench) {
        newStartingXI[sourceInStarting] = targetPlayer;
        newBench[targetIndex] = sourcePlayer;
      }
      else if (sourceInBench !== -1 && !targetIsBench) {
        newBench[sourceInBench] = targetPlayer;
        newStartingXI[targetIndex] = sourcePlayer;
      }
      else if (sourceInBench !== -1 && targetIsBench) {
        newBench[sourceInBench] = targetPlayer;
        newBench[targetIndex] = sourcePlayer;
      }

      onUpdateLineup({ 
        startingXI: newStartingXI, 
        bench: newBench,
        formation: activeFormation
      });
      setSelectedPlayerId(null);
    }
  };

  return (
    <div className="flex h-full relative w-full overflow-hidden">
      {/* Formation Dropdown Menu Overlay */}
      <AnimatePresence>
        {showFormationMenu && (
          <>
            <div className="fixed inset-0 z-[110]" onClick={() => setShowFormationMenu(false)} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-[#0a1a1a] backdrop-blur-2xl border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] z-[120] overflow-hidden"
            >
              <div className="p-4 bg-emerald-500/10 border-b border-emerald-500/20">
                <h4 className="font-black uppercase tracking-widest text-emerald-400 text-sm">Select Formation</h4>
              </div>
              <div className="p-1">
                {(Object.keys(FORMATIONS) as FormationType[]).map(form => (
                  <button
                    key={form}
                    onClick={() => handleFormationChange(form)}
                    className={`w-full px-5 py-4 text-left text-sm font-bold transition-all border-b border-white/5 last:border-0 flex items-center justify-between ${
                      activeFormation === form ? 'text-green-400 bg-green-400/10' : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{form}</span>
                    {activeFormation === form && <Shield size={14} className="fill-current" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Pitch/Content Area */}
      <div className="flex-1 relative flex flex-col min-w-0">
        <div className="flex-1 min-h-0 relative min-w-0">
          <AnimatePresence mode="wait">
            {viewMode === 'pitch' && (
              <motion.div
                key="pitch-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col lg:flex-row gap-4"
              >
                {/* Pitch Container */}
                <div className="flex-1 relative bg-green-900/40 rounded-2xl border-2 border-white/10 shadow-2xl overflow-hidden min-h-[400px] lg:h-full">
                  {/* Visual Pitch Elements */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="w-full h-full border-4 border-white m-4 rounded-sm" />
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-white" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white rounded-full" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[60%] h-[15%] border-4 border-t-0 border-white" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-[15%] border-4 border-b-0 border-white" />
                  </div>

                  {/* Sell/Swap Bubble - Higher Z-Index */}
                  <AnimatePresence>
                    {selectedPlayer && (
                      <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm bg-black/95 backdrop-blur-xl px-4 py-3 rounded-2xl border border-emerald-500/40 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex items-center justify-between gap-3"
                      >
                        <div className="flex flex-col min-w-0">
                          <span className="text-white text-xs font-black uppercase tracking-tight truncate">{selectedPlayer.name}</span>
                          <span className="text-emerald-400/70 text-[9px] font-bold uppercase tracking-wider">
                            {selectedPlayerId === allPlayers.find(p => p.id === selectedPlayerId)?.id && lineup.bench.some(p => p.id === selectedPlayerId) ? 'Select starting player' : 'Select substitute player'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {allPlayers.length > 11 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const price = Math.floor(getPlayerValue(selectedPlayer) * 0.8);
                                onSellPlayer(selectedPlayer, price);
                                setSelectedPlayerId(null);
                              }}
                              className="h-10 px-4 bg-red-600/20 hover:bg-red-600 border border-red-500/40 rounded-xl text-red-500 hover:text-white font-black text-[10px] uppercase tracking-wider transition-all"
                            >
                              Sell
                            </button>
                          )}
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedPlayerId(null); }}
                            className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all text-white"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Players on Pitch */}
                  {lineup.startingXI.map((player, index) => {
                    if (!player) return null;
                    const coords = formationCoords[index];
                    const isSelected = selectedPlayerId === player.id;

                    return (
                      <motion.div
                        key={player.id}
                        className="absolute flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out z-20 group"
                        style={{ top: coords.top, left: coords.left, transform: 'translate(-50%, -50%)' }}
                        onClick={() => handlePlayerClick(player, false, index)}
                      >
                        <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border-2 transition-all relative ${
                          isSelected
                            ? 'bg-emerald-500 border-white scale-125 shadow-[0_0_20px_rgba(16,185,129,0.6)]'
                            : (player.suspensionMatches && player.suspensionMatches > 0)
                               ? 'bg-red-500/80 text-white border-red-500 hover:scale-110 shadow-lg'
                            : (player.injuryMatches && player.injuryMatches > 0)
                               ? 'bg-orange-500/80 text-white border-orange-500 hover:scale-110 shadow-lg'
                               : 'bg-white text-black border-emerald-500/30 hover:border-white hover:scale-110 shadow-lg'
                        }`}>
                          <span className={`font-black text-xs lg:text-lg ${getEffectiveRating(player, formationPositions[index]) < player.rating ? 'text-red-500' : ''}`}>{getEffectiveRating(player, formationPositions[index])}</span>
                          {/* Position Indicator Mini-Badge */}
                          <div className={`absolute -bottom-1 -right-1 border px-1 rounded text-[8px] font-mono font-bold text-white ${getEffectiveRating(player, formationPositions[index]) < player.rating ? 'bg-red-600 border-red-400' : 'bg-black border-white/20'}`}>
                            {formationPositions[index]}
                          </div>
                          {/* Suspension Indicator */}
                          {(player.suspensionMatches || 0) > 0 && (
                            <div className="absolute -top-1 -left-1 bg-red-600 border border-white px-1 rounded text-[8px] font-black text-white shadow-md">
                              🟥
                            </div>
                          )}
                          {/* Injury Indicator */}
                          {(player.injuryMatches || 0) > 0 && (
                            <div className="absolute -top-1 -left-1 bg-orange-500 border border-white px-1 rounded text-[8px] font-black text-white shadow-md">
                              🏥
                            </div>
                          )}
                        </div>
                        <div className={`mt-2 px-2 py-0.5 rounded-full text-[9px] lg:text-[11px] font-black uppercase tracking-tighter shadow-sm transition-colors whitespace-nowrap overflow-hidden max-w-[80px] text-center ${
                          isSelected ? 'bg-emerald-500 text-white' : 'bg-black/60 text-white group-hover:bg-black/80'
                        }`}>
                          {player.name.split(' ').pop()}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Substitutes Sidebar (Desktop ONLY) */}
                <div className="hidden lg:flex w-1/3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex-col overflow-hidden">
                  <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <h3 className="font-black text-sm uppercase tracking-widest flex items-center gap-2">
                      <Shield size={18} className="text-emerald-400" />
                      Substitutes
                    </h3>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                    {lineup.bench.map((player, index) => {
                      const isSelected = selectedPlayerId === player.id;
                      return (
                        <div
                          key={player.id}
                          onClick={() => handlePlayerClick(player, true, index)}
                          className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border ${
                            isSelected
                              ? 'bg-emerald-500/20 border-emerald-500 shadow-lg'
                              : 'bg-white/5 border-white/5 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black relative ${
                                player.position === 'GK' ? 'bg-yellow-500/20 text-yellow-500' :
                                player.position === 'DEF' ? 'bg-blue-500/20 text-blue-500' :
                                player.position === 'MID' ? 'bg-green-500/20 text-green-500' :
                                'bg-red-500/20 text-red-500'
                            }`}>
                              {getPlayerSpecificPosition(player)}
                              {(player.suspensionMatches || 0) > 0 && (
                                <div className="absolute -top-1 -right-1 bg-red-600 border border-black/50 px-1 rounded text-[8px] flex items-center justify-center shadow-md">
                                  🟥
                                </div>
                              )}
                              {(player.injuryMatches || 0) > 0 && (
                                <div className="absolute -top-1 -right-1 bg-orange-500 border border-black/50 px-1 rounded text-[8px] flex items-center justify-center shadow-md">
                                  🏥
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-black text-sm uppercase tracking-tight">{player.name}</span>
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Age {player.age} • OVR {player.rating}</span>
                            </div>
                          </div>
                          <ChevronRight size={18} className="text-white/20" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {viewMode === 'bench' && (
              <motion.div
                key="bench-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="lg:hidden h-full flex flex-col bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
              >
                <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                  <h3 className="font-black text-sm uppercase tracking-widest flex items-center gap-2">
                    <Shield size={18} className="text-emerald-400" />
                    Substitutes
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                  {lineup.bench.map((player, index) => {
                    const isSelected = selectedPlayerId === player.id;
                    return (
                      <div
                        key={player.id}
                        onClick={() => handlePlayerClick(player, true, index)}
                        className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border ${
                          isSelected
                            ? 'bg-emerald-500/20 border-emerald-500 shadow-lg'
                            : 'bg-white/5 border-white/5 active:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black relative ${
                              player.position === 'GK' ? 'bg-yellow-500/20 text-yellow-500' :
                              player.position === 'DEF' ? 'bg-blue-500/20 text-blue-500' :
                              player.position === 'MID' ? 'bg-green-500/20 text-green-500' :
                              'bg-red-500/20 text-red-500'
                          }`}>
                            {getPlayerSpecificPosition(player)}
                            {(player.suspensionMatches || 0) > 0 && (
                              <div className="absolute -top-1 -right-1 bg-red-600 border border-black/50 px-1 rounded text-[8px] flex items-center justify-center shadow-md">
                                🟥
                              </div>
                            )}
                            {(player.injuryMatches || 0) > 0 && (
                              <div className="absolute -top-1 -right-1 bg-orange-500 border border-black/50 px-1 rounded text-[8px] flex items-center justify-center shadow-md">
                                🏥
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-black text-sm uppercase tracking-tight">{player.name}</span>
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Age {player.age} • OVR {player.rating}</span>
                          </div>
                        </div>
                        <ChevronRight size={18} className="text-white/20" />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {viewMode === 'all' && (
              <motion.div
                key="all-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="h-full overflow-y-auto pr-2 custom-scrollbar"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 p-2 pb-24">
                  {allPlayers.map((player) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-center"
                    >
                      <PlayerCard player={player} size="md" showDetails={true} price={getPlayerValue(player)} />
                    </motion.div>
                  ))}
                </div>
                <div className="p-4 text-center text-xs text-white/50 bg-black/20 rounded-xl mb-4 mx-2">
                  To substitute: Click a player on the pitch, then click a player from the bench to swap.
                </div>
              </motion.div>
            )}

            {viewMode === 'stats' && (
              <div className="h-full overflow-y-auto pr-2 custom-scrollbar p-6">
                <div className="text-center text-[10px] text-white/40 mb-2 uppercase tracking-widest block lg:hidden italic">
                  Swipe horizontally to view all statistics
                </div>
                <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-x-auto mt-2">
                    <table className="w-full text-left text-xs min-w-[600px]">
                        <thead className="bg-white/5">
                            <tr className="text-white/50 uppercase tracking-widest font-black">
                                <th className="p-4">Player</th>
                                <th className="p-4 text-center">Goals</th>
                                <th className="p-4 text-center">Assists</th>
                                <th className="p-4 text-center">Yellows</th>
                                <th className="p-4 text-center">Reds</th>
                                <th className="p-4 text-center">Injuries</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {allPlayers
                                .sort((a, b) => {
                                    const positionOrder = { 'FWD': 0, 'MID': 1, 'DEF': 2, 'GK': 3 };
                                    return (positionOrder[a.position as keyof typeof positionOrder] ?? 4) - (positionOrder[b.position as keyof typeof positionOrder] ?? 4);
                                })
                                .map(p => (
                                <tr key={p.id} className="text-white hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-black">{p.name} <span className="text-[10px] text-white/40">({getPlayerSpecificPosition(p)})</span></td>
                                    <td className="p-4 text-center">{p.goals || 0}</td>
                                    <td className="p-4 text-center">{p.assists || 0}</td>
                                    <td className="p-4 text-center">{p.yellowCards || 0}</td>
                                    <td className="p-4 text-center">{p.redCards || 0}</td>
                                    <td className="p-4 text-center">{p.injuries || 0}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="w-16 flex flex-col justify-center items-center gap-4 bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10 shrink-0">
        {/* Navigation Tabs - Simplified for side bar */}
        <button
          onClick={() => setViewMode('pitch')}
          className={`p-2 rounded-lg font-black text-xs transition-all uppercase tracking-wider ${
            viewMode === 'pitch' ? 'bg-green-600 text-white' : 'bg-white/5 text-white/50'
          }`}
        >
          P
        </button>
        <button
          onClick={() => setViewMode('bench')}
          className={`p-2 rounded-lg font-black text-xs transition-all uppercase tracking-wider block lg:hidden ${
            viewMode === 'bench' ? 'bg-green-600 text-white' : 'bg-white/5 text-white/50'
          }`}
        >
          B
        </button>
        <button
          onClick={() => setViewMode('all')}
          className={`p-2 rounded-lg font-black text-xs transition-all uppercase tracking-wider ${
            viewMode === 'all' ? 'bg-green-600 text-white' : 'bg-white/5 text-white/50'
          }`}
        >
          A
        </button>
        <button
          onClick={() => setViewMode('stats')}
          className={`p-2 rounded-lg font-black text-xs transition-all uppercase tracking-wider ${
            viewMode === 'stats' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-white/50'
          }`}
        >
          S
        </button>

        {/* Formation & Auto-Pick */}
        <button
          onClick={() => setShowFormationMenu(!showFormationMenu)}
          className="flex items-center justify-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30 text-emerald-400"
        >
          <Settings2 size={16} />
        </button>

        <button
          onClick={() => onUpdateLineup(getBestLineup(allPlayers, activeFormation))}
          className="p-2 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/70"
        >
          Auto
        </button>
      </div>
    </div>
  );
};
