'use client';

import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiSettings, FiToggleRight, FiUpload, FiFolder, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import { SiGooglechrome, SiBrave, SiOpera } from 'react-icons/si';
import { TbBrandEdge } from 'react-icons/tb';

const InstallationGuide = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBrowser, setSelectedBrowser] = useState('chrome');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('installation-guide');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const browsers = [
    {
      id: 'chrome',
      name: 'Chrome',
      icon: <SiGooglechrome size={24} className="text-white" />,
      url: 'chrome://extensions/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'brave',
      name: 'Brave',
      icon: <SiBrave size={24} className="text-white" />,
      url: 'brave://extensions/',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'edge',
      name: 'Edge',
      icon: <TbBrandEdge size={24} className="text-white" />,
      url: 'edge://extensions/',
      color: 'from-blue-600 to-cyan-500'
    },
    // {
    //   id: 'firefox',
    //   name: 'Firefox',
    //   icon: <SiFirefox size={24} className="text-white" />,
    //   url: 'about:debugging#/runtime/this-firefox',
    //   color: 'from-orange-500 to-red-500'
    // },
    {
      id: 'opera',
      name: 'Opera',
      icon: <SiOpera size={24} className="text-white" />,
      url: 'opera://extensions/',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const getSteps = (browserType: string) => {
    const commonSteps = [
      {
        icon: FiSettings,
        title: 'Open Extensions Page',
        description: `Navigate to ${browsers.find(b => b.id === browserType)?.url || 'browser extensions page'}`,
        detail: 'Copy and paste the URL in your browser address bar'
      },
      {
        icon: FiToggleRight,
        title: 'Enable Developer Mode',
        description: 'Turn on "Developer mode" toggle',
        detail: 'Look for the toggle switch usually at the top-right corner'
      }
    ];

    if (browserType === 'firefox') {
      return [
        ...commonSteps,
        {
          icon: FiUpload,
          title: 'Load Temporary Add-on',
          description: 'Click "This Firefox" then "Load Temporary Add-on"',
          detail: 'Select the manifest.json file from extracted folder'
        }
      ];
    }

    if (browserType === 'opera') {
      return [
        ...commonSteps,
        {
          icon: FiUpload,
          title: 'Load Unpacked Extension',
          description: 'Click "Load unpacked" or "Developer mode" button',
          detail: 'This option appears after enabling developer mode'
        },
        {
          icon: FiFolder,
          title: 'Select Extension Folder',
          description: 'Choose the extracted folder containing manifest.json',
          detail: 'Navigate to where you extracted the ZIP file'
        },
        {
          icon: FiMapPin,
          title: 'Pin the Extension',
          description: 'Right-click the extension icon and select "Pin to toolbar"',
          detail: 'This makes the extension easily accessible in your toolbar'
        }
      ];
    }

    return [
      ...commonSteps,
      {
        icon: FiUpload,
        title: 'Load Unpacked Extension',
        description: 'Click "Load unpacked" button',
        detail: 'This button appears after enabling developer mode'
      },
      {
        icon: FiFolder,
        title: 'Select Extension Folder',
        description: 'Choose the extracted folder containing manifest.json',
        detail: 'Navigate to where you extracted the ZIP file'
      },
      {
        icon: FiMapPin,
        title: 'Pin the Extension',
        description: 'Click the puzzle piece icon and pin BrowsePing',
        detail: 'This makes the extension easily accessible in your toolbar'
      }
    ];
  };

  const prerequisites = [
    {
      icon: FiUpload,
      title: 'Download ZIP File',
      description: 'Download the BrowsePing ZIP file from above'
    },
    {
      icon: FiFolder,
      title: 'Extract Files',
      description: 'Extract the ZIP file to a folder on your computer'
    },
    {
      icon: FiCheckCircle,
      title: 'Locate manifest.json',
      description: 'Ensure the manifest.json file is in the root directory'
    }
  ];

  return (
    <section id="installation-guide" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Installation Guide
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            Follow these simple steps to manually install BrowsePing extension
          </p>
        </div>

        {/* Prerequisites */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Prerequisites</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prerequisites.map((step, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-purple-400" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Browser Selection */}
        <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Select Your Browser</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {browsers.map((browser) => (
              <button
                key={browser.id}
                onClick={() => setSelectedBrowser(browser.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedBrowser === browser.id
                    ? `bg-gradient-to-r ${browser.color} text-white shadow-lg`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
              >
                <span>{browser.icon}</span>
                <span>{browser.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Installation Steps */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Installation Steps for {browsers.find(b => b.id === selectedBrowser)?.name}
          </h3>

          <div className="max-w-4xl mx-auto">
            {getSteps(selectedBrowser).map((step, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group-hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <step.icon className="text-indigo-400" size={24} aria-hidden="true" />
                      <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-300 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-400">{step.detail}</p>
                  </div>
                </div>
                {index < getSteps(selectedBrowser).length - 1 && (
                  <div className="flex-shrink-0 pt-6">
                    <FiChevronRight className="text-gray-600" size={20} aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Success message */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 max-w-2xl mx-auto">
              <FiCheckCircle className="text-green-400 mx-auto mb-4" size={48} aria-hidden="true" />
              <h4 className="text-xl font-semibold text-white mb-2">Installation Complete!</h4>
              <p className="text-gray-300">
                You should now see BrowsePing in your browser toolbar. Click the icon to start socializing your browsing experience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;