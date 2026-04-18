# StudyTech Advisor

Modern bilingual (Arabic default + English) student device advisor for Malaysia.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Build production:
   ```bash
   npm run build
   npm start
   ```

## Edit Points
- Partner link + contact: `data/constants.ts`
- Quiz recommendation logic: `lib/recommend.ts`
- Device datasets: `data/devices.ts`
- Arabic/English UI strings: `data/i18n.ts`

## Features
- RTL Arabic default, LTR English with localStorage persistence.
- Light/dark theme toggle persisted by `next-themes`.
- Smart multi-step quiz with rule-based matching.
- Learn basics educational cards.
- Trusted partner page with BBTech external CTA.
- Auth mock flow, dashboard, profile, favorites, quiz history, compare.
