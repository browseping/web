import React from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function Loading() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background with higher opacity for the loading screen */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-purple-600/10 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center px-4 text-center">
        {/* Logo/Brand element */}
        <div className="relative mb-12">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)] animate-pulse">
            <div className="w-16 h-16 rounded-full border-4 border-white/20 border-t-white animate-spin" />
          </div>

          {/* Subtle glow effect */}
          <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full -z-10 animate-pulse" />
        </div>

        {/* Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
          BrowsePing
        </h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
          <span className="text-gray-400 font-medium ml-2">Launching Social Experience...</span>
        </div>
      </div>

      {/* Modern bottom indicator (Subtle) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-3 text-gray-500 text-sm font-medium tracking-widest uppercase">
        <div className="w-8 h-[1px] bg-gray-800" />
        <span>Syncing Data</span>
        <div className="w-8 h-[1px] bg-gray-800" />
      </div>
    </div>
  );
}
