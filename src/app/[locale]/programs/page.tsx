import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import PlaceholderImage from '@/components/PlaceholderImage';
import { PROGRAM_KEYS } from '@/lib/constants';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'programs' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

const programIcons = {
  medical: 'heart',
  education: 'graduation',
  agriculture: 'tree',
  government: 'book',
} as const;

const programColors = {
  medical: 'bg-red-100/50 dark:bg-red-900/10',
  education: 'bg-blue-100/50 dark:bg-blue-900/10',
  agriculture: 'bg-green-100/50 dark:bg-green-900/10',
  government: 'bg-amber-100/50 dark:bg-amber-900/10',
} as const;

export default function ProgramsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('programs');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary/10 to-primary/10 dark:from-secondary/5 dark:to-primary/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-text-light mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-dark/70 dark:text-text-light/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Programs */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {PROGRAM_KEYS.map((key, index) => (
            <section key={key} aria-labelledby={`program-${key}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 id={`program-${key}`} className="text-3xl font-bold text-text-dark dark:text-text-light mb-4">
                    {t(`items.${key}.title`)}
                  </h2>
                  <p className="text-text-dark/80 dark:text-text-light/80 leading-relaxed mb-6">
                    {t(`items.${key}.description`)}
                  </p>
                  <ul className="space-y-2">
                    {[0, 1, 2, 3].map((hi) => {
                      try {
                        const highlight = t(`items.${key}.highlights.${hi}`);
                        return (
                          <li key={hi} className="flex items-start gap-2 text-text-dark/70 dark:text-text-light/70">
                            <span className="text-primary mt-1">&#10003;</span>
                            <span>{highlight}</span>
                          </li>
                        );
                      } catch {
                        return null;
                      }
                    })}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <PlaceholderImage
                    height="h-72 lg:h-80"
                    bgColor={programColors[key]}
                    icon={programIcons[key]}
                    label={t(`items.${key}.title`)}
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
