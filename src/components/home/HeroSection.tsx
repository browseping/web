'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiDownload, FiUsers, FiBarChart, FiShield, FiArrowRight, FiGithub } from 'react-icons/fi';
import BrowserDetector from '../../hooks/useBrowserDetector';

const HeroSection = () => {
  const { detectedBrowser, allBrowsers } = BrowserDetector();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden flex items-center pt-20"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-50" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <FiGithub className="text-green-400" size={18} aria-hidden="true" />
            <span className="text-green-300 text-sm font-semibold">Open Source</span>
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span className="text-blue-300 text-sm font-medium">Browser Extension</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className={`block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              Socialize
            </span>
            <span className={`block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              Your Browsing
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            The{' '}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-bold">
              open-source
            </span>
            {' '}browser extension that transforms your solitary browsing into a{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
              vibrant social experience
            </span>
            . Connect with friends, share your digital presence, and discover what&apos;s capturing everyone&apos;s attention across the web.
          </p>

          {/* Key Features */}
          <div className={`flex flex-wrap justify-center items-center gap-8 mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            {[
              { icon: FiGithub, text: 'Open Source', color: 'text-green-400' },
              { icon: FiUsers, text: 'Social Presence', color: 'text-blue-400' },
              { icon: FiBarChart, text: 'Analytics', color: 'text-cyan-400' },
              { icon: FiShield, text: 'Privacy First', color: 'text-purple-400' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
                  <feature.icon className={`${feature.color} group-hover:scale-110 transition-transform`} size={20} aria-hidden="true" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with browser detection */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            {detectedBrowser ? (
              <a
                href={detectedBrowser.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${detectedBrowser.color} text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3 group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-700" />
                <FiDownload size={20} className="group-hover:animate-bounce" aria-hidden="true" />
                <span>Download for {detectedBrowser.name}</span>
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href="/download"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-700" />
                <FiDownload size={20} className="group-hover:animate-bounce" aria-hidden="true" />
                <span>Choose Your Browser</span>
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            )}

            <Link
              href="/download"
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-500 hover:text-blue-400 hover:scale-105 transition-all duration-300 flex items-center space-x-3 group backdrop-blur-sm bg-gray-900/20"
            >
              <FiDownload size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
              <span>All Download Options</span>
            </Link>
          </div>

          {/* Product Hunt Badge */}
          <div className={`flex justify-center mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
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
                className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
              />
            </a>
          </div>

          {/* Browser Support */}
          <div className={`transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <p className="text-gray-400 mb-6 text-lg">Available for all major browsers</p>
            <div className="flex justify-center items-center space-x-12">
              {allBrowsers.map((browser, index) => (
                <div
                  key={browser.name}
                  className="flex flex-col items-center space-y-2 group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">
                    {browser.icon}
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {browser.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;