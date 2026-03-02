import React from 'react';
import LeaderboardSkeleton from '@/components/leaderboard/LeaderboardSkeleton';

export default function LeaderboardLoading() {
    return (
        <div className="min-h-screen bg-gray-900 pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Skeleton Header */}
                <div className="text-center mb-16 animate-pulse">
                    <div className="h-12 w-64 bg-gray-800 rounded-xl mx-auto mb-4" />
                    <div className="h-6 w-96 bg-gray-800/50 rounded-lg mx-auto" />
                </div>

                {/* Skeleton Toolbar */}
                <div className="flex justify-end mb-8 animate-pulse">
                    <div className="h-10 w-28 bg-gray-800 rounded-lg" />
                </div>

                <LeaderboardSkeleton />
            </div>
        </div>
    );
}
