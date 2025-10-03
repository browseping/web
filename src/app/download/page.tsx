import React from 'react';
import Layout from '@/components/layout/Layout';
import DownloadHero from '@/components/download/DownloadHero';
import PlatformsList from '@/components/download/PlatformsList';
import InstallationGuide from '@/components/download/InstallationGuide';
import ZipDownload from '@/components/download/ZipDownload';

export default function DownloadPage() {
  return (
    <Layout>
      <DownloadHero />
      <PlatformsList />
      <ZipDownload />
      <InstallationGuide />
    </Layout>
  );
}