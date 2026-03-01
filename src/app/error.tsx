'use client';

import React, { useEffect } from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { FiRefreshCcw, FiHome, FiAlertTriangle } from 'react-icons/fi';
import Link from 'next/link';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service if needed
        console.error('Application Error:', error);
    }, [error]);

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 overflow-hidden py-20 px-4 text-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <AnimatedBackground />
            </div>

            {/* Decorative gradient overlay - Red tinted for error */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-gray-900/40 z-1" />

            <div className="relative z-10 max-w-2xl w-full">
                {/* Error Icon / Illustration */}
                <div className="mb-8 inline-flex items-center justify-center p-6 bg-red-500/10 border border-red-500/20 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.1)]">
                    <FiAlertTriangle className="text-red-500 text-6xl md:text-7xl animate-pulse" />
                </div>

                {/* Text Content */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                    Oops! Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">tripped up</span>.
                </h1>

                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                    The BrowsePing engine hit an unexpected bump. Don&apos;t worry, your data is safe. We can try to reload the current view or head back to safety.
                </p>

                {/* Technical Hint (Subtle) */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-12 text-left font-mono text-sm overflow-hidden overflow-x-auto text-red-300">
                        <p className="font-bold mb-2">Error Log:</p>
                        <p className="whitespace-pre-wrap">{error.message || 'No description available.'}</p>
                        {error.digest && <p className="mt-2 text-gray-500">Digest: {error.digest}</p>}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={reset}
                        className="group relative flex items-center space-x-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        <FiRefreshCcw className="group-hover:rotate-180 transition-transform duration-500" />
                        <span>Try to Reset</span>
                    </button>

                    <Link
                        href="/"
                        className="group flex items-center space-x-3 px-8 py-4 bg-gray-800 text-white font-bold rounded-2xl border border-white/10 hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                    >
                        <FiHome className="text-gray-400" />
                        <span>Back to Homepage</span>
                    </Link>
                </div>

                {/* Footer Link */}
                <div className="mt-16 text-gray-500 text-sm">
                    Persistent problem? <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Report it to us</Link>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        </div>
    );
}
