'use client';

import React, { useRef } from 'react';
import { FiUsers, FiBarChart, FiShield, FiMessageCircle, FiZap, FiGithub, FiClock, FiBell, FiWifi, FiCode } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <FiUsers size={32} />,
      title: 'Social Browsing',
      description: 'Connect with friends and share your online activity in real-time.',
      detailedDescription: 'Experience browsing like never before with our social features. Real-time friend presence tracking, shared bookmarks, and collaborative browsing sessions.',
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Social',
      benefits: ['Real-time tracking', 'Shared sessions', 'Social bookmarks']
    },
    {
      icon: <FiBarChart size={32} />,
      title: 'Advanced Analytics',
      description: 'Deep insights into your browsing patterns with hourly presence tracking.',
      detailedDescription: 'Comprehensive analytics dashboard with detailed insights into your digital habits. Track time spent and optimize your online productivity.',
      gradient: 'from-emerald-500 to-teal-500',
      category: 'Analytics',
      benefits: ['Hourly tracking', 'Usage insights', 'Productivity metrics']
    },
    {
      icon: <FaTrophy size={32} />,
      title: 'Monthly Leaderboards',
      description: 'Compete with friends in monthly browsing challenges.',
      detailedDescription: 'Turn browsing into a fun competition with monthly leaderboards. Compete with friends and earn achievements.',
      gradient: 'from-amber-500 to-orange-500',
      category: 'Gamification',
      benefits: ['Monthly competitions', 'Achievements', 'Friend rankings']
    },
    {
      icon: <FiMessageCircle size={32} />,
      title: 'Direct Messaging',
      description: 'Built-in messaging system for seamless communication.',
      detailedDescription: 'Seamless communication without interrupting your browsing flow. Send quick messages and share interesting links.',
      gradient: 'from-violet-500 to-purple-500',
      category: 'Communication',
      benefits: ['In-browser chat', 'Link sharing', 'Quick coordination']
    },
    {
      icon: <FiBell size={32} />,
      title: 'Smart Notifications',
      description: 'Real-time notifications for friend activities and messages.',
      detailedDescription: 'Intelligent notification system that keeps you connected without being intrusive. Customizable alerts with smart priority management.',
      gradient: 'from-rose-500 to-pink-500',
      category: 'Engagement',
      benefits: ['Real-time alerts', 'Smart filtering', 'Custom preferences']
    },
    {
      icon: <FiShield size={32} />,
      title: 'Privacy First',
      description: 'Granular privacy controls with online status settings.',
      detailedDescription: 'Complete control over your privacy with granular settings. Choose what to share and with whom. Your data stays secure.',
      gradient: 'from-indigo-500 to-blue-600',
      category: 'Privacy',
      benefits: ['Granular controls', 'Encryption', 'Transparent policies']
    },
    {
      icon: <FiWifi size={32} />,
      title: 'WebSocket Real-time',
      description: 'Lightning-fast real-time updates using WebSocket technology.',
      detailedDescription: 'Ultra-fast real-time synchronization powered by WebSocket technology. Experience instant updates with minimal latency.',
      gradient: 'from-cyan-500 to-blue-500',
      category: 'Technology',
      benefits: ['Instant updates', 'Low latency', 'Reliable connection']
    },
    {
      icon: <FiGithub size={32} />,
      title: 'Open Source',
      description: 'Completely open-source browser extension.',
      detailedDescription: 'Built by the community, for the community. Transparent development, extensible architecture, and welcoming contribution guidelines.',
      gradient: 'from-gray-500 to-slate-600',
      category: 'Community',
      benefits: ['Open development', 'Community-driven', 'MIT Licensed']
    },
    {
      icon: <FiClock size={32} />,
      title: 'Session Tracking',
      description: 'Automatic presence session management with tab-level tracking.',
      detailedDescription: 'Comprehensive session management with automatic tracking of browsing habits. Gain insights into your digital wellness.',
      gradient: 'from-green-500 to-emerald-600',
      category: 'Productivity',
      benefits: ['Automatic tracking', 'Wellness insights', 'Time optimization']
    }
  ];

  // Divide features into two rows for variety
  const firstRow = [...features.slice(0, 5), ...features.slice(0, 5)];
  const secondRow = [...features.slice(5), ...features.slice(5)];

  const FeatureCard = ({ feature }: { feature: any }) => (
    <div className="w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0 mx-3 sm:mx-4">
      <div className="h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-2xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-gray-500/50 transition-all duration-500 group relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              <div className="text-white scale-90 sm:scale-110">
                {feature.icon}
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-700/30 px-2 sm:px-3 py-1 rounded-full">
              {feature.category}
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
            {feature.title}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 line-clamp-2">
            {feature.detailedDescription}
          </p>

          <div className="space-y-2 sm:space-y-3">
            {feature.benefits.slice(0, 2).map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                <span className="text-xs sm:text-sm text-gray-400 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 sm:px-8 py-2 sm:py-4 mb-6 sm:mb-8 backdrop-blur-sm">
            <FiGithub className="text-blue-400" size={18} />
            <span className="text-blue-300 font-semibold text-sm sm:text-lg">Open Source</span>
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-white">The Future of </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Social Browsing
            </span>
          </h2>
          <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            BrowsePing transforms your browsing into a{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
              vibrant social experience
            </span>
          </p>
        </div>

        {/* Infinite Scroll Section */}
        <div className="space-y-6 sm:space-y-12">
          {/* First Row */}
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {firstRow.map((feature, idx) => (
                <FeatureCard key={`row1-${idx}`} feature={feature} />
              ))}
              {firstRow.map((feature, idx) => (
                <FeatureCard key={`row1-dup-${idx}`} feature={feature} />
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
              {secondRow.map((feature, idx) => (
                <FeatureCard key={`row2-${idx}`} feature={feature} />
              ))}
              {secondRow.map((feature, idx) => (
                <FeatureCard key={`row2-dup-${idx}`} feature={feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Product Hunt Badge Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32 mb-16">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Featured on Product Hunt
              </span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Show your support and help us reach more users by upvoting BrowsePing on Product Hunt!
            </p>
          </div>
          
          <div className="flex justify-center">
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

        {/* Open Source Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-6 lg:p-8 xl:p-10 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left flex-1">
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                      <FiGithub className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        Open Source
                      </span>
                      {' '}Community
                    </h3>
                  </div>
                  
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Join developers building the future of social browsing. Contribute and help shape the project.
                  </p>
                </div>
                
                <div className="flex justify-center lg:justify-end lg:ml-8">
                  <a
                    href="https://github.com/browseping"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group w-full sm:w-auto justify-center"
                  >
                    <FiGithub size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Start Contributing</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
