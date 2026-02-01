import BackToTop from "@/components/ui/BackToTop";
import type { Metadata, Viewport } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.browseping.com'),

  title: "BrowsePing - Socialize Your Browsing Experience",
  description:
    "Transform your solitary browsing into a vibrant social experience. Connect with friends, share your digital presence, and discover what's capturing everyone's attention across the web.",
  keywords: ["BrowsePing", "browser extension", "social browsing", "share browsing", "browser social", "browsing insights", "chrome extension"],
  authors: [{ name: "BrowsePing" }],
  icons: {
    icon: "/browseping.svg",
  },

  openGraph: {
    title: "BrowsePing - Socialize Your Browsing Experience",
    description: "Transform your solitary browsing into a vibrant social experience. Connect with friends, share your digital presence, and discover what's capturing everyone's attention across the web.",
    url: 'https://www.browseping.com',
    siteName: 'BrowsePing',
    images: [
      {
        url: '/preview_image.png',
        width: 1200,
        height: 630,
        alt: 'BrowsePing - Open Source Browser Extension',
      },
    ],
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "BrowsePing - Socialize Your Browsing Experience",
    description: "Transform your solitary browsing into a vibrant social experience. Connect with friends, share your digital presence, and discover what's capturing everyone's attention across the web.",
    images: ['/preview_image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1f2937' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
