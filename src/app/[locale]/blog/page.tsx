import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import PlaceholderImage from '@/components/PlaceholderImage';
import { ClockIcon } from '@/components/icons';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

const postColors = [
  { bg: 'bg-red-100/50 dark:bg-red-900/10', icon: 'heart' as const },
  { bg: 'bg-amber-100/50 dark:bg-amber-900/10', icon: 'book' as const },
  { bg: 'bg-green-100/50 dark:bg-green-900/10', icon: 'tree' as const },
];

export default function BlogPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('blog');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-text-light mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-dark/70 dark:text-text-light/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <article
                key={i}
                className="bg-surface-card dark:bg-surface-dark-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <PlaceholderImage
                  height="h-48"
                  bgColor={postColors[i].bg}
                  icon={postColors[i].icon}
                  className="rounded-none"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-text-dark/50 dark:text-text-light/50 mb-3">
                    <ClockIcon className="w-3 h-3" />
                    <time>{t(`posts.${i}.date`)}</time>
                    <span className="mx-1">|</span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                      {t(`posts.${i}.category`)}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-text-dark dark:text-text-light mb-2">
                    {t(`posts.${i}.title`)}
                  </h2>
                  <p className="text-sm text-text-dark/70 dark:text-text-light/70 leading-relaxed mb-4">
                    {t(`posts.${i}.excerpt`)}
                  </p>
                  <span className="text-primary dark:text-primary-light font-medium text-sm cursor-pointer hover:underline">
                    {t('readMore')} →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
