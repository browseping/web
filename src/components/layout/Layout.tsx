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
    // FIXED: Changed 'bg-gray-900' to dynamic 'bg-white dark:bg-gray-900'
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <MouseFollower />
      {/* Note: AnimatedBackground might also need a check if it draws dark shapes! */}
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;