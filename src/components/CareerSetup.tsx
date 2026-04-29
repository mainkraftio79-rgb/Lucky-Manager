import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Globe, Users, CheckCircle } from 'lucide-react';
import { leagues, League, Team } from '../data/leagues';
import { getPlayerSpecificPosition } from '../utils/teamUtils';

interface CareerSetupProps {
  onComplete: (league: League, team: Team) => void;
  onBack: () => void;
}

export const CareerSetup: React.FC<CareerSetupProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState<'league' | 'team'>('league');
  const [selectedLeague, setSelectedLeague] = useState<League | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const handleLeagueSelect = (league: League) => {
    setSelectedLeague(league);
    setSelectedTeam(null);
    setStep('team');
  };

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleStartCareer = () => {
    if (selectedLeague && selectedTeam) {
      onComplete(selectedLeague, selectedTeam);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-neutral-900/60 backdrop-blur-sm text-white p-4 md:p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-white/10 pb-4">
        <button 
          onClick={step === 'team' ? () => setStep('league') : onBack}
          className="text-white/60 hover:text-white transition-colors text-sm md:text-base"
        >
          &larr; Back
        </button>
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider truncate mx-4">
          {step === 'league' ? 'Select League' : 'Select Team'}
        </h2>
        <div className="w-12 md:w-16" /> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {step === 'league' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {leagues.map((league) => (
              <motion.button
                key={league.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLeagueSelect(league)}
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group text-left"
              >
                <div className="text-3xl md:text-4xl">{league.flag}</div>
                <div>
                  <h3 className="font-bold text-base md:text-lg group-hover:text-green-400 transition-colors">{league.name}</h3>
                  <p className="text-xs md:text-sm text-white/50">{league.country}</p>
                </div>
                <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-green-400" />
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 h-full">
            {/* Team List */}
            <div className="lg:col-span-1 space-y-2 overflow-y-auto max-h-[40vh] md:max-h-[60vh] lg:max-h-full">
              {selectedLeague?.teams.map((team) => (
                <motion.button
                  key={team.id}
                  onClick={() => handleTeamSelect(team)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    selectedTeam?.id === team.id 
                      ? 'bg-green-600/20 border-green-500' 
                      : 'bg-white/5 border-transparent hover:bg-white/10'
                  }`}
                >
                  <div 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-sm"
                    style={{ backgroundColor: team.colors[0], color: team.colors[1] === '#FFFFFF' ? 'white' : 'black' }}
                  >
                    {team.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="font-medium flex-1 text-left text-sm md:text-base">{team.name}</span>
                  {selectedTeam?.id === team.id && <CheckCircle size={16} className="text-green-400" />}
                </motion.button>
              ))}
            </div>

            {/* Team Details Preview */}
            <div className="lg:col-span-2 bg-black/20 rounded-2xl p-4 md:p-6 border border-white/10 flex flex-col">
              {selectedTeam ? (
                <>
                  <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                    <div 
                      className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-2xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${selectedTeam.colors[0]}, ${selectedTeam.colors[1]})`,
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {selectedTeam.name.substring(0, 1)}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-black uppercase italic">{selectedTeam.name}</h3>
                      <div className="flex items-center gap-4 mt-2 text-white/60 text-sm md:text-base">
                        <span className="flex items-center gap-1"><Shield size={14} className="md:w-4 md:h-4" /> Rating: <span className="text-white font-bold">{selectedTeam.rating}</span></span>
                        <span className="flex items-center gap-1"><Users size={14} className="md:w-4 md:h-4" /> Squad: <span className="text-white font-bold">{selectedTeam.players.length}</span></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <h4 className="text-sm font-bold uppercase text-white/40 mb-3 tracking-wider">Key Players</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedTeam.players.map((player) => (
                        <div key={player.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-bold px-2 py-1 rounded ${
                              player.position === 'FWD' ? 'bg-red-500/20 text-red-400' :
                              player.position === 'MID' ? 'bg-blue-500/20 text-blue-400' :
                              player.position === 'DEF' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-green-500/20 text-green-400'
                            }`}>
                              {getPlayerSpecificPosition(player)}
                            </span>
                            <span className="font-medium">{player.name}</span>
                          </div>
                          <span className="font-mono font-bold text-lg text-white/80">{player.rating}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleStartCareer}
                    className="mt-6 w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-xl rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Take Charge <ChevronRight />
                  </button>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-white/20">
                  <Shield size={64} className="mb-4" />
                  <p className="text-xl font-medium">Select a team to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
