'use client';

import React, { useEffect, useRef } from 'react';

interface MouseFollowerProps {
  className?: string;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({ className = '' }) => {
  const followerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    const cursor = cursorRef.current;

    if (!follower || !cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    const animateFollower = () => {
      const dx = mouseX - followerX;
      const dy = mouseY - followerY;

      followerX += dx * 0.1;
      followerY += dy * 0.1;

      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';

      requestAnimationFrame(animateFollower);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      follower.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    animateFollower();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${className}`}
        style={{ transform: 'translate(-50%, -50%)' }}
        aria-hidden="true"
      />
      <div
        ref={followerRef}
        className={`fixed w-8 h-8 border border-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${className}`}
        style={{ transform: 'translate(-50%, -50%)' }}
        aria-hidden="true"
      />
    </>
  );
};

export default MouseFollower;