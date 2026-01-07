'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiMenu,
  FiX,
  FiDownload,
  FiBarChart,
  FiShield,
  FiGithub,
} from 'react-icons/fi';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: null },
    { href: '/leaderboard', label: 'Leaderboard', icon: <FiBarChart size={16} /> },
    { href: '/privacy', label: 'Privacy', icon: <FiShield size={16} /> },
    { href: '/terms', label: 'Terms', icon: null },
    { href: '/contact', label: 'Contact', icon: null },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all">
              <span className="text-white text-xl font-bold">BP</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BrowsePing
              </span>
              <div className="text-xs text-gray-400 -mt-1">
                Socialize Your Browsing
              </div>
            </div>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center space-x-1 font-medium transition-all
                    ${
                      isActive
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-blue-400'
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/browseping"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-blue-400 border border-gray-600 hover:border-blue-400 rounded-xl transition-all"
            >
              <FiGithub size={16} />
              <span>Contribute</span>
            </a>

            <Link
              href="/download"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all flex items-center space-x-2"
            >
              <FiDownload size={16} />
              <span>Download</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 rounded-b-xl">
              {navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
                      isActive
                        ? 'text-blue-400 bg-gray-800/70'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 rounded-r bg-gradient-to-b from-blue-400 to-purple-400 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <a
                href="https://github.com/browseping"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md border border-gray-600 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiGithub size={16} />
                <span>Contribute</span>
              </a>

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
