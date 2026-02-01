'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/hooks/useTheme';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiDownload, FiBarChart, FiShield, FiGithub } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentpath = usePathname();

  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: null },
    { href: '/leaderboard', label: 'Leaderboard', icon: <FiBarChart size={16} aria-hidden="true" /> },
    { href: '/privacy', label: 'Privacy', icon: <FiShield size={16} aria-hidden="true" /> },
    { href: '/terms', label: 'Terms', icon: null },
    { href: '/contact', label: 'Contact', icon: null },
  ];

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[var(--background)]/95 backdrop-blur-lg border-b border-black/10 dark:border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[var(--foreground)]">
>>>>>>> 889ec75 (Added Light theme toggle to the wesbite and some UI polish)
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out group-hover:-rotate-[12deg] group-hover:scale-110 group-hover:shadow-xl">
              <span className="text-white text-xl font-bold">BP</span>
            </div>
            <div>
              <span className="gradient-text text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
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
                className={`flex items-center space-x-1 transition-all duration-200 font-medium relative group ${currentpath === item.href ? 'text-yellow-400' : 'text-gray-300 hover:text-blue-400'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-3 rounded-xl text-gray-300 hover:text-yellow-400 transition-all duration-200 hover:rotate-[20deg] hover:scale-125"
              >
              {isDark ? <FiSun size={22} /> : <FiMoon size={22} />}
              </button>
            <a
              href="https://github.com/browseping"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-blue-400 border border-gray-600 hover:border-blue-400 rounded-xl transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <FiGithub size={16} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span>Contribute</span>
            </a>
            <Link
              href="/download"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 transition-opacity duration-300"></div>
              <FiDownload size={16} className="relative z-10" aria-hidden="true" />
              <span className="relative z-10">Download</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX size={24} aria-hidden="true" /> : <FiMenu size={24} aria-hidden="true" />}
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
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${currentpath === item.href ? 'text-yellow-400' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              <a
                href="https://github.com/browseping"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md transition-colors border border-gray-600 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiGithub size={16} aria-hidden="true" />
                <span>Contribute</span>
              </a>
              <Link
                href="/download"
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-semibold mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiDownload size={16} aria-hidden="true" />
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
