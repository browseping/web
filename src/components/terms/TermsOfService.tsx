'use client';

import React from 'react';
import { FiFileText, FiUsers, FiShield, FiGithub, FiMail, FiAlertTriangle, FiCheckCircle, FiLock, FiBook } from 'react-icons/fi';

const TermsOfService = () => {
  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <FiFileText className="text-purple-400" size={20} />
            <span className="text-purple-300 font-medium">Terms of Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Service</span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            These terms govern your use of BrowsePing, our open-source browser extension for social browsing.
            By using our service, you agree to these terms.
          </p>

          <div className="mt-6 text-sm text-gray-300">
            <p>Last updated: October 2025</p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 mb-12 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center space-x-2">
            <FiFileText className="text-purple-400" size={20} />
            <span>Quick Navigation</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { id: 1, title: 'Acceptance of Terms', icon: FiCheckCircle },
              { id: 2, title: 'Description of Service', icon: FiUsers },
              { id: 3, title: 'User Accounts', icon: FiShield },
              { id: 4, title: 'Acceptable Use Policy', icon: FiAlertTriangle },
              { id: 5, title: 'Privacy and Data', icon: FiShield },
              { id: 6, title: 'Open Source License', icon: FiGithub },
              { id: 7, title: 'Service Availability', icon: FiCheckCircle },
              { id: 8, title: 'Intellectual Property', icon: FiBook },
              { id: 9, title: 'Limitation of Liability', icon: FiAlertTriangle },
              { id: 10, title: 'Termination', icon: FiUsers },
              { id: 11, title: 'Governing Law', icon: FiLock }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(`section-${item.id}`);
                  if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="flex items-center space-x-2 text-left text-gray-300 hover:text-purple-400 transition-all duration-200 p-3 rounded-lg hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30"
              >
                <item.icon size={16} className="flex-shrink-0" />
                <span className="text-sm">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center space-x-2">
            <FiAlertTriangle size={20} />
            <span>Important Notice</span>
          </h2>
          <div className="text-amber-300 space-y-2">
            <p>BrowsePing is a community-driven, open-source project. These terms are designed to protect both users and the project while maintaining the collaborative spirit of open source development.</p>
            <p className="text-sm">If you disagree with any part of these terms, please discontinue use of our service.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">

          {/* Acceptance of Terms */}
          <div id="section-1" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                By accessing or using BrowsePing, you agree to be bound by these Terms of Service and our Privacy Policy.
                If you do not agree to these terms, you may not use our service.
              </p>
              <p>
                We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>

          {/* Description of Service */}
          <div id="section-2" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FiUsers className="text-blue-400" size={24} />
              <span>2. Description of Service</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                BrowsePing is an open-source browser extension that enables social browsing experiences, including:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Sharing browsing presence with friends</li>
                <li>• Messaging and social interactions</li>
                <li>• Personal browsing analytics</li>
                <li>• Community leaderboards</li>
                <li>• Friend networks and discovery</li>
              </ul>
              <p>
                All social features are optional and controlled by user privacy settings. The service is provided &quot;as is&quot; without warranties.
              </p>
            </div>
          </div>

          {/* User Accounts */}
          <div id="section-3" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">3. User Accounts</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Account Creation</h3>
                <ul className="space-y-2 ml-4">
                  <li>• You must provide accurate information during registration</li>
                  <li>• You are responsible for maintaining account security</li>
                  <li>• One account per person</li>
                  <li>• You must be at least 13 years old to create an account</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Account Responsibilities</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Keep your password secure and confidential</li>
                  <li>• Notify us immediately of any unauthorized use</li>
                  <li>• You are responsible for all activities under your account</li>
                  <li>• Do not share your account with others</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Acceptable Use */}
          <div id="section-4" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">4. Acceptable Use Policy</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">You May</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Use the service for personal, non-commercial purposes</li>
                  <li>• Share appropriate browsing activity with friends</li>
                  <li>• Participate in community features respectfully</li>
                  <li>• Contribute to the open-source project</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">You May Not</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Harass, abuse, or harm other users</li>
                  <li>• Share inappropriate, illegal, or harmful content</li>
                  <li>• Attempt to hack, exploit, or damage the service</li>
                  <li>• Create fake accounts or impersonate others</li>
                  <li>• Use the service for commercial purposes without permission</li>
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Spam or send unsolicited messages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy and Data */}
          <div id="section-5" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FiShield className="text-green-400" size={24} />
              <span>5. Privacy and Data</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your privacy is important to us. Our data practices are governed by our Privacy Policy, which includes:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Granular privacy controls for all features</li>
                <li>• No data selling or third-party advertising</li>
                <li>• Full transparency through open-source code</li>
                <li>• User control over data collection and sharing</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                <p className="text-blue-300 text-sm">
                  <strong>Data Ownership:</strong> You retain ownership of all your personal data.
                  We only process data as necessary to provide the service and as permitted by your privacy settings.
                </p>
              </div>
            </div>
          </div>

          {/* Open Source License */}
          <div id="section-6" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FiGithub className="text-gray-300" size={24} />
              <span>6. Open Source License</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                BrowsePing is released under an open-source license, which means:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• The source code is freely available and auditable</li>
                <li>• You may contribute to the project following our contribution guidelines</li>
                <li>• You may fork and modify the code according to the license terms</li>
                <li>• Commercial use requires separate permission</li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/browseping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FiGithub size={16} />
                  <span>View License and Source Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service Availability */}
          <div id="section-7" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">7. Service Availability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We strive to provide reliable service, but:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Service may be temporarily unavailable for maintenance</li>
                <li>• We do not guarantee 100% uptime</li>
                <li>• Features may be added, modified, or removed</li>
                <li>• Beta features are provided without warranties</li>
              </ul>
              <div className="mt-4 p-4 bg-amber-900/20 border border-amber-500/30 rounded-xl">
                <p className="text-amber-300 text-sm">
                  <strong>Community Project:</strong> BrowsePing is a community-driven project.
                  While we aim for reliability, the service depends on community contributions and volunteer maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div id="section-8" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">8. Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <ul className="space-y-2 ml-6">
                <li>• You retain rights to content you create and share</li>
                <li>• BrowsePing branding and trademarks remain our property</li>
                <li>• Open-source components are governed by their respective licenses</li>
                <li>• Respect intellectual property rights of others</li>
              </ul>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div id="section-9" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">9. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                BrowsePing is provided &quot;as is&quot; without warranties. We are not liable for:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Data loss or corruption</li>
                <li>• Service interruptions or downtime</li>
                <li>• Actions of other users</li>
                <li>• Third-party integrations or services</li>
                <li>• Indirect or consequential damages</li>
              </ul>
              <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                <p className="text-red-300 text-sm">
                  <strong>Important:</strong> Use the service at your own risk.
                  Always maintain backups of important data and use appropriate security practices.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div id="section-10" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">10. Termination</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">By You</h3>
                <ul className="space-y-2 ml-4">
                  <li>• You may delete your account at any time</li>
                  <li>• Account deletion will permanently remove your data</li>
                  <li>• Some data may be retained for legal or security purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">By Us</h3>
                <ul className="space-y-2 ml-4">
                  <li>• We may suspend accounts for terms violations</li>
                  <li>• We may terminate accounts for serious misconduct</li>
                  <li>• We will provide notice when possible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div id="section-11" className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">11. Governing Law</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These terms are governed by applicable international laws and regulations for digital services.
                Disputes will be resolved through good faith discussion and, if necessary, appropriate legal channels.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <p className="text-purple-300 mb-6">
              Contact us if you have any questions about these Terms of Service or need clarification on any points.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
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

export default TermsOfService;
