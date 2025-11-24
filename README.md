# Merino WarmLayer E-Shop UI

Modern, polished React + TypeScript + Vite single-page experience for a Merino warm-layer e-commerce storefront. Includes Tailwind CSS styling, unit tests with Vitest + React Testing Library, and Playwright E2E coverage.

## Tech Stack
- React 19 + TypeScript + Vite
- Tailwind CSS 3
- Vitest + @testing-library/react + jsdom
- Playwright for E2E

## Getting Started
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Testing
- Unit tests: `npm test`
- Coverage: `npm run test:ci` (outputs HTML/text coverage reports)
- E2E (Playwright): `npm run test:e2e`

## Build & Preview
```bash
npm run build
npm run preview
```

## Project Structure
- `src/` — App components, styles, data
- `src/data/products.ts` — Product catalog seed data
- `e2e/` — Playwright specs
- `playwright.config.ts` — E2E runner config with Vite webServer

## Notes
- Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`.
- Vitest is configured in `vite.config.ts` with jsdom and `src/setupTests.ts`.
