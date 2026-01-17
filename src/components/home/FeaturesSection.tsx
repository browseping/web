'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiUsers, FiBarChart, FiShield, FiMessageCircle, FiGithub, FiClock, FiBell, FiWifi, FiCode, FiChevronLeft, FiChevronRight, FiZap } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      icon: <FiUsers size={32} />,
      title: 'Social Browsing',
      description: 'Connect with friends and share your online activity in real-time. See what websites they\'re exploring and discover new content together.',
      detailedDescription: 'Experience browsing like never before with our social features. Real-time friend presence tracking, shared bookmarks, and collaborative browsing sessions that bring people together across the web.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Social',
      benefits: ['Real-time friend tracking', 'Shared browsing sessions', 'Social bookmarks']
    },
    {
      icon: <FiBarChart size={32} />,
      title: 'Advanced Analytics',
      description: 'Deep insights into your browsing patterns with hourly presence tracking, tab usage analytics, and detailed time-spent reports.',
      detailedDescription: 'Comprehensive analytics dashboard with detailed insights into your digital habits. Track time spent, identify patterns, and optimize your online productivity with beautiful visualizations.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      category: 'Analytics',
      benefits: ['Hourly presence tracking', 'Tab usage insights', 'Productivity metrics']
    },
    {
      icon: <FaTrophy size={32} />,
      title: 'Monthly Leaderboards',
      description: 'Compete with friends in monthly browsing challenges. Compare activity levels and climb the rankings with gamified engagement.',
      detailedDescription: 'Turn browsing into a fun competition with monthly leaderboards. Compete with friends, earn achievements, and see how your browsing habits stack up in a gamified environment.',
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      category: 'Gamification',
      benefits: ['Monthly competitions', 'Achievement system', 'Friend rankings']
    },
    {
      icon: <FiMessageCircle size={32} />,
      title: 'Direct Messaging',
      description: 'Built-in messaging system for seamless communication. Chat with friends without leaving your browsing experience.',
      detailedDescription: 'Seamless communication without interrupting your browsing flow. Send quick messages, share interesting links, and coordinate browsing sessions with friends directly from the extension.',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-500',
      category: 'Communication',
      benefits: ['In-browser messaging', 'Link sharing', 'Quick coordination']
    },
    {
      icon: <FiBell size={32} />,
      title: 'Smart Notifications',
      description: 'Real-time notifications for friend activities, messages, and leaderboard updates. Stay connected with intelligent alerts.',
      detailedDescription: 'Intelligent notification system that keeps you connected without being intrusive. Customizable alerts for friend activities, new messages, and important updates with smart priority management.',
      color: 'rose',
      gradient: 'from-rose-500 to-pink-500',
      category: 'Engagement',
      benefits: ['Real-time alerts', 'Smart filtering', 'Custom preferences']
    },
    {
      icon: <FiShield size={32} />,
      title: 'Privacy First',
      description: 'Granular privacy controls with online status settings. You decide what to share and who can see your browsing activity.',
      detailedDescription: 'Complete control over your privacy with granular settings. Choose what to share, with whom, and when. Your data stays secure with end-to-end encryption and transparent policies.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-600',
      category: 'Privacy',
      benefits: ['Granular controls', 'End-to-end encryption', 'Transparent policies']
    },
    {
      icon: <FiWifi size={32} />,
      title: 'WebSocket Real-time',
      description: 'Lightning-fast real-time updates using WebSocket technology. Instant friend status and activity synchronization.',
      detailedDescription: 'Ultra-fast real-time synchronization powered by WebSocket technology. Experience instant updates for friend activities, messages, and presence status with minimal latency.',
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500',
      category: 'Technology',
      benefits: ['Instant updates', 'Low latency', 'Reliable connection']
    },
    {
      icon: <FiGithub size={32} />,
      title: 'Open Source',
      description: 'Completely open-source browser extension. Transparent development, community-driven features, and extensible architecture.',
      detailedDescription: 'Built by the community, for the community. Completely open-source with transparent development, extensible architecture, and welcoming contribution guidelines for developers of all levels.',
      color: 'gray',
      gradient: 'from-gray-500 to-slate-600',
      category: 'Community',
      benefits: ['Open development', 'Community contributions', 'Extensible architecture']
    },
    {
      icon: <FiClock size={32} />,
      title: 'Session Tracking',
      description: 'Automatic presence session management with tab-level tracking. Monitor browsing habits and optimize your digital wellness.',
      detailedDescription: 'Comprehensive session management with automatic tracking of browsing habits. Gain insights into your digital wellness and optimize your time with detailed session analytics.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      category: 'Productivity',
      benefits: ['Automatic tracking', 'Digital wellness insights', 'Time optimization']
    }
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 7000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [features.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
            <FiGithub className="text-blue-400" size={24} />
            <span className="text-blue-300 font-semibold text-lg">Open Source</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">The Future of </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Social Browsing
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            BrowsePing is an{' '}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-bold">
              open-source
            </span>
            {' '}browser extension that transforms your browsing into a{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
              vibrant social experience
            </span>
          </p>
          
          {/* Open Source Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-4 py-3 mb-12 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <FiCode className="text-green-400" size={18} />
              <span className="text-gray-300">Community-driven development</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <span className="text-gray-300">Transparent & extensible</span>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <span className="text-gray-300">MIT Licensed</span>
          </div>
        </div>

        {/* Main Carousel Section */}
        <div className="relative w-full overflow-hidden">
          {/* Center-focused Carousel */}
          <div className="relative h-[600px] md:h-[700px] mb-8 flex items-center py-4 md:py-0">
            <div className="flex items-center justify-center h-full w-full">
              {/* Navigation Button */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-16 h-16 bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600/50 rounded-2xl transition-all duration-300 group hover:scale-110 shadow-xl backdrop-blur-xl z-30"
                >
                  <FiChevronLeft className="text-gray-300 group-hover:text-white transition-colors" size={24} />
                </button>

                {/* Card */}
                <div className="hidden lg:block">
                  {features[(currentIndex - 1 + features.length) % features.length] && (
                    <div 
                      className="w-64 h-80 bg-gray-800/30 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-500 opacity-60 hover:opacity-80"
                      onClick={prevSlide}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[(currentIndex - 1 + features.length) % features.length].gradient} flex items-center justify-center mb-4`}>
                        <div className="text-white scale-75">
                          {features[(currentIndex - 1 + features.length) % features.length].icon}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {features[(currentIndex - 1 + features.length) % features.length].title}
                      </h4>
                      <p className="text-sm text-gray-400 line-clamp-3">
                        {features[(currentIndex - 1 + features.length) % features.length].description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Center Card */}
              <div className="relative z-20 w-full max-w-2xl mx-auto px-4 flex items-center justify-center">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-2xl border border-gray-600/50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transform transition-all duration-700 w-full my-4 md:my-0">
                  {/* Current feature content */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center space-x-2 mb-2 sm:mb-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[currentIndex].gradient}`}></div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        {features[currentIndex].category}
                      </span>
                    </div>
                    
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br ${features[currentIndex].gradient} flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-2xl`}>
                      <div className="text-white scale-110">
                        {features[currentIndex].icon}
                      </div>
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${features[currentIndex].gradient} blur-xl opacity-60 animate-pulse`} />
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                      {features[currentIndex].title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-lg mx-auto px-2 sm:px-0">
                      {features[currentIndex].detailedDescription}
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {features[currentIndex].benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2 bg-gray-700/30 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[currentIndex].gradient}`}></div>
                          <span className="text-xs sm:text-sm text-gray-300 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className={`inline-flex items-center space-x-3 bg-gradient-to-r ${features[currentIndex].gradient} hover:shadow-xl text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 group text-sm sm:text-base`}>
                      <span>Explore Feature</span>
                      <FiZap className="group-hover:scale-110 transition-transform duration-300" size={16} />
                    </button>
                  </div>

                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[currentIndex].gradient} opacity-5 rounded-3xl`} />
                </div>
              </div>

              {/* Navigation Button */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Side Card */}
                <div className="hidden lg:block">
                  {features[(currentIndex + 1) % features.length] && (
                    <div 
                      className="w-64 h-80 bg-gray-800/30 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-500 opacity-60 hover:opacity-80"
                      onClick={nextSlide}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${features[(currentIndex + 1) % features.length].gradient} flex items-center justify-center mb-4`}>
                        <div className="text-white scale-75">
                          {features[(currentIndex + 1) % features.length].icon}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {features[(currentIndex + 1) % features.length].title}
                      </h4>
                      <p className="text-sm text-gray-400 line-clamp-3">
                        {features[(currentIndex + 1) % features.length].description}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-16 h-16 bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600/50 rounded-2xl transition-all duration-300 group hover:scale-110 shadow-xl backdrop-blur-xl z-30"
                >
                  <FiChevronRight className="text-gray-300 group-hover:text-white transition-colors" size={24} />
                </button>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br ${features[currentIndex].gradient} opacity-10 rounded-full blur-3xl transition-all duration-1000`} />
              <div className={`absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br ${features[currentIndex].gradient} opacity-5 rounded-full blur-2xl transition-all duration-1000`} />
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${features[currentIndex].gradient} scale-125`
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Hunt Badge Section */}
        <div className="text-center mt-16 mb-16">
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
              <Image 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1030190&theme=dark&t=1761421790748" 
                alt="BrowsePing - Socialize your presence and make browsing insightful. | Product Hunt" 
                width={250} 
                height={54} 
                className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50"
              />
            </a>
          </div>
        </div>

        {/* Open Source Call to Action */}
        <div className="text-center mt-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-6 lg:p-8 xl:p-10 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                {/* Content section */}
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
                
                {/* Button section */}
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