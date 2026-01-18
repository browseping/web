import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { FiHome, FiDownload, FiBarChart, FiMail } from 'react-icons/fi';

export default function NotFound() {
  const navigationCards = [
    {
      href: '/',
      icon: <FiHome size={32} />,
      title: 'Go Home',
      description: 'Return to the homepage',
    },
    {
      href: '/download',
      icon: <FiDownload size={32} />,
      title: 'Download Extension',
      description: 'Get BrowsePing for your browser',
    },
    {
      href: '/leaderboard',
      icon: <FiBarChart size={32} />,
      title: 'View Leaderboard',
      description: 'Check out top contributors',
    },
    {
      href: '/contact',
      icon: <FiMail size={32} />,
      title: 'Contact Us',
      description: 'Get in touch with our team',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center">
          {/* 404 Header */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry though, we can help you find your way back!
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {navigationCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {card.description}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-sm" />
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Help Text */}
          <div className="mt-12 text-gray-500 text-sm">
            <p>
              If you believe this is an error, please{' '}
              <Link 
                href="/contact" 
                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
              >
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
