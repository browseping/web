import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseFollower from '../ui/MouseFollower';
import AnimatedBackground from '../ui/AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 relative">
      <MouseFollower />
      <AnimatedBackground />
      <header>
        <Navbar />
      </header>
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;