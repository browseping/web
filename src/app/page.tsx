import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
    </Layout>
  );
}
