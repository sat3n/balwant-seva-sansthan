import { SITE_URL, FOUNDATION_NAME } from '@/lib/constants';

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: FOUNDATION_NAME,
    url: SITE_URL,
    description:
      'Rural charitable foundation empowering communities through free medical camps, education, and sustainable development in rural India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'VPO Khairi',
      addressLocality: 'Khairi',
      addressRegion: 'Haryana',
      postalCode: '125001',
      addressCountry: 'IN',
    },
    telephone: '+917011671926',
    email: 'info@balwantfoundation.org',
    foundingDate: '2025-12-31',
    areaServed: {
      '@type': 'Place',
      name: 'Rural India',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
