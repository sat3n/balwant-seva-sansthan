import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
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
            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/EGFRP.jpg"
                alt="Outdoor courtyard and activity area at Sunehari Devi Girls Library"
                fill
                className="object-cover object-center saturate-[0.6] brightness-90 contrast-90 sepia-[0.18]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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

      {/* Library in Action */}
      <section className="py-16 lg:py-20 bg-surface-card dark:bg-surface-dark-card" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Library in Action" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: '/images/GcVPX.jpg',
                alt: 'Girls studying at individual desks in the Sunehari Devi Girls Library',
                caption: 'Girls studying in the dedicated Sunehari Devi Girls Library',
              },
              {
                src: '/images/LDKGh.jpg',
                alt: 'Students focused on reading and writing at library study stations',
                caption: 'Quiet study sessions in a focused, welcoming environment',
              },
              {
                src: '/images/ZvdZ5.jpg',
                alt: 'Girls working at library desks with portraits of founders on the wall',
                caption: 'Girls studying in the dedicated Sunehari Devi Girls Library',
              },
            ].map((photo) => (
              <figure key={photo.src} className="flex flex-col gap-2">
                <div className="relative h-52 w-full rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="text-sm text-text-dark/60 dark:text-text-light/60 text-center px-2">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
