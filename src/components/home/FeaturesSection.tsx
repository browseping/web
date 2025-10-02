'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FiUsers, FiBarChart, FiShield, FiMessageCircle, FiTrendingUp, FiEye, FiZap, FiGlobe } from 'react-icons/fi';

const FeaturesSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <FiUsers size={28} />,
      title: 'Social Presence',
      description: 'Share your online activity with friends and see what they\'re exploring in real-time',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiBarChart size={28} />,
      title: 'Personal Analytics',
      description: 'Analyze your browsing patterns, tab usage, and time spent online with detailed insights',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiShield size={28} />,
      title: 'Privacy Control',
      description: 'Complete control over what you share and who can see your activity with granular settings',
      color: 'purple',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: <FiMessageCircle size={28} />,
      title: 'Friend Messaging',
      description: 'Send messages and connect with friends directly through the extension',
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: 'Monthly Leaderboards',
      description: 'Compare your online activity with friends and see who\'s most active',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <FiEye size={28} />,
      title: 'Real-time Updates',
      description: 'Get instant notifications about friend activity and updates across the web',
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const featureElements = sectionRef.current?.querySelectorAll('[data-index]');
    featureElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <FiZap className="text-blue-400" size={20} />
            <span className="text-blue-300 font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">What Makes Browsing </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Social
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            BrowsePing transforms your browsing experience with powerful features designed for the{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
              social web
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative transform transition-all duration-700 ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Card background with hover effects */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden">

                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="absolute inset-0 rounded-2xl">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white group-hover:animate-pulse">
                    {feature.icon}
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiGlobe className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-8 py-4">
            <span className="text-gray-300">Ready to transform your browsing?</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;