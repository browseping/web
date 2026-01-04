'use client';

import React, { useEffect, useState } from 'react';
import { FiUsers, FiGlobe, FiHeart } from 'react-icons/fi';

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className={`inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <FiHeart className="text-blue-400" size={16} />
            <span className="text-blue-300 text-sm font-medium">Our Story</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className={`block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Redefining the
            </span>
            <span className={`block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Browsing Experience
            </span>
          </h1>

          <p className={`text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            BrowsePing was born from a simple idea: browsing the web shouldn&apos;t be a lonely activity. 
            We&apos;re building a bridge between the digital world and social connection.
          </p>

          {/* <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: FiUsers, label: 'Community Driven', value: 'Open Source' },
              { icon: FiGlobe, label: 'Global Reach', value: 'Worldwide' },
              { icon: FiHeart, label: 'User Focused', value: 'Privacy First' },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:border-blue-500/30 transition-colors group hover:cursor-pointer">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <stat.icon className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
