import React from 'react';
import Layout from '@/components/layout/Layout';
import LeaderboardHero from '@/components/leaderboard/LeaderboardHero';
import PublicLeaderboard from '@/components/leaderboard/PublicLeaderboard';
import PromotionalSection from '@/components/leaderboard/PromotionalSection';

export default function LeaderboardPage() {
  return (
    <Layout>
      <LeaderboardHero />
      <PublicLeaderboard />
      <PromotionalSection />
    </Layout>
  );
}