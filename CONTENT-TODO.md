# Content to confirm with Jake

The site is written to read as finished. These are the items Jake should check before launch. Each one that shows on a page carries a small "To confirm" note.

## Facts from the 2023 public webinar
- [ ] Pilot began at UnityPoint Health in 2019 and resumed after COVID in 2021. (For Hospitals, About)
- [ ] 2022 at UnityPoint Health – Meriter: 17 volunteers, 927 hours, 336 visits, about 36 patients a week. (For Hospitals)
- [ ] Henry Ford West Bloomfield Hospital (MI) launched in January 2023. (For Hospitals, Volunteer, About)
- [ ] OK to name UnityPoint Health – Meriter and Henry Ford West Bloomfield Hospital.

## Images
- [ ] Hero photo on Home is a still from UnityPoint Health's film (a volunteer knocking on a patient's door). Confirm UnityPoint is happy for it to be used, or supply a program photo. File: `src/assets/hero-knock.jpg`. The still is low resolution; a real photo of at least 1600px wide would look sharper.
- [ ] Any other real program photos (no identifiable patients).

## Copy drafted from the brief (check the wording is true)
- [ ] For Hospitals FAQ: cost, staff time, infection control, which units, supervision.
- [ ] For Hospitals timeline: recruit, train, launch, ongoing support.
- [ ] Volunteer: "Who it is for", including "No musical skill needed".
- [ ] Volunteer: current locations. The page names the two hospitals above and asks visitors for their area.
- [ ] Start a Chapter: what a chapter is, the support list, and the four steps.
- [ ] About: Jake's founder story.
- [ ] Testimonials are told as short stories around the exact quoted words. Supply the full original wording if you want longer quotes.

## Settings to fill in (`src/config.ts`)
- [ ] `FORM_ENDPOINT`: the Formspree form URL. Until then the forms show a "not switched on yet" message and offer email.
- [ ] `DONATION_EMBED`: pick Zeffy, Givebutter, Donorbox or PayPal Giving Fund and paste the URL.
- [ ] `ALLOW_INDEXING`: set to `true` at launch. It is `false` now so search engines skip the draft.

## Brand
- [ ] Approve the new logo mark (a record with a speech-bubble tail). File: `src/components/Logo.astro`.
