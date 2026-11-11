# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro with static output, plain CSS and custom properties. No UI framework and no Tailwind unless Tyler says so. System or self-hosted fonts only; no render-blocking third-party font CSS.

Hosted on GitHub Pages from `tylervoss1/healingbeats.github.io`, deployed by GitHub Actions. No CNAME for healingbeatsvolunteers.org until Tyler asks for it.

Forms post to one configurable endpoint (Formspree). The form endpoint and the donation embed live in one file, `src/config.ts`.

## Users

In priority order:

1. **Hospitals:** volunteer services managers, patient experience leaders and nurse leaders deciding whether to bring the program in. They need credibility, a clear sense of what is included, low burden on staff, and an easy way to start a conversation. This is how the program grows.
2. **Individual volunteers:** mostly college and pre-health students, plus community members, mostly on phones. They need to know what a shift looks like, what training they get, where they can serve, and how to sign up.
3. **Donors:** people ready to give. Donating is not a headline path, but it must be reachable from every page.
4. **Chapter starters:** people who want to bring Healing Beats to a new place, such as a student group at its local hospital. Lower priority than the three above.

## Product Purpose

Healing Beats Volunteers is a registered 501(c)(3) nonprofit. Its mission: "Creating humanizing healthcare experiences through music and companionship."

This site replaces the current WordPress.com site at healingbeatsvolunteers.org. It exists to turn each audience's interest into a first contact: a hospital inquiry, a volunteer sign-up, a donation, or a chapter inquiry.

It succeeds when a hospital administrator and a student can each find their path within a few seconds on a phone.

## Positioning

- **The patient picks the song.** A volunteer plays the song the patient asks for, then sits down and listens to the story and the people that song brings back. The companionship is as therapeutic as the music. For some patients the volunteer is the only person they get to chat with casually.
- **One program, three problems.** It addresses patient loneliness and anxiety; volunteer dissatisfaction and anxiety (the music gives volunteers a natural conversation starter); and nurse overburden (volunteers meet emotional and social needs and offer distraction during routine procedures).
- **Turnkey and white-label for hospitals.** The program is meant to feel like the hospital's own initiative. Volunteers tell patients, "This is a program offered by the hospital to help make your stay more comfortable." Low cost, high impact, low burden on staff.

## Operating Context

- **A visit:** the volunteer knocks and introduces themselves ("Hi, my name is Jake, I'm a volunteer. Is it all right if I come in?"), asks what the patient would like to hear, plays it from a phone or tablet through a Bluetooth speaker, then sits and listens.
- **The problem it meets:** hospital stays are isolating. Patients deal with loneliness, anxiety and pain, and can feel reduced to their diagnosis.
- **Volunteer training:** a structured, step-by-step process for confidence at the bedside. It covers patient autonomy, emotional sensitivity, infection control, and finding each patient's needs.
- **What hospitals get:** turnkey volunteer training built on 6+ years of experience; implementation guidance for recruitment, training and launch; materials custom-branded to the hospital's name and style; ongoing consultation.
- **Where it has run:** founder Jake Nitzkin, RN, has coordinated the program at UnityPoint Health – Meriter in Madison, WI.

## Capabilities and Constraints

**Site capabilities**
- Six pages: Home, For Hospitals, Volunteer, Donate, Start a Chapter, About.
- Three forms: hospital inquiry, volunteer interest, chapter interest.
- A donation embed slot driven by one config value. The current site says the donation form is "coming soon".
- One embedded video, loaded only when the visitor clicks play, from `youtube-nocookie.com`, credited to UnityPoint Health.
- A Donate button in the header of every page, including the mobile header outside the menu.

**Content rules (revised by Tyler after the first draft)**
- Design, flow and user experience come first: mobile, then desktop. Content checks never shape or weaken a layout.
- Use everything in the brief at full strength, including the 2023 webinar figures and hospital names. The site should read as finished, not as a form waiting to be filled in.
- Write complete, confident draft copy where the brief gives the substance but not the words (FAQ answers, chapter steps, what a shift is like).
- Items Jake still has to check carry at most a small, quiet "to confirm" note. The full list lives in `CONTENT-TODO.md`.
- Numbers, names and direct quotes come from the brief. Where a specific is unknown (a price, a list of locations), the page is designed so it does not need one.
- No WordPress leftovers: no comment forms, share bars, or `#` placeholder links.

**Terminology**
- Call-to-action labels are the same sitewide: "Partner with us", "Volunteer", "Donate", "Start a chapter".

**Undecided**
- Donation provider. Candidates: Zeffy, Givebutter, Donorbox, PayPal Giving Fund.
- The Formspree form ID.
- When the custom domain moves to this site.
- Jake's confirmation of drafted copy: hospital FAQ answers (cost, staff time, infection control, which units, how volunteers are supervised), chapter specifics, and his founder story.
- Current volunteer locations.

## Brand Commitments

- **Name:** Healing Beats Volunteers.
- **Tagline:** "Creating humanizing healthcare experiences through music and companionship."
- **Logo:** a new custom SVG mark and wordmark will be made for this site (Tyler's decision). The current site's logo file is not on hand.
- **Visual constraints Tyler made binding:**
  - Warm, human and calm. It should feel like music and memory.
  - Not a clinical hospital-blue template, and not a generic nonprofit template.
  - It must also read as credible to hospital administrators.
  - No stock photos of identifiable patients in hospital beds (privacy and dignity). Prefer illustration, texture, type, or placeholders marked for real program photos.
  - No gradient blobs, glassmorphism, emoji icons, identical three-card grids everywhere, or centered-everything layouts.

## Evidence on Hand

**Confirmed (from the current site and Tyler's brief)**
- Registered 501(c)(3). EIN 84-3530929. Donations are tax-deductible.
- Founder: Jake Nitzkin, RN. Contact: jake.nitzkin@healingbeatsvolunteers.org
- Impact: 5 hospitals partnered · 50 volunteers trained · 2,000+ hours with patients.
- Training built on 6+ years of experience.
- Patient testimonial (Medical-Surgical unit, Michigan, 2019): the patient thanked the volunteer for their time; it had been about 15 years since they had heard "Stardust" by Nat King Cole, and they sang along. Direct quote: "Thank you for spending time with me today."
- Volunteer testimonial (undergraduate, Wisconsin, 2025): connecting with patients drives their interest in medicine and their goal of becoming a physician who pairs compassion with clinical skill. Direct quote: "ensuring that every patient feels valued and understood."
- Video: UnityPoint Health's 76-second piece featuring Jake, https://www.youtube.com/watch?v=eiKWuePIR6Q. Jake says the beauty of the program is helping patients relive the experience of a song taking them back to a certain time and place. He describes patients relaxing, tapping a foot under the blanket, singing, dancing or crying when they hear a song they haven't heard in 15 years, and sharing stories that are "really intimate". A patient recalls a Boy Scout trip in the '80s.

**From the 2023 public webinar (use freely in the design; Jake to confirm before launch)**
- Began as a pilot at UnityPoint Health in 2019 and resumed after COVID in 2021.
- In 2022, 17 volunteers there logged 927 hours on 336 occasions, reaching about 36 patients per week.
- Henry Ford West Bloomfield Hospital (MI) launched the program in January 2023.

**Not on hand**
- The full verbatim text of either testimonial. The two quoted fragments above are exact; the rest is told as story around them.
- Partner hospital names or logos beyond those listed above.
- Program photos.
- Prices or costs.
- A list of current volunteer locations.
- The current site's logo file.

## Product Principles

1. **Two paths first.** Hospitals and volunteers are the people this site is for; each must see their way in at once.
2. **Finished first, checked second.** The site presents Healing Beats at full strength from the material on hand. What Jake still has to confirm is tracked quietly and never dilutes the experience.
3. **Patient dignity.** No identifiable patient imagery, and patient stories appear only as Healing Beats has shared them.
4. **Low burden, like the program.** Starting a conversation takes one short form.
5. **Giving is always one tap away.** Donate is present on every page without being the headline.

## Accessibility & Inclusion

- WCAG 2.2 AA contrast, visible focus states, a skip link, and labelled form fields with inline errors.
- One H1 per page and a logical heading order. Meaningful alt text on every image, or `alt=""` when decorative.
- Mobile is a primary requirement: designed at 390px first, tap targets at least 44px, body text at least 16px, no horizontal scroll.
- Respect `prefers-reduced-motion`.
