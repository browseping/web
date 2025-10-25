'use client';

import React, { useEffect, useState } from 'react';
import { FiDownload, FiZap, FiCode, FiGlobe } from 'react-icons/fi';

const DownloadHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden flex items-center pt-8">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-50" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <FiDownload className="text-blue-400" size={16} />
            <span className="text-blue-300 text-sm font-medium">Download BrowsePing</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get BrowsePing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              For Your Browser
            </span>
          </h1>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Choose your preferred installation method and start socializing your browsing experience today
          </p>

          {/* Feature highlights */}
          <div className={`flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: FiGlobe, text: 'All Major Browsers', color: 'text-green-400' },
              { icon: FiCode, text: 'Open Source', color: 'text-blue-400' },
              { icon: FiZap, text: 'Easy Installation', color: 'text-purple-400' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
                  <feature.icon className={`${feature.color} group-hover:scale-110 transition-transform`} size={20} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Product Hunt Badge */}
          <div className={`flex justify-center mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a 
              href="https://www.producthunt.com/products/browseping?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-browseping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform duration-300 group"
            >
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1030190&theme=dark&t=1761421790748" 
                alt="BrowsePing - Socialize your presence and make browsing insightful. | Product Hunt" 
                style={{ width: '250px', height: '54px' }} 
                width="250" 
                height="54" 
                className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadHero;