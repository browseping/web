'use client';

import React, { useEffect, useState } from 'react';
import { FiDownload, FiArrowRight, FiStar, FiGithub } from 'react-icons/fi';

const PromotionalSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('promotional-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="promotional-section" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start your social browsing journey today and see your name climb the leaderboards!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/download"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-700" />
              <FiDownload size={20} className="group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Download BrowsePing</span>
              <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </a>
            
            <a
              href="https://github.com/browseping"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-500/50 text-green-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-green-400 hover:text-green-400 hover:scale-105 transition-all duration-300 flex items-center space-x-3 group backdrop-blur-sm bg-green-900/10"
            >
              <FiGithub size={20} className="group-hover:rotate-12 transition-transform" />
              <span>View on GitHub</span>
              <FiStar size={16} className="group-hover:scale-125 transition-transform" />
            </a>
          </div>

          <div className="mt-8 text-gray-400 text-sm">
            Free • Open Source • Privacy Focused • Community Driven
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;