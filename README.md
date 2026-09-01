# BODY KNOWS

Editorial website for BODY KNOWS, an immersive transformational movement experience founded by Richard Aceves.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Pages

- `/` — Homepage
- `/experience` — The experience
- `/about` — Richard Aceves
- `/faq` — FAQ
- `/apply` — Application and waitlist

## Content and CMS-ready architecture

Copy, navigation, FAQs, media, and retreat logistics live in `src/content/`. Swap these modules for a CMS later without rewriting page layouts.

Photography is sourced from the BODY KNOWS Drive archive (session stills and video). Web-ready files live in `public/images` and `public/videos`.

To publish confirmed immersion logistics, add an object to `src/content/retreats.ts`. The site will not display dates, location, price, or capacity unless they are present.

## Forms

`POST /api/apply` and `POST /api/waitlist` validate submissions and forward them when credentials are present.

Copy `.env.example` to `.env.local`:

- `FORM_WEBHOOK_URL` — GoHighLevel inbound webhook or any JSON endpoint
- `FORM_PROVIDER=hubspot` plus HubSpot portal and form IDs for native HubSpot submissions

Until a provider is configured, submissions are accepted and logged server-side.
