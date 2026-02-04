import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Header */}
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Simple Home Link */}
          <p className="text-gray-400">
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
            >
              Go back to the homepage
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
