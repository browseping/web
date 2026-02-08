'use client';

import React, { useEffect, useState } from 'react';
import { FiDownload, FiArchive, FiFolder, FiCode, FiCheckCircle } from 'react-icons/fi';

const ZipDownload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('zip-download-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);



  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);

          const downloadUrl = 'https://github.com/browseping/browser-extension/releases/download/v1.0.0/BrowsePing_V1.0.0.zip';
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = 'browseping-extension-v1.0.0.zip';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const features = [
    {
      icon: FiCode,
      title: 'Source Code Access',
      description: 'Full access to the extension source code'
    },
    {
      icon: FiFolder,
      title: 'Offline Installation',
      description: 'Install without internet connection'
    },
    {
      icon: FiCheckCircle,
      title: 'Version Control',
      description: 'Choose specific version to install'
    }
  ];

  return (
    <section id="zip-download-section" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Information */}
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Manual Installation
              </span>
            </h2>

            <p className={`text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
              Download the extension as a ZIP file for manual installation. Perfect for developers and users who prefer more control.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30">
                    <feature.icon className="text-green-400" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download card */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FiArchive className="text-white" size={40} aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">BrowsePing Extension</h3>
                <p className="text-gray-300 mb-6">Version 1.0.0 • Latest Release</p>

                {/* Download progress */}
                {isDownloading && (
                  <div className="mb-6">
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${downloadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-300">Downloading... {downloadProgress}%</p>
                  </div>
                )}

                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <FiDownload size={20} className={isDownloading ? 'animate-bounce' : ''} aria-hidden="true" />
                  <span>
                    {isDownloading ? 'Downloading...' : 'Download ZIP File'}
                  </span>
                </button>

                <p className="text-sm text-gray-300 mt-4">
                  Size: ~2.5 MB • Compatible with all browsers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZipDownload;
