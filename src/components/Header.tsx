'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { MenuIcon, CloseIcon } from './icons';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import FontSizeControl from './FontSizeControl';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const ta = useTranslations('accessibility');
  const pathname = usePathname();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (menuOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [menuOpen, closeMenu]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <Link
            href="/"
            className="flex items-center gap-2 min-h-[44px] shrink-0"
          >
            <span className="text-xl lg:text-2xl font-bold text-primary">
              Balwant
            </span>
            <span className="text-xl lg:text-2xl font-bold text-secondary hidden sm:inline">
              Seva Sansthan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] flex items-center
                  ${isActive(item.href)
                    ? 'bg-primary/10 text-primary dark:text-primary-light'
                    : 'text-text-dark dark:text-text-light hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {t(item.translationKey)}
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-2">
            <FontSizeControl />
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg
              text-text-dark dark:text-text-light
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={menuOpen ? ta('closeMenu') : ta('openMenu')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 z-50 bg-white dark:bg-surface-dark overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="px-4 py-6 space-y-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[44px]
                  ${isActive(item.href)
                    ? 'bg-primary/10 text-primary dark:text-primary-light'
                    : 'text-text-dark dark:text-text-light hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                onClick={closeMenu}
              >
                {t(item.translationKey)}
              </Link>
            ))}
          </nav>

          <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <FontSizeControl />
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
