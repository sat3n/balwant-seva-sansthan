import { useTranslations } from 'next-intl';
import { IMPACT_STATS } from '@/lib/constants';

export default function ImpactStats() {
  const t = useTranslations('home.impact');

  return (
    <section className="py-16 lg:py-20 bg-surface-card dark:bg-surface-dark-card" aria-labelledby="impact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="impact-heading" className="text-3xl md:text-4xl font-bold text-center text-text-dark dark:text-text-light mb-2">
          {t('title')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-3 mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.translationKey}
              className="text-center p-6 rounded-xl bg-white dark:bg-surface-dark"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {t(`${stat.translationKey}Count`)}
              </p>
              <p className="text-sm md:text-base text-text-dark/70 dark:text-text-light/70 font-medium">
                {t(stat.translationKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
