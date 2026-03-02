import React from 'react';
import { FiRefreshCw, FiClock } from 'react-icons/fi';

const LeaderboardSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Skeleton Table */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                {/* Header Row Skeleton */}
                <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700">
                    <div className="grid grid-cols-10 gap-4">
                        <div className="h-4 bg-gray-700 rounded w-12" />
                        <div className="col-span-5 h-4 bg-gray-700 rounded w-20" />
                        <div className="col-span-2 h-4 bg-gray-700 rounded w-24" />
                        <div className="col-span-2 h-4 bg-gray-700 rounded w-24" />
                    </div>
                </div>

                {/* Body Rows Skeleton */}
                <div className="divide-y divide-gray-700">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="px-6 py-4 animate-pulse">
                            <div className="grid grid-cols-10 gap-4 items-center">
                                {/* Rank Skeleton */}
                                <div className="col-span-1">
                                    <div className="h-8 w-8 bg-gray-700/50 rounded-full" />
                                </div>

                                {/* User Info Skeleton */}
                                <div className="col-span-5 flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gray-700/50 rounded-full" />
                                    <div className="space-y-2 flex-1">
                                        <div className="h-4 bg-gray-700/50 rounded w-32" />
                                        <div className="h-3 bg-gray-800 rounded w-20" />
                                    </div>
                                </div>

                                {/* Stats Skeletons */}
                                <div className="col-span-2 flex items-center space-x-2">
                                    <FiClock className="text-gray-700" size={16} />
                                    <div className="h-4 bg-gray-700/50 rounded w-12" />
                                </div>
                                <div className="col-span-2">
                                    <div className="h-4 bg-gray-700/30 rounded w-16" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Syncing State */}
                <div className="p-8 text-center bg-gray-800/20">
                    <div className="flex items-center justify-center space-x-3 text-gray-400">
                        <FiRefreshCw className="animate-spin text-blue-500" size={18} />
                        <span className="font-medium tracking-wide">Syncing browser data...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardSkeleton;
