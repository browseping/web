'use client';

import { useEffect, useState } from 'react';

const THEME_KEY = 'browseping-theme';

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(false);

  // Load saved theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);

    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update DOM + storage when toggled
  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;

      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem(THEME_KEY, 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem(THEME_KEY, 'light');
      }

      return next;
    });
  };

  return { isDark, toggleTheme };
}