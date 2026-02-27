# Balwant Seva Sansthan

Website for **Balwant Seva Sansthan** (balwantfoundation.org) — a rural Indian charitable foundation providing free medical camps, educational initiatives, agricultural awareness, and government scheme outreach to villages in Haryana.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl (Hindi/English)
- **Deployment**: Vercel-ready

## Features

- Hindi/English internationalization with `/en` and `/hi` route prefixes
- Dark mode with system preference detection and manual toggle
- Font size accessibility controls (A-/A+)
- WCAG 2.1 AA accessibility (skip links, keyboard navigation, focus indicators, semantic HTML)
- Mobile-first responsive design (320px+)
- Contact form with client-side validation
- SEO metadata, sitemap, robots.txt, and Organization JSON-LD

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, mission, impact stats, programs, testimonials |
| `/about` | Foundation story, vision, mission, values, team |
| `/library` | Sunehari Devi Girls Library — stats, features |
| `/programs` | Medical camps, education, agriculture, govt schemes |
| `/gallery` | Photo gallery with category filters |
| `/get-involved` | Contact form, donation info, volunteering |
| `/blog` | Updates and news |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en`.

## Project Structure

```
src/
  app/
    [locale]/          # Locale-prefixed routes
      layout.tsx       # Main layout with providers
      page.tsx         # Home page
      about/           # About page
      library/         # Library page
      programs/        # Programs page
      gallery/         # Gallery page
      get-involved/    # Contact & donations page
      blog/            # Blog page
    layout.tsx         # Root layout (minimal)
    sitemap.ts         # Dynamic sitemap
    robots.ts          # Robots.txt config
    globals.css        # Global styles
  components/
    providers/         # ThemeProvider, FontSizeProvider
    Header.tsx         # Navigation with mobile menu
    Footer.tsx         # Site footer
    ContactForm.tsx    # Contact form with validation
    icons.tsx          # Inline SVG icon components
    ...
  i18n/
    routing.ts         # Locale routing config
    navigation.ts      # Locale-aware navigation helpers
    request.ts         # Server-side i18n config
  lib/
    constants.ts       # Site config and data
    utils.ts           # Utility functions
  middleware.ts        # Locale detection middleware
messages/
  en.json              # English translations
  hi.json              # Hindi translations (Devanagari)
```

## Internationalization

All content is available in English and Hindi. Translation files are in `messages/en.json` and `messages/hi.json`.

To add or modify translations:
1. Edit both `messages/en.json` and `messages/hi.json`
2. Ensure both files have identical key structures
3. Hindi content should be natural Devanagari, not transliterated English

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE)
