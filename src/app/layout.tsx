import BackToTop from "@/components/ui/BackToTop";
import type { Metadata, Viewport } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrowsePing - Socialize Your Browsing Experience",
  description:
    "Transform your solitary browsing into a vibrant social experience. Connect with friends, share your digital presence, and discover what's capturing everyone's attention across the web.",
  keywords: ["BrowsePing", "browser extension", "social browsing", "share browsing", "browser social", "browsing insights", "chrome extension"],
  authors: [{ name: "BrowsePing" }],
  icons: {
    icon: "/browseping.svg",
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Removed hardcoded colorScheme to let the toggle handle it
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 1. suppressHydrationWarning is REQUIRED for theme toggles
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

