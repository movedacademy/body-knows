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

The application and waitlist forms submit to `POST /api/submit-lead`. That Route Handler validates the request and forwards this JSON payload to GoHighLevel:

```json
{
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": "",
  "message": "",
  "form_source": "apply_form",
  "page_url": "https://bodyknowsexperience.com/apply"
}
```

`form_source` is `apply_form` or `waitlist_form`. The webhook URL stays server-side and is already configured. Override it with `GHL_WEBHOOK_URL` only if you need a different destination.

Never prefix this variable with `NEXT_PUBLIC_`.
