'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiDownload, FiUsers, FiBarChart, FiShield } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: null },
    { href: '/features', label: 'Features', icon: <FiUsers size={16} /> },
    { href: '/privacy', label: 'Privacy', icon: <FiShield size={16} /> },
    { href: '/leaderboard', label: 'Leaderboard', icon: <FiBarChart size={16} /> },
    { href: '/about', label: 'About Us', icon: null },
    { href: '/support', label: 'Support', icon: null },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <span className="text-white text-xl font-bold">BP</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BrowsePing
              </span>
              <div className="text-xs text-gray-400 -mt-1">Socialize Your Browsing</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-all duration-200 font-medium relative group"
              >
                {item.icon}
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Download Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/download"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FiDownload size={16} className="relative z-10" />
              <span className="relative z-10">Download</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors p-2"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 rounded-b-xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              <Link
                href="/download"
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-semibold mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiDownload size={16} />
                <span>Download</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;