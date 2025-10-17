'use client';

import React, { useState, useEffect } from 'react';
import { FiTrendingUp, FiClock, FiUser, FiRefreshCw, FiAward } from 'react-icons/fi';

interface LeaderboardUser {
  rank: number;
  userId: string;
  username: string;
  displayName: string;
  monthlySeconds: number;
  monthlyHours: number;
  totalOnlineHours: number;
}

interface LeaderboardData {
  month: string;
  leaderboard: LeaderboardUser[];
  totalUsers: number;
}

const PublicLeaderboard = () => {
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const url = `${apiUrl}/api/leaderboard/public-top`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setData(result.data);
      } else {
        setError(result.message || 'Failed to fetch leaderboard');
        setData({
          month: new Date().toISOString().slice(0, 7),
          leaderboard: [],
          totalUsers: 0
        });
      }
    } catch (err: any) {
      console.log('Leaderboard API Error:', err.message);
      setError('Server is not available.');
      setData({
        month: new Date().toISOString().slice(0, 7),
        leaderboard: [],
        totalUsers: 0
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600';
      case 2: return 'from-gray-300 to-gray-500';
      case 3: return 'from-amber-600 to-amber-800';
      default: return 'from-blue-400 to-purple-400';
    }
  };

  const formatHours = (hours: number) => {
    if (hours < 1) return `${Math.round(hours * 60)}m`;
    return `${hours.toFixed(1)}h`;
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Community Leaderboard
            </h2>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-3">
              <FiRefreshCw className="animate-spin text-blue-400" size={24} />
              <span className="text-white text-lg">Loading leaderboard...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900 opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Community Leaderboard
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See who's leading the pack in social browsing this month
          </p>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => fetchLeaderboard()}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FiRefreshCw size={16} />
            <span>Refresh</span>
          </button>
        </div>

        {error && (
          <div className="bg-blue-900/20 border border-blue-500/50 rounded-xl p-6 mb-8 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUser className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-2">Server Unreachable</h3>
            <p className="text-gray-400">
              Unable to load leaderboard data at the moment.
            </p>
          </div>
        )}

        {/* Leaderboard */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
          {(!data?.leaderboard || data.leaderboard.length === 0) ? (
            <div className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiAward className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Data Yet</h3>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700">
                <div className="grid grid-cols-10 gap-4 text-gray-400 text-sm font-medium">
                  <div className="col-span-1">Rank</div>
                  <div className="col-span-5">User</div>
                  <div className="col-span-2">Monthly Time</div>
                  <div className="col-span-2">Total Time</div>
                </div>
              </div>

              {/* Leaderboard entries */}
              <div className="divide-y divide-gray-700">
                {data.leaderboard.map((user, index) => (
                  <div
                    key={user.userId}
                    className="px-6 py-4 hover:bg-gray-800/30 transition-colors group"
                  >
                    <div className="grid grid-cols-10 gap-4 items-center">
                      {/* Rank */}
                      <div className="col-span-1">
                        <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${getRankColor(user.rank)} text-white font-bold text-sm`}>
                          {user.rank <= 3 ? getRankIcon(user.rank) : user.rank}
                        </div>
                      </div>

                      {/* User */}
                      <div className="col-span-5">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <FiUser className="text-white" size={16} />
                          </div>
                          <div>
                            <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                              {user.displayName || user.username}
                            </div>
                            {user.displayName && (
                              <div className="text-gray-400 text-sm">@{user.username}</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Monthly Time */}
                      <div className="col-span-2">
                        <div className="flex items-center space-x-2">
                          <FiClock className="text-blue-400" size={16} />
                          <span className="text-white font-medium">
                            {formatHours(user.monthlyHours)}
                          </span>
                        </div>
                      </div>

                      {/* Total Time */}
                      <div className="col-span-2">
                        <span className="text-gray-300">
                          {formatHours(user.totalOnlineHours)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              {data.totalUsers > 0 && (
                <div className="bg-gray-800/30 px-6 py-4 border-t border-gray-700">
                  <p className="text-gray-400 text-center">
                    Showing top {data.leaderboard.length} of {data.totalUsers} active users
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicLeaderboard;