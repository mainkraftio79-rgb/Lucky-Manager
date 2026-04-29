import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Trophy, Clover, Save, ChevronLeft, Trash2 } from 'lucide-react';

interface SaveSlot {
  id: number;
  exists: boolean;
  teamName?: string;
  year?: number;
}

interface StartMenuProps {
  onStart: (slotId: number) => void;
  onContinue: (slotId: number) => void;
  onDelete: (slotId: number) => void;
  saveSlots: SaveSlot[];
}

export const StartMenu: React.FC<StartMenuProps> = ({ onStart, onContinue, onDelete, saveSlots }) => {
  const [view, setView] = useState<'main' | 'slots'>('main');
  const [mode, setMode] = useState<'new' | 'continue'>('new');
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const handleSlotClick = (slotId: number) => {
    if (confirmDeleteId !== null) return; // Prevent clicking slot while confirming delete
    if (mode === 'new') {
        onStart(slotId);
    } else {
        onContinue(slotId);
    }
  };

  const handleDelete = (e: React.MouseEvent, slotId: number) => {
    e.stopPropagation();
    setConfirmDeleteId(slotId);
  };

  const confirmDelete = (e: React.MouseEvent, slotId: number) => {
    e.stopPropagation();
    onDelete(slotId);
    setConfirmDeleteId(null);
  };

  const cancelDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setConfirmDeleteId(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-white relative z-10 overflow-hidden">
      {/* Decorative Clovers */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 text-green-400/20 pointer-events-none"
      >
        <Clover size={120} />
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 text-green-400/20 pointer-events-none"
      >
        <Clover size={160} />
      </motion.div>

      <AnimatePresence mode="wait">
        {view === 'main' ? (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-12 relative z-10 px-4"
            >
                <div className="flex justify-center mb-4">
                <Trophy size={48} className="text-yellow-400 drop-shadow-lg md:w-16 md:h-16" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase drop-shadow-md">
                Lucky Manager
                <span className="text-green-300 block text-3xl md:text-4xl mt-2">2026</span>
                </h1>
            </motion.div>

            <div className="flex flex-col gap-4 w-full max-w-xs px-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setMode('continue'); setView('slots'); }}
                    className="group relative px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white font-bold text-lg md:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 overflow-hidden z-10"
                >
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Save size={20} className="relative z-10" />
                    <span className="relative z-10">Load Career</span>
                </motion.button>

                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setMode('new'); setView('slots'); }}
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-green-800 font-bold text-lg md:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 overflow-hidden z-10"
                >
                <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Play size={20} className="md:w-6 md:h-6" fill="currentColor" />
                <span className="relative z-10">New Career</span>
                </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="slots"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex flex-col items-center w-full max-w-md px-4"
          >
            <button 
                onClick={() => setView('main')}
                className="self-start mb-8 text-white/60 hover:text-white flex items-center gap-2 transition-colors"
            >
                <ChevronLeft size={20} /> Back to Menu
            </button>

            <h2 className="text-2xl font-bold mb-6 italic uppercase tracking-wider text-green-300">
                Select Save Slot
            </h2>

            <div className="grid gap-4 w-full">
                {saveSlots.map(slot => (
                    <motion.div
                        key={slot.id}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSlotClick(slot.id)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSlotClick(slot.id)}
                        tabIndex={mode === 'continue' && !slot.exists ? -1 : 0}
                        className={`p-6 rounded-2xl border-2 transition-all text-left flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            slot.exists 
                                ? 'bg-black/40 border-green-500/50 hover:border-green-400' 
                                : mode === 'continue'
                                    ? 'bg-neutral-800 border-white/5 opacity-50 cursor-not-allowed'
                                    : 'bg-black/20 border-white/10 hover:border-white/30 border-dashed'
                        }`}
                    >
                        <div>
                            <span className="block text-xs font-bold text-white/40 uppercase mb-1 tracking-widest leading-none">Slot 0{slot.id}</span>
                            <span className="text-xl font-bold block truncate max-w-[200px]">
                                {slot.exists ? slot.teamName : 'Empty Slot'}
                            </span>
                            {slot.exists && slot.year && (
                                <span className="text-xs text-white/50 font-mono italic">Season {slot.year}/{slot.year + 1}</span>
                            )}
                        </div>
                        {slot.exists ? (
                            <div className="flex items-center gap-2">
                                {confirmDeleteId === slot.id ? (
                                    <div className="flex items-center gap-2 bg-red-500/20 p-1 rounded-lg">
                                        <button 
                                            onClick={(e) => confirmDelete(e, slot.id)}
                                            className="px-2 py-1 bg-red-600 hover:bg-red-500 rounded text-[10px] font-bold uppercase transition-colors"
                                        >
                                            Confirm
                                        </button>
                                        <button 
                                            onClick={cancelDelete}
                                            className="px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] font-bold uppercase transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase shrink-0">
                                            Load Game
                                        </div>
                                        <button
                                            onClick={(e) => handleDelete(e, slot.id)}
                                            className="p-2 text-white/40 hover:text-red-400 transition-colors"
                                            title="Delete Save"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white/5 text-white/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase shrink-0">
                                {mode === 'new' ? 'Start Fresh' : 'No Data'}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="absolute bottom-8 text-white/60 text-sm font-mono z-10">
        Version 1.1
      </div>
    </div>
  );
};
