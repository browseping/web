import type { Metadata, Viewport } from "next";
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1f2937' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
