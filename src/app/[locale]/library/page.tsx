import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import PlaceholderImage from '@/components/PlaceholderImage';
import { BookIcon, LaptopIcon, GraduationCapIcon, ShieldIcon, UsersIcon, HeartIcon } from '@/components/icons';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'library' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

const featureIcons = [BookIcon, LaptopIcon, GraduationCapIcon, ShieldIcon, UsersIcon, HeartIcon];

export default function LibraryPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('library');

  const stats = [
    { count: t('stats.books'), label: t('stats.booksLabel') },
    { count: t('stats.visitors'), label: t('stats.visitorsLabel') },
    { count: t('stats.programs'), label: t('stats.programsLabel') },
    { count: t('stats.years'), label: t('stats.yearsLabel') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent/10 to-secondary/10 dark:from-accent/5 dark:to-secondary/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-text-light mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-dark/70 dark:text-text-light/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* About the Library */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark dark:text-text-light mb-6">
                {t('title')}
              </h2>
              <p className="text-text-dark/80 dark:text-text-light/80 leading-relaxed">
                {t('description')}
              </p>
            </div>
            <PlaceholderImage
              height="h-80"
              bgColor="bg-accent/10 dark:bg-accent/5"
              icon="book"
              label={t('title')}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-surface-card dark:bg-surface-dark-card" aria-labelledby="library-stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="library-stats-heading" className="sr-only">{t('stats.title')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-white dark:bg-surface-dark">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.count}</p>
                <p className="text-sm md:text-base text-text-dark/70 dark:text-text-light/70 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('features.title')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const IconComponent = featureIcons[i];
              return (
                <div key={i} className="bg-surface-card dark:bg-surface-dark-card rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-2">
                    {t(`features.items.${i}.title`)}
                  </h3>
                  <p className="text-sm text-text-dark/70 dark:text-text-light/70 leading-relaxed">
                    {t(`features.items.${i}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 lg:py-20 bg-surface-card dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { color: 'bg-accent/15', icon: 'book' as const },
              { color: 'bg-secondary/15', icon: 'graduation' as const },
              { color: 'bg-primary/15', icon: 'laptop' as const },
              { color: 'bg-accent/20', icon: 'users' as const },
              { color: 'bg-secondary/20', icon: 'book' as const },
              { color: 'bg-primary/20', icon: 'graduation' as const },
            ].map((item, i) => (
              <PlaceholderImage
                key={i}
                height="h-40 md:h-52"
                bgColor={item.color}
                icon={item.icon}
                className="dark:opacity-80"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
