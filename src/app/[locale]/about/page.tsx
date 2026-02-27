import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import PlaceholderImage from '@/components/PlaceholderImage';
import { HeartIcon, GraduationCapIcon, UsersIcon, TreeIcon, ShieldIcon, HandshakeIcon } from '@/components/icons';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

const valueIcons = [HeartIcon, GraduationCapIcon, UsersIcon, TreeIcon, ShieldIcon, HandshakeIcon];

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('about');

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

      {/* Story */}
      <section className="py-16 lg:py-20" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="story-heading" className="text-3xl font-bold text-text-dark dark:text-text-light mb-6">
                {t('story.title')}
              </h2>
              <div className="space-y-4 text-text-dark/80 dark:text-text-light/80 leading-relaxed">
                <p>{t('story.p1')}</p>
                <p>{t('story.p2')}</p>
                <p>{t('story.p3')}</p>
              </div>
            </div>
            <PlaceholderImage
              height="h-80"
              bgColor="bg-primary/10 dark:bg-primary/5"
              icon="heart"
              label={t('story.title')}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-20 bg-surface-card dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">{t('vision.title')}</h2>
              <p className="text-text-dark/80 dark:text-text-light/80 leading-relaxed">
                {t('vision.description')}
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-secondary mb-4">{t('mission.title')}</h2>
              <p className="text-text-dark/80 dark:text-text-light/80 leading-relaxed">
                {t('mission.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('values.title')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const IconComponent = valueIcons[i];
              return (
                <div key={i} className="bg-surface-card dark:bg-surface-dark-card rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-2">
                    {t(`values.items.${i}.title`)}
                  </h3>
                  <p className="text-sm text-text-dark/70 dark:text-text-light/70 leading-relaxed">
                    {t(`values.items.${i}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20 bg-surface-card dark:bg-surface-dark-card" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('team.title')} subtitle={t('team.subtitle')} />
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 text-center shadow-sm">
              <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">
                  {t('team.members.0.name').charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-dark dark:text-text-light">
                {t('team.members.0.name')}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                {t('team.members.0.role')}
              </p>
              <p className="text-sm text-text-dark/70 dark:text-text-light/70">
                {t('team.members.0.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
