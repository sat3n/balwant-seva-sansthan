import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS, PROGRAM_KEYS } from '@/lib/constants';
import { PhoneIcon, MailIcon, MapPinIcon } from './icons';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('navigation');
  const tp = useTranslations('programs');

  return (
    <footer className="bg-text-dark dark:bg-surface-dark text-text-light" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Foundation Info */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">
              Balwant Seva Sansthan
            </h2>
            <p className="text-text-light/70 text-sm leading-relaxed">
              {t('about')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-light/70 hover:text-primary transition-colors text-sm min-h-[44px] inline-flex items-center"
                  >
                    {tn(item.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('programs')}</h3>
            <ul className="space-y-2">
              {PROGRAM_KEYS.map((key) => (
                <li key={key}>
                  <Link
                    href="/programs"
                    className="text-text-light/70 hover:text-primary transition-colors text-sm min-h-[44px] inline-flex items-center"
                  >
                    {tp(`items.${key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-text-light/70">
                <MapPinIcon className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                <a
                  href={t('addressMapUrl')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {t('address')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-light/70">
                <PhoneIcon className="w-5 h-5 shrink-0 text-primary" />
                <a href="tel:+917011671926" className="hover:text-primary transition-colors">
                  {t('phone')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-light/70">
                <MailIcon className="w-5 h-5 shrink-0 text-primary" />
                <a href="mailto:info@balwantfoundation.org" className="hover:text-primary transition-colors">
                  {t('email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* NGO Info */}
        <div className="mt-8 pt-8 border-t border-text-light/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-text-light/50">
              <p>{t('ngo.registration')}</p>
              <p>{t('ngo.certificate')}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-text-light/10 text-center">
          <p className="text-sm text-text-light/50">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
