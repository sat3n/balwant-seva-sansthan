'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface FontSizeContextType {
  scale: number;
  increase: () => void;
  decrease: () => void;
}

const FontSizeContext = createContext<FontSizeContextType>({
  scale: 1,
  increase: () => {},
  decrease: () => {},
});

export function useFontSize() {
  return useContext(FontSizeContext);
}

const MIN_SCALE = 0.85;
const MAX_SCALE = 1.3;
const STEP = 0.05;

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const stored = localStorage.getItem('fontSizeScale');
    if (stored) {
      const parsed = parseFloat(stored);
      if (!isNaN(parsed) && parsed >= MIN_SCALE && parsed <= MAX_SCALE) {
        setScale(parsed);
        document.documentElement.style.setProperty('--font-size-scale', String(parsed));
      }
    }
  }, []);

  const updateScale = (newScale: number) => {
    const clamped = Math.round(Math.min(MAX_SCALE, Math.max(MIN_SCALE, newScale)) * 100) / 100;
    setScale(clamped);
    document.documentElement.style.setProperty('--font-size-scale', String(clamped));
    localStorage.setItem('fontSizeScale', String(clamped));
  };

  const increase = () => updateScale(scale + STEP);
  const decrease = () => updateScale(scale - STEP);

  return (
    <FontSizeContext.Provider value={{ scale, increase, decrease }}>
      {children}
    </FontSizeContext.Provider>
  );
}
