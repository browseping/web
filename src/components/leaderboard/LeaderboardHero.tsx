'use client';

import React, { useEffect, useState } from 'react';
import { FiAward, FiZap } from 'react-icons/fi';

const LeaderboardHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute bottom-10 left-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <FiAward className="text-yellow-400" size={16} />
            <span className="text-yellow-300 text-sm font-medium">Community Leaderboard</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Top Browsing Champions
            </span>
          </h1>
          
          <p className={`text-lg text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            See who's leading the pack in social browsing this month
          </p>

          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="/download"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FiZap size={18} />
              <span>Join the Competition</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardHero;