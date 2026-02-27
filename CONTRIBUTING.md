# Contributing to Balwant Seva Sansthan

Thank you for your interest in contributing! This project powers the website for a rural Indian charitable foundation.

## Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/balwant-seva-sansthan.git`
3. **Install** dependencies: `npm install`
4. **Create a branch**: `git checkout -b feature/your-feature-name`
5. **Start dev server**: `npm run dev`

## Development Workflow

1. Make your changes on your feature branch
2. Ensure `npm run build` passes with zero errors
3. Ensure `npm run lint` passes
4. Commit with a clear message (see commit conventions below)
5. Push to your fork and open a Pull Request against `main`

## Code Style

- **TypeScript**: All files use TypeScript with strict mode
- **Tailwind CSS**: Use Tailwind utility classes; avoid custom CSS unless absolutely necessary
- **Server Components**: Default to Server Components. Only use `'use client'` when the component needs interactivity (state, effects, event handlers)
- **Imports**: Use `@/` path alias for all imports from `src/`
- **Components**: One component per file. Use PascalCase for component filenames
- **No external UI libraries**: Keep dependencies minimal. Use inline SVGs for icons

## Adding Translations

Both `messages/en.json` and `messages/hi.json` must have identical key structures.

1. Add the English text to `messages/en.json`
2. Add the corresponding Hindi text (in Devanagari script) to `messages/hi.json`
3. Hindi translations should be natural Hindi, not literal word-for-word translations
4. Keep numeric values (e.g., "5,000+") in the same format across both files
5. Government scheme names (PM-KISAN, Ayushman Bharat, etc.) stay in their official names

## Accessibility

All contributions must maintain WCAG 2.1 AA compliance:

- Every page has exactly one `<h1>`, with sequential heading levels (`h2`, `h3`, no skips)
- All interactive elements must be keyboard accessible with visible focus indicators
- All images and icons need meaningful `alt` text or `aria-label`
- Minimum touch target size: 44x44px
- Color contrast ratio: minimum 4.5:1 for normal text

## Commit Message Conventions

```
type: short description

Longer explanation if needed.
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat: add volunteer registration form`
- `fix: correct Hindi translation for programs page`
- `docs: update setup instructions in README`

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Include a clear description of what changed and why
- If adding a new page or component, ensure both English and Hindi translations are included
- Screenshots are helpful for UI changes

## Questions?

Open an issue or reach out at info@balwantfoundation.org.
