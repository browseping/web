'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FiDownload, FiExternalLink, FiGlobe } from 'react-icons/fi';
import { SiGooglechrome, SiFirefox, SiBrave, SiOpera } from 'react-icons/si';
import { TbBrandEdge } from 'react-icons/tb';
import BrowserDetector from '../../hooks/useBrowserDetector';

const PlatformsList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { detectedBrowser, allBrowsers } = BrowserDetector();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('platforms-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      name: 'Chrome',
      icon: <SiGooglechrome size={48} className="text-white" />,
      description: 'Available on Chrome Web Store',
      url: 'https://chrome.google.com/webstore/detail/browseping',
      color: 'from-blue-500 to-blue-600',
      hover: 'hover:from-blue-600 hover:to-blue-700',
      available: true
    },
    {
      name: 'Firefox',
      icon: <SiFirefox size={48} className="text-white" />,
      description: 'Available on Firefox Add-ons',
      url: 'https://addons.mozilla.org/firefox/addon/browseping',
      color: 'from-orange-500 to-red-500',
      hover: 'hover:from-orange-600 hover:to-red-600',
      available: true
    },
    {
      name: 'Edge',
      icon: <TbBrandEdge size={48} className="text-white" />,
      description: 'Available on Microsoft Edge Add-ons',
      url: 'https://microsoftedge.microsoft.com/addons/detail/browseping',
      color: 'from-blue-600 to-cyan-500',
      hover: 'hover:from-blue-700 hover:to-cyan-600',
      available: true
    },
    {
      name: 'Brave',
      icon: <SiBrave size={48} className="text-white" />,
      description: 'Uses Chrome Web Store',
      url: 'https://chrome.google.com/webstore/detail/browseping',
      color: 'from-orange-600 to-yellow-500',
      hover: 'hover:from-orange-700 hover:to-yellow-600',
      available: true
    },
    {
      name: 'Opera',
      icon: <SiOpera size={48} className="text-white" />,
      description: 'Available on Opera Add-ons',
      url: 'https://addons.opera.com/en/',
      color: 'from-red-500 to-pink-500',
      hover: 'hover:from-red-600 hover:to-pink-600',
      available: true
    }
  ];

  // Filter platforms based on detected browser
  const detectedPlatform = detectedBrowser ? platforms.find(p => p.name === detectedBrowser.name) : null;
  const otherPlatforms = platforms.filter(p => !detectedBrowser || p.name !== detectedBrowser.name);
  
  return (
    <section id="platforms-section" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Browser
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            BrowsePing is available for all major browsers. Click on your browser to install directly from the official store.
          </p>
        </div>
        
        {/* Featured Browser */}
        {detectedPlatform && (
          <div className={`mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${detectedPlatform.color} flex items-center justify-center`}>
                    {detectedPlatform.icon}
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/20 rounded-full px-3 py-1 mb-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    <span className="text-blue-300 text-xs font-medium">Recommended for You</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Install for {detectedPlatform.name}</h3>
                  <p className="text-gray-300 mb-6">
                    We've detected you're using {detectedPlatform.name}. Get the best experience by installing BrowsePing directly from the official store.
                  </p>
                  <Link
                    href={detectedPlatform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${detectedPlatform.color} hover:brightness-110 transition-all text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 focus:outline-none`}
                  >
                    <FiDownload size={18} />
                    <span>Download for {detectedPlatform.name}</span>
                    <FiExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Browsers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherPlatforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`group transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 rounded-2xl bg-gradient-to-br ${platform.color} ${platform.hover} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              >
                <div className="text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-white/80 mb-4 text-sm">{platform.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-white">
                    <FiDownload size={18} />
                    <span className="font-semibold">Install Now</span>
                    <FiExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Alternative installation notice */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 max-w-2xl mx-auto">
            <FiGlobe className="text-blue-400 mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Prefer Manual Installation?</h3>
            <p className="text-gray-300 mb-4">
              Download the extension as a ZIP file and install it manually for more control over the installation process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsList;