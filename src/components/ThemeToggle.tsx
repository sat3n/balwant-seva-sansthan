'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from './providers/ThemeProvider';
import { SunIcon, MoonIcon } from './icons';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('accessibility');

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg
        bg-surface-card dark:bg-surface-dark-card
        text-text-dark dark:text-text-light
        hover:bg-primary/10 dark:hover:bg-primary/20
        transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label={t('toggleDarkMode')}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
