# StudyTech Advisor

A polished bilingual (Arabic default RTL + English LTR) student device advisor for Malaysia.

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Run development server
   ```bash
   npm run dev
   ```
3. Build and run production
   ```bash
   npm run build
   npm start
   ```

## Core Features
- Premium startup-style UI with custom StudyTech logo.
- Full localization on main routes (home, basics, quiz, results, partner, auth, dashboard, favorites, profile, FAQ, contact).
- Arabic default with persistent RTL/LTR switching in localStorage.
- Theme toggle (light/dark) persisted by `next-themes`.
- Guided multi-step smart quiz + dedicated results page.
- Rule-based recommendation engine and compare/favorites/history flows.
- Improved mock local authentication with validation and success/error states.
- Trusted lower-cost partner page using BBTech link.

## Edit Points
- Partner link/contact: `data/constants.ts`
- Device datasets: `data/devices.ts`
- Quiz matching logic: `lib/recommend.ts`
- Translations: `data/i18n.ts`
- Educational content: `data/content.ts`
