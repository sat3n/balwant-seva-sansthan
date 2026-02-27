'use client';

import { useTranslations } from 'next-intl';
import { useFontSize } from './providers/FontSizeProvider';

export default function FontSizeControl() {
  const { scale, increase, decrease } = useFontSize();
  const t = useTranslations('accessibility');

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={decrease}
        disabled={scale <= 0.85}
        className="px-2 py-2 rounded-lg text-sm font-bold
          bg-surface-card dark:bg-surface-dark-card
          text-text-dark dark:text-text-light
          hover:bg-primary/10 dark:hover:bg-primary/20
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={t('decreaseFontSize')}
      >
        A−
      </button>
      <button
        onClick={increase}
        disabled={scale >= 1.3}
        className="px-2 py-2 rounded-lg text-sm font-bold
          bg-surface-card dark:bg-surface-dark-card
          text-text-dark dark:text-text-light
          hover:bg-primary/10 dark:hover:bg-primary/20
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={t('increaseFontSize')}
      >
        A+
      </button>
    </div>
  );
}
