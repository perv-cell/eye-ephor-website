'use client';
import { useState, useEffect } from 'react';
import { applyTheme, getStoredTheme } from '@/lib/theme';

function useTheme() {
  const [theme, setThemeState] = useState('dark');

  useEffect(() => {
    const stored = getStoredTheme();
    setThemeState(stored);
    applyTheme(stored);
  }, []);

  const setTheme = (next) => {
    const value = typeof next === 'function' ? next(theme) : next;
    setThemeState(value);
    applyTheme(value);
  };

  return [theme, setTheme];
}

export default useTheme;
