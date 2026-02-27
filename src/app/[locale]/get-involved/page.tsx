import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { HeartIcon, UsersIcon, MegaphoneIcon, MapPinIcon, PhoneIcon, MailIcon } from '@/components/icons';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'getInvolved' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

const wayIcons = [HeartIcon, UsersIcon, MegaphoneIcon];
const wayKeys = ['donate', 'volunteer', 'spread'] as const;

export default function GetInvolvedPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getInvolved');
  const tf = useTranslations('footer');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-text-light mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-text-dark/70 dark:text-text-light/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16 lg:py-20" aria-labelledby="ways-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="ways-heading" className="sr-only">{t('title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wayKeys.map((key, i) => {
              const IconComponent = wayIcons[i];
              return (
                <div key={key} className="bg-surface-card dark:bg-surface-dark-card rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark dark:text-text-light mb-2">
                    {t(`ways.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-dark/70 dark:text-text-light/70 leading-relaxed">
                    {t(`ways.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 lg:py-20 bg-surface-card dark:bg-surface-dark-card" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('form.title')} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info + Details */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-4">
                  {tf('contact')}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-text-dark/70 dark:text-text-light/70">
                    <MapPinIcon className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                    <a
                      href={tf('addressMapUrl')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {tf('address')}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-dark/70 dark:text-text-light/70">
                    <PhoneIcon className="w-5 h-5 shrink-0 text-primary" />
                    <a href="tel:+917011671926" className="hover:text-primary transition-colors">
                      {tf('phone')}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-dark/70 dark:text-text-light/70">
                    <MailIcon className="w-5 h-5 shrink-0 text-primary" />
                    <span>{tf('email')}</span>
                  </li>
                </ul>
              </div>

              {/* Bank Details */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-2">
                  {t('bankDetails.title')}
                </h3>
                <p className="text-sm text-text-dark/70 dark:text-text-light/70">
                  {t('bankDetails.note')}
                </p>
              </div>

              {/* Tax Benefits */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-2">
                  {t('taxBenefits.title')}
                </h3>
                <p className="text-sm text-text-dark/70 dark:text-text-light/70">
                  {t('taxBenefits.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
