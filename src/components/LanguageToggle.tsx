'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('accessibility');

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'hi' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium
        bg-surface-card dark:bg-surface-dark-card
        text-text-dark dark:text-text-light
        hover:bg-primary/10 dark:hover:bg-primary/20
        transition-colors min-w-[44px] min-h-[44px] justify-center"
      aria-label={t('toggleLanguage')}
    >
      <span className={locale === 'en' ? 'font-bold text-primary' : ''}>EN</span>
      <span className="text-text-dark/30 dark:text-text-light/30">/</span>
      <span className={locale === 'hi' ? 'font-bold text-primary' : ''}>हि</span>
    </button>
  );
}
