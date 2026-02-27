import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { PROGRAM_KEYS } from '@/lib/constants';
import ImpactStats from '@/components/ImpactStats';
import ProgramCard from '@/components/ProgramCard';
import SectionHeading from '@/components/SectionHeading';
import { QuoteIcon, StarIcon } from '@/components/icons';

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');
  const tp = useTranslations('programs');

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-accent py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg
                hover:bg-surface-light transition-colors min-h-[44px] text-lg"
            >
              {t('hero.ctaPrimary')}
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg
                hover:bg-white/10 transition-colors min-h-[44px] text-lg"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-text-dark dark:text-text-light mb-4">
            {t('mission.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 mb-8" />
          <p className="text-lg text-text-dark/80 dark:text-text-light/80 leading-relaxed">
            {t('mission.description')}
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Programs Section */}
      <section className="py-16 lg:py-20" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('programs.title')} subtitle={t('programs.subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAM_KEYS.map((key) => (
              <ProgramCard
                key={key}
                programKey={key}
                title={tp(`items.${key}.title`)}
                description={tp(`items.${key}.description`)}
                learnMore={tp('viewAll')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-surface-card dark:bg-surface-dark-card" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('testimonials.title')} />
          <div className="max-w-lg mx-auto">
            {[0].map((i) => (
              <blockquote
                key={i}
                className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm"
              >
                <QuoteIcon className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-text-dark/80 dark:text-text-light/80 text-sm leading-relaxed mb-4">
                  {t(`testimonials.items.${i}.quote`)}
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {t(`testimonials.items.${i}.name`).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <cite className="text-sm font-semibold text-text-dark dark:text-text-light not-italic">
                      {t(`testimonials.items.${i}.name`)}
                    </cite>
                    <p className="text-xs text-text-dark/60 dark:text-text-light/60">
                      {t(`testimonials.items.${i}.role`)}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} className="w-3 h-3 text-accent" />
                    ))}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-secondary dark:bg-secondary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary font-semibold rounded-lg
              hover:bg-surface-light transition-colors min-h-[44px] text-lg"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}
