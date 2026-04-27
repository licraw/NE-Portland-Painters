# NE Portland Painters

Reusable Next.js template for a painting company website.

## Customize

Edit [`lib/siteConfig.ts`](/Users/lcrawshaw/Desktop/portland-painting-nextjs/lib/siteConfig.ts) to update:

- Company name
- Phone and email
- Address
- Service areas
- Homepage copy
- About content
- Service card content
- Interior and exterior page copy
- Testimonial placeholders

## Routes Kept

- `/`
- `/about`
- `/contact`
- `/estimate`
- `/painting/interior`
- `/painting/exterior`

## Notes

- Business-specific analytics and schema were removed.
- Navigation, layout hierarchy, and styling remain intact.
- The template builds successfully with `npm run build`.

### Environment variables

- Email (SMTP): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (optional `SMTP_SECURE`, `EMAIL_FROM`), plus `RECIPIENT_EMAIL`
- Email (Gmail legacy): `EMAIL_USER`, `EMAIL_PASS`, plus `RECIPIENT_EMAIL`
- Email bypass: set `SKIP_EMAIL_SEND=1` to make `/api/sendEmail` return success without requiring SMTP config or sending mail.
- Trello (lead capture): `TRELLO_API_KEY`, `TRELLO_API_TOKEN`, `TRELLO_LIST_ID` (or `TRELLO_BOARD` + `TRELLO_LIST_NAME`) (optional `TRELLO_LABEL_IDS`)
- Trello token setup: generate `TRELLO_API_TOKEN` with `scope=read,write`, e.g. `https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&key=YOUR_API_KEY`
- Trello blocking behavior: set `REQUIRE_TRELLO=1` to make missing Trello config fail the request (default is non-blocking).
- reCAPTCHA: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`
- Local testing: set `NEXT_PUBLIC_RECAPTCHA_BYPASS=1` and `RECAPTCHA_BYPASS=1` to bypass reCAPTCHA.
