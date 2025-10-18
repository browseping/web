'use client';

import React from 'react';
import { FiMail, FiGithub, FiMessageSquare, FiHeart, FiCode, FiUsers } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 mb-8">
            <FiMessageSquare className="text-green-400" size={20} />
            <span className="text-green-300 font-medium">Get in Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">BrowsePing</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            We're here to help! Whether you have questions, need support, or want to contribute to our open-source project, 
            we'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* General Contact */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <FiMail className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">General Inquiries</h3>
                <p className="text-gray-400">Questions, feedback, and support</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                For general questions, feedback, or support requests, reach out to us via email.
              </p>
              <a
                href="mailto:hello@browseping.com"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FiMail size={16} />
                <span>support@browseping.com</span>
              </a>
            </div>
          </div>

          {/* Development & Contributions */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center">
                <FiGithub className="text-gray-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Development & Open Source</h3>
                <p className="text-gray-400">Contributing to the project</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                Want to contribute? Check out our GitHub repository for issues, discussions, and contribution guidelines.
              </p>
              <a
                href="https://github.com/browseping"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FiGithub size={16} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

        </div>

        {/* Developer Contact */}
        <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 mb-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-300 font-medium text-sm">Developer</span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
                Meet the Developer
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              
              {/* Profile Avatar & Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative mb-6">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-2xl shadow-blue-500/25">
                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Akash Kumar</h3>
                  <p className="text-gray-400 font-medium">Main Developer</p>
                </div>
              </div>

              {/* Social Links Grid */}
              <div className="flex-1 w-full">
                <div className="grid sm:grid-cols-2 gap-4">
                  
                  {/* Website */}
                  <a
                    href="https://akashkumar.is-a.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 border border-blue-500/20 hover:border-blue-400/40 rounded-xl p-4 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-semibold group-hover:text-blue-100 transition-colors">Website</p>
                        <p className="text-blue-400 text-sm font-medium truncate">akashkumar.is-a.dev</p>
                      </div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/akash-kumar-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-gray-500/10 to-gray-600/5 hover:from-gray-500/20 hover:to-gray-600/10 border border-gray-500/20 hover:border-gray-400/40 rounded-xl p-4 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-500/20 group-hover:bg-gray-500/30 rounded-lg flex items-center justify-center transition-colors">
                        <FiGithub className="text-gray-400" size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-semibold group-hover:text-gray-100 transition-colors">GitHub</p>
                        <p className="text-gray-400 text-sm font-medium">@akash-kumar-dev</p>
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/akashkumar-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-blue-600/10 to-blue-700/5 hover:from-blue-600/20 hover:to-blue-700/10 border border-blue-600/20 hover:border-blue-500/40 rounded-xl p-4 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600/20 group-hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-semibold group-hover:text-blue-100 transition-colors">LinkedIn</p>
                        <p className="text-blue-400 text-sm font-medium">@akashkumar-dev</p>
                      </div>
                    </div>
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://x.com/akash_kumar_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-blue-400/10 to-blue-500/5 hover:from-blue-400/20 hover:to-blue-500/10 border border-blue-400/20 hover:border-blue-300/40 rounded-xl p-4 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-400/20 group-hover:bg-blue-400/30 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-semibold group-hover:text-blue-100 transition-colors">Twitter</p>
                        <p className="text-blue-400 text-sm font-medium">@akash_kumar_dev</p>
                      </div>
                    </div>
                  </a>

                </div>
                
                {/* Email */}
                <a
                  href="mailto:akashkumar.dev00@gmail.com"
                  className="group relative bg-gradient-to-r from-red-500/10 to-red-600/5 hover:from-red-500/20 hover:to-red-600/10 border border-red-500/20 hover:border-red-400/40 rounded-xl p-4 mt-4 block transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500/20 group-hover:bg-red-500/30 rounded-lg flex items-center justify-center transition-colors">
                      <FiMail className="text-red-400" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold group-hover:text-red-100 transition-colors">Email</p>
                      <p className="text-red-400 text-sm font-medium break-all">akashkumar.dev00@gmail.com</p>
                    </div>
                  </div>
                </a>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;