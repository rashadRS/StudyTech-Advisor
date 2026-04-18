# StudyTech Advisor

A modern bilingual (Arabic default RTL + English LTR) student-focused full-stack style web app for a Malaysia student hackathon.

## Tech Stack
- Next.js 14 + React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- next-themes
- LocalStorage mock auth, favorites, and quiz history

## Project Structure

```text
app/
  page.tsx
  layout.tsx
  about/page.tsx
  auth/login/page.tsx
  auth/signup/page.tsx
  contact/page.tsx
  dashboard/page.tsx
  faq/page.tsx
  favorites/page.tsx
  learn-basics/page.tsx
  partner/page.tsx
  profile/page.tsx
  quiz/page.tsx
  quiz-history/page.tsx
  compare/page.tsx
components/
  providers.tsx
  auth-form.tsx
  layout/
  home/
  quiz/
  ui/
lib/
  data/
    devices.ts
    quiz.ts
    content.ts
  i18n/
    dictionaries.ts
    types.ts
  utils/cn.ts
```

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Start development server
   ```bash
   npm run dev
   ```
3. Build production
   ```bash
   npm run build
   npm start
   ```

## Where to edit key project settings
- Partner link and contacts: `lib/data/content.ts` (`partnerConfig`)
- Quiz recommendation logic: `lib/data/quiz.ts`
- Main device data: `lib/data/devices.ts` (`devices`)
- Budget device data: `lib/data/devices.ts` (`budgetDevices`)
- Arabic/English content dictionaries: `lib/i18n/dictionaries.ts`

## Feature Checklist
- Arabic default + RTL
- English + LTR
- Language switcher with persistence
- Theme switcher with persistence
- Landing page with premium sections
- Learn basics educational page
- Multi-step smart quiz with rule-based recommendations
- Trusted budget devices partner page (bbtech.shop)
- Auth pages (mock)
- Dashboard, profile, favorites, quiz history, compare, FAQ, contact, about
- Responsive cards, animations, empty/loading/error states
