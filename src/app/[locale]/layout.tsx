import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { FontSizeProvider } from '@/components/providers/FontSizeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrganizationSchema from '@/components/OrganizationSchema';
import { SITE_URL, FOUNDATION_NAME } from '@/lib/constants';
import '@/app/globals.css';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s | ${FOUNDATION_NAME}`,
    },
    description: t('description'),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        hi: '/hi',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: SITE_URL,
      siteName: FOUNDATION_NAME,
      locale: locale === 'hi' ? 'hi_IN' : 'en_IN',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!routing.locales.includes(locale as 'en' | 'hi')) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'accessibility' });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}var s=localStorage.getItem('fontSizeScale');if(s){document.documentElement.style.setProperty('--font-size-scale',s)}})();`,
          }}
        />
        <OrganizationSchema />
      </head>
      <body className="bg-surface-light dark:bg-surface-dark text-text-dark dark:text-text-light transition-colors duration-200 min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <FontSizeProvider>
              <a href="#main-content" className="skip-to-content">
                {t('skipToContent')}
              </a>
              <Header />
              <main id="main-content" tabIndex={-1} className="flex-1">
                {children}
              </main>
              <Footer />
            </FontSizeProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
