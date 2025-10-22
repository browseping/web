'use client';

import React, { useEffect, useState } from 'react';
import { SiGooglechrome, SiFirefox, SiBrave, SiOpera } from 'react-icons/si';
import { TbBrandEdge } from 'react-icons/tb';

interface BrowserInfo {
  name: string;
  icon: React.ReactNode;
  downloadUrl: string;
  storeUrl: string;
  color: string;
}

const BrowserDetector = () => {
  const [detectedBrowser, setDetectedBrowser] = useState<BrowserInfo | null>(null);
  const [allBrowsers] = useState<BrowserInfo[]>([
    {
      name: 'Chrome',
      icon: <SiGooglechrome size={32} />,
      downloadUrl: 'https://chromewebstore.google.com/detail/browseping/lkcmcldjgmbojnhepnhegkmddfempmcd',
      storeUrl: 'Chrome Web Store',
      color: 'from-blue-500 to-blue-600'
    },
    // {
    //   name: 'Firefox',
    //   icon: <SiFirefox size={32} />,
    //   downloadUrl: 'https://addons.mozilla.org/firefox/addon/browseping',
    //   storeUrl: 'Firefox Add-ons',
    //   color: 'from-orange-500 to-red-500'
    // },
    {
      name: 'Edge',
      icon: <TbBrandEdge size={32} />,
      downloadUrl: 'https://microsoftedge.microsoft.com/addons/detail/browseping/jhdfmcopfogjnbapgfgddjiokgkllgpa',
      storeUrl: 'Edge Add-ons',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      name: 'Brave',
      icon: <SiBrave size={32} />,
      downloadUrl: 'https://chromewebstore.google.com/detail/browseping/lkcmcldjgmbojnhepnhegkmddfempmcd',
      storeUrl: 'Chrome Web Store',
      color: 'from-orange-600 to-yellow-500'
    },
    {
      name: 'Opera',
      icon: <SiOpera size={32} />,
      downloadUrl: 'https://chromewebstore.google.com/detail/browseping/lkcmcldjgmbojnhepnhegkmddfempmcd',
      storeUrl: 'Opera Add-ons',
      color: 'from-red-500 to-pink-500'
    }
  ]);

  useEffect(() => {
    const detectBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      console.log('User Agent:', userAgent);
      
      if (userAgent.includes('edg/')) {
        return allBrowsers.find(b => b.name === 'Edge');
      } else if (userAgent.includes('firefox')) {
        return allBrowsers.find(b => b.name === 'Firefox');
      } else if (userAgent.includes('brave')) {
        return allBrowsers.find(b => b.name === 'Brave');
      } else if (userAgent.includes('opr/') || userAgent.includes('opera')) {
        return allBrowsers.find(b => b.name === 'Opera');
      } else if (userAgent.includes('chrome')) {
        return allBrowsers.find(b => b.name === 'Chrome');
      }
      
      return null;
    };

    setDetectedBrowser(detectBrowser() || null);
  }, [allBrowsers]);

  return { detectedBrowser, allBrowsers };
};

export default BrowserDetector;