'use client';

import React from 'react';
import { FiShield, FiLock, FiEye, FiUsers, FiGithub, FiMail, FiCode } from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8">
            <FiShield className="text-blue-400" size={20} />
            <span className="text-blue-300 font-medium">Privacy Policy</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Privacy is Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Priority</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            BrowsePing is committed to protecting your privacy and giving you complete control over your data.
            This policy explains how we collect, use, and protect your information.
          </p>
          
          <div className="mt-6 text-sm text-gray-400">
            <p>Last updated: October 2025</p>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center space-x-2">
            <FiLock size={20} />
            <span>Privacy Summary</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-green-300">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <span>100% Open Source - All code is publicly auditable</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <span>You control what data is shared and with whom</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <span>No data selling or third-party advertising</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <span>Granular privacy controls for all features</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Information We Collect */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FiEye className="text-blue-400" size={24} />
              <span>What Information We Collect</span>
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Account Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Username and display name</li>
                  <li>• Email address (for account verification and security)</li>
                  <li>• Optional profile information (bio, date of birth, social media links)</li>
                  <li>• Password (securely hashed and stored)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Browsing Activity (Optional)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Domain names of websites you visit (not full URLs)</li>
                  <li>• Time spent on different websites</li>
                  <li>• Active tab information when you choose to share</li>
                  <li>• Online presence status</li>
                </ul>
                <p className="text-sm text-gray-400 mt-2">
                  <strong>Note:</strong> All browsing data sharing is completely optional and controlled by your privacy settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Social Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Friend connections and requests</li>
                  <li>• Messages between users</li>
                  <li>• Leaderboard participation data</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FiUsers className="text-purple-400" size={24} />
              <span>How We Use Your Information</span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <span><strong>Account Management:</strong> To create and maintain your account, provide customer support, and send important security notifications</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <span><strong>Social Features:</strong> To enable friend connections, messaging, and shared browsing experiences based on your privacy preferences</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <span><strong>Analytics:</strong> To provide personal browsing insights and leaderboard features (only if you opt-in)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <span><strong>Platform Improvement:</strong> To improve our service and develop new features (using aggregated, anonymized data only)</span>
              </div>
            </div>
          </div>

          {/* Privacy Controls */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FiLock className="text-green-400" size={24} />
              <span>Your Privacy Controls</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-400">Granular Settings</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Online status visibility</li>
                  <li>• Browsing activity sharing</li>
                  <li>• Profile information visibility</li>
                  <li>• Friends list privacy</li>
                  <li>• Email address visibility</li>
                  <li>• Social media links visibility</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-400">Privacy Levels</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Public:</strong> Visible to all users</li>
                  <li>• <strong>Friends Only:</strong> Visible to your friends</li>
                  <li>• <strong>Close Friends:</strong> Visible to close friends only</li>
                  <li>• <strong>Private:</strong> Visible only to you</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
              <p className="text-blue-300 text-sm">
                <strong>Default Settings:</strong> All privacy settings default to the most restrictive level. 
                You must explicitly choose to share information with others.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FiShield className="text-orange-400" size={24} />
              <span>Data Security & Storage</span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <span><strong>Encryption:</strong> All data is encrypted in transit using HTTPS/TLS and at rest using industry-standard encryption</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <span><strong>Secure Storage:</strong> Data is stored on secure servers with restricted access and regular security audits</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <span><strong>Access Control:</strong> Strict access controls ensure only authorized personnel can access server infrastructure</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <span><strong>Data Retention:</strong> We only keep data as long as necessary and delete it when accounts are closed</span>
              </div>
            </div>
          </div>

          {/* Open Source Transparency */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FiGithub className="text-gray-400" size={24} />
              <span>Open Source Transparency</span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                BrowsePing is completely open source, which means:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span><strong>Full Transparency:</strong> All source code is publicly available on GitHub for review and audit</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span><strong>Community Driven:</strong> Development is transparent and community contributions are welcome</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span><strong>No Hidden Code:</strong> There are no proprietary or closed-source components that could compromise your privacy</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span><strong>Self-Hostable:</strong> You can run your own instance if you prefer complete control</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center space-x-4">
                <a
                  href="https://github.com/browseping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FiCode size={16} />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-blue-300 mb-6">
              We're here to help. Contact us for any privacy-related questions or concerns.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <FiMail size={16} />
              <span>Contact Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;