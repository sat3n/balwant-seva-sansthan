import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import GalleryGrid from '@/components/GalleryGrid';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'gallery' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function GalleryPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('gallery');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/5 dark:to-primary/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-text-light mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-dark/70 dark:text-text-light/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
