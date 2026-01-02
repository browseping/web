import React from 'react';
import Link from 'next/link';
import { FiGithub, FiMail, FiGlobe, FiHeart, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl font-bold">BP</span>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BrowsePing
                </span>
                <div className="text-sm text-gray-400">Socialize Your Browsing</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-lg">
              Transform your solitary browsing into a vibrant social experience. Connect with friends,
              share your digital presence, and discover what&apos;s capturing everyone&apos;s attention across the web.
            </p>

            {/* Product Hunt Badge */}
            <div className="mb-6">
              <a
                href="https://www.producthunt.com/products/browseping?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-browseping"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1030190&theme=dark&t=1761421790748"
                  alt="BrowsePing - Socialize your presence and make browsing insightful. | Product Hunt"
                  style={{ width: '250px', height: '54px' }}
                  width="250"
                  height="54"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </a>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: FiGithub, href: 'https://github.com/browseping', label: 'GitHub' },
                { icon: FiTwitter, href: 'https://x.com/BrowsePing', label: 'Twitter' },
                { icon: FiLinkedin, href: 'http://linkedin.com/company/browseping', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:support@browseping.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group border border-gray-800 hover:border-gray-600"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: '/download', label: 'Download' },
                { href: '/leaderboard', label: 'Leaderboard' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Support</h3>
            <ul className="space-y-4">
              {[
                { href: '/help', label: 'Help Center' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/about', label: 'About Us' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} BrowsePing. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <FiHeart size={16} className="text-red-500 animate-pulse" />
            <span>for better browsing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;