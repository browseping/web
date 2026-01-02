import React from 'react';
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import Link from 'next/link';
import { FiArrowRight, FiGithub } from 'react-icons/fi';

export const metadata = {
  title: 'About Us - BrowsePing',
  description: 'Learn about BrowsePing, our mission to socialize the browsing experience, and the values that drive our open-source community.',
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      
      {/* Join Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[3rem] p-12 md:p-20 border border-blue-500/20 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of the Journey
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether you&apos;re a developer looking to contribute or a user with a vision, 
              we&apos;d love to have you in our community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/download"
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://github.com/browseping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-700 transition-all duration-300 border border-gray-700 flex items-center justify-center space-x-2"
              >
                <FiGithub size={20} />
                <span>Contribute on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
