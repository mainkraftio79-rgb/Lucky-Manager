import React, { useMemo } from 'react';
import { League, Team } from '../data/leagues';
import { Match } from '../utils/scheduleUtils';

interface LeagueTableProps {
  league: League;
  userTeamId: string;
  matches: Match[];
}

export const LeagueTable: React.FC<LeagueTableProps> = ({ league, userTeamId, matches }) => {
  // Calculate stats for all teams
  const teamStats = useMemo(() => {
    const statsMap = new Map<string, { p: number, w: number, d: number, l: number, gf: number, ga: number, pts: number }>();
    
    // Initialize
    league.teams.forEach(t => {
      statsMap.set(t.id, { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 });
    });

    // Process played matches
    matches.forEach(m => {
      if (!m.played || m.homeScore === undefined || m.awayScore === undefined) return;
      
      const home = statsMap.get(m.homeTeamId);
      const away = statsMap.get(m.awayTeamId);

      if (home && away) {
        home.p++;
        away.p++;
        home.gf += m.homeScore;
        home.ga += m.awayScore;
        away.gf += m.awayScore;
        away.ga += m.homeScore;

        if (m.homeScore > m.awayScore) {
          home.w++;
          home.pts += 3;
          away.l++;
        } else if (m.homeScore < m.awayScore) {
          away.w++;
          away.pts += 3;
          home.l++;
        } else {
          home.d++;
          away.d++;
          home.pts += 1;
          away.pts += 1;
        }
      }
    });

    // Sort teams
    return [...league.teams].map(t => ({
      ...t,
      stats: statsMap.get(t.id)!
    })).sort((a, b) => {
      if (b.stats.pts !== a.stats.pts) return b.stats.pts - a.stats.pts;
      const gdA = a.stats.gf - a.stats.ga;
      const gdB = b.stats.gf - b.stats.ga;
      if (gdB !== gdA) return gdB - gdA;
      return b.stats.gf - a.stats.gf;
    });
  }, [league.teams, matches]);

  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
      <div className="p-4 border-b border-white/10 bg-white/5">
        <h3 className="font-bold text-lg text-white flex items-center gap-2">
          <span className="text-2xl">{league.flag}</span> {league.name}
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-white/80">
          <thead className="text-xs text-white/50 uppercase bg-white/5">
            <tr>
              <th className="px-4 py-3 w-12 text-center">Pos</th>
              <th className="px-4 py-3">Team</th>
              <th className="px-4 py-3 w-12 text-center">P</th>
              <th className="px-4 py-3 w-12 text-center">W</th>
              <th className="px-4 py-3 w-12 text-center">D</th>
              <th className="px-4 py-3 w-12 text-center">L</th>
              <th className="px-4 py-3 w-12 text-center">GD</th>
              <th className="px-4 py-3 w-12 text-center font-bold text-white">Pts</th>
            </tr>
          </thead>
          <tbody>
            {teamStats.map((team, index) => {
              const rank = index + 1;
              const stats = team.stats;
              const isUserTeam = team.id === userTeamId;
              const gd = stats.gf - stats.ga;
              
              // Determine border color based on rank and league
              let borderClass = 'border-l-4 border-transparent';
              
              const isTop5 = ['pl', 'laliga', 'seriea', 'bundesliga', 'ligue1'].includes(league.id);
              const isTier2 = ['nos', 'eredivisie', 'superlig'].includes(league.id);
              const isTier3 = ['rpl'].includes(league.id);
              const isTier4 = ['kpl'].includes(league.id);

              if (isTop5) {
                if (rank <= 2) borderClass = 'border-l-4 border-blue-500'; // CL Direct
                else if (rank <= 4) borderClass = 'border-l-4 border-green-500'; // CL Qual
                else if (rank <= 7) borderClass = 'border-l-4 border-yellow-500'; // EL
              } else if (isTier2) {
                const isExtraSpot = ['nos', 'eredivisie'].includes(league.id);
                if (rank === 1) borderClass = 'border-l-4 border-blue-500'; // CL Direct
                else if (rank <= 3) borderClass = 'border-l-4 border-green-500'; // CL Qual
                else if (rank <= (isExtraSpot ? 7 : 6)) borderClass = 'border-l-4 border-yellow-500'; // EL
              } else if (isTier3) {
                if (rank === 1) borderClass = 'border-l-4 border-blue-500'; // CL Direct
                else if (rank === 2) borderClass = 'border-l-4 border-green-500'; // CL Qual
                else if (rank <= 6) borderClass = 'border-l-4 border-yellow-500'; // EL
              } else if (isTier4) {
                if (rank === 1) borderClass = 'border-l-4 border-blue-500'; // CL Direct
                else if (rank <= 3) borderClass = 'border-l-4 border-yellow-500'; // EL
              } else {
                // Fallback
                if (rank === 1) borderClass = 'border-l-4 border-blue-500';
                else if (rank <= 4) borderClass = 'border-l-4 border-green-500';
              }

              // Relegation zone (bottom 3)
              if (rank >= teamStats.length - 2) {
                borderClass = 'border-l-4 border-red-500';
              }

              return (
                <tr 
                  key={team.id} 
                  className={`
                    border-b border-white/5 hover:bg-white/5 transition-colors
                    ${isUserTeam ? 'bg-white/10' : ''}
                  `}
                >
                  <td className={`px-4 py-3 text-center font-mono ${borderClass}`}>
                    {rank}
                  </td>
                  <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm"
                      style={{ 
                        background: `linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]})`,
                        color: 'white',
                        textShadow: '0 1px 1px rgba(0,0,0,0.5)'
                      }}
                    >
                      {team.name.substring(0, 1)}
                    </div>
                    {team.name}
                    {isUserTeam && <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded ml-2">YOU</span>}
                  </td>
                  <td className="px-4 py-3 text-center">{stats.p}</td>
                  <td className="px-4 py-3 text-center">{stats.w}</td>
                  <td className="px-4 py-3 text-center">{stats.d}</td>
                  <td className="px-4 py-3 text-center">{stats.l}</td>
                  <td className="px-4 py-3 text-center font-mono text-white/60">
                    {gd > 0 ? `+${gd}` : gd}
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-white">{stats.pts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
