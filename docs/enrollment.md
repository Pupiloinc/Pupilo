# Enrollment Form Integration (Tally)

This document describes how the Tally-based enrollment form is integrated into the Pupilo site, and how you can configure, brand, and connect it to notifications and destinations without changing app code.

## Where it lives

- Page route: `src/app/enroll/page.jsx`
- Header CTA: `src/components/common/Header.jsx` adds an "Enroll Now" button (desktop + mobile overlay) linking to `/enroll`.
- Footer link: Added to `FOOTER_DATA_LIST` in `utils/helper.js` under "About Us".

## What the page does

- Embeds the Tally form via iframe with `data-tally-src` and the official Tally embed script to enable:
  - Dynamic height (`dynamicHeight=1`)
  - Transparent background to blend with site
  - Hidden form title (we render our own title on the page)
- Provides a fallback link to open the form in a new tab: `https://tally.so/r/wvkX9A`.

## Tally configuration

Form ID: `wvkX9A`

Recommended fields (as agreed with client):
- Student name
- Age
- Grade
- Parent contact (name, email, phone)
- Preferred class/day
- Short message

Branding tips (in Tally UI):
- Primary color: `#8C52FF` (Pupilo purple)
- Button radius: rounded to match site style
- Hide public title and description (we render our own on the page)
- If available, set font to match brand (Poppins). Otherwise, a system font is acceptable; the container styling keeps it on brand.

Anti-spam & validation:
- Enable Tally's spam protection (reCAPTCHA / hCaptcha depending on your plan)
- Mark required fields for critical inputs
- Consider rate limiting if bots become an issue

Confirmation UX:
- Tally: set submit behavior to "Show message" and write your confirmation text
- Optional: enable an automated confirmation email (Tally can send email to respondent if you capture their email)

## Destinations and notifications

Choose any of the following (no code changes required):
- Google Sheets: In Tally, enable "Send responses to Google Sheets" and connect the form to a sheet.
- Email notifications: In Tally, enable notifications to specific team email(s).
- Webhooks / Zapier / Make: Use Tally's built-in integrations to forward submissions to CRMs, Brevo, etc.

Notes:
- For production, keep all integrations within Tally so the website code remains unchanged.
- If you later want to trigger custom flows in-app, consider adding a serverless endpoint consuming Tally webhooks.

## SEO metadata

- The enroll page uses Next.js metadata referencing `PUPILO_HOST_URL`. Ensure this env var is set in your environment (e.g., `.env.local`) or via your hosting provider.
- OG/Twitter images default to `/assets/meta.webp`. You can replace or add a more specific image for enrollment if desired.

## Local development

- Ensure `PUPILO_HOST_URL` is set locally (e.g., `http://localhost:3000`) before running `npm run dev`.
- Navigate to `/enroll` to test the embedded form.
- Test on mobile: the header CTA appears in the mobile menu; the embed auto-resizes.

## Accessibility

- The iframe includes a descriptive `title`.
- Container uses sufficient contrast; Tally form elements follow standard focus styles.

## Styling notes

- The embed is wrapped in a white card with rounded corners and a subtle shadow (`form-shadow`) defined in `src/app/globals.css`.
- Background is transparent to harmonize with the site.

## Future enhancements (optional)

- Add an additional inline CTA near existing conversion blocks (e.g., below `GetStarted`) if analytics suggest it would help. Currently, we opted for header + footer entry points to keep changes minimal.
- Add a dedicated OG image for `/enroll` (e.g., `public/assets/meta-enroll.webp`).
