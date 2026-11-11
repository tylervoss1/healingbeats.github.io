# Design brief: Healing Beats Volunteers site

Status: waiting for Tyler to pick a direction. No site code is written until then.

Product facts live in `PRODUCT.md`. This brief covers what gets built and how it should work.

## 1. Who arrives, and what they need

| Visitor | Where they are | What they must be able to do |
|---|---|---|
| Hospital leader (volunteer services, patient experience, nursing) | At a desk or on a phone between meetings, sceptical, has seen many pitches | See that the program is real and low-burden, then start a conversation |
| Volunteer (mostly students, mostly on phones) | Between classes, curious, unsure what they would do in a patient's room | See what a shift is like, then sign up |
| Donor | Already persuaded | Give from any page in one tap |
| Chapter starter | Motivated, fewer in number | Find the chapter page and raise a hand |

The test for the home page: a hospital leader and a student each find their path within 5 seconds on a phone.

## 2. What the site must prove

- The mechanism is simple and human: the patient picks the song, the volunteer plays it and stays to listen.
- It works: 5 hospitals, 50 volunteers trained, 2,000+ hours with patients, plus the 2022 figures from the webinar.
- It is easy for a hospital to adopt: turnkey, white-label, low staff burden.

Headline for the home page (same in all three directions): **"Play their song. Stay for the story."**

## 3. Sitemap

- `/` Home
- `/hospitals` For Hospitals
- `/volunteer` Volunteer
- `/donate` Donate
- `/start-a-chapter` Start a Chapter
- `/about` About
- Footer on every page: EIN 84-3530929, the 501(c)(3) statement, the contact email, and links to all six pages.

Header on every page: logo, a Donate button that is always visible (on phones too, outside the menu), and the menu.

## 4. Home page, top to bottom

1. **Opening.** The headline (the only H1), one sentence explaining the program, then two equal choices: "Bring Healing Beats to your hospital" and "Volunteer at the bedside". Below them, one quiet link: "Want to start a chapter?"
2. **How a visit works.** Three steps (knock and ask, the patient picks a song, listen to the story) beside the video. The video loads only when play is pressed, and credits UnityPoint Health.
3. **Proof.** The three impact numbers and the "Stardust" patient story.
4. **Who it helps.** Patients, volunteers and nurses: three problems, one program.
5. **For hospitals.** Turnkey and white-label, what is included, and a link to the hospitals page.
6. **For volunteers.** The student's story, and a link to the volunteer page.
7. **Donate.** What a gift funds: volunteer training and expansion to new communities.
8. **Start a chapter.** A slim band, then the footer.

## 5. Inner pages

**For Hospitals**
- The problem it solves for the hospital.
- What is included.
- A timeline: recruit, train, launch, ongoing support.
- How white-labelling works.
- Proof, including the 2022 UnityPoint figures and the Henry Ford launch.
- A short FAQ: cost, staff time, infection control, which units, how volunteers are supervised. Answers are drafted from the brief.
- Inquiry form: name, title, hospital or health system, city/state, email, phone (optional), message.

**Volunteer**
- What a shift is like.
- The training topics.
- Who it is for.
- Where you can serve. Designed so it works without a fixed list: the form asks for your area.
- Interest form: name, email, city/state, school or affiliation (optional), preferred hospital or area, how you heard about us.
- A link: "No program near you? Start a chapter."

**Start a Chapter**
- What a chapter is, what support Healing Beats gives, and the steps.
- Interest form.

**Donate**
- The ask, what gifts fund, tax-deductible status and the EIN.
- A donation slot driven by one config value, ready for Zeffy, Givebutter, Donorbox or PayPal Giving Fund.

**About**
- The mission, Jake's founder story, how a visit works, and the three-problems framing.

## 6. How it behaves

- **Phone first.** Designed at 390px, then widened. No sideways scrolling, body text at least 16px, tap targets at least 44px.
- **The two choices** stack as two large, thumb-sized targets on a phone and sit side by side on a desktop.
- **Menu.** A full-height sheet that traps focus and closes with Escape.
- **Forms.** Full-width fields with the right keyboard for each, errors shown beside the field, and clear states for sending, sent, failed and offline.
- **Motion** is small and purposeful, and is switched off for visitors who ask for reduced motion.

## 7. Content approach

- The site reads as finished. Copy is written in full from the brief, including the 2023 webinar material.
- Items Jake still has to confirm get at most a small "to confirm" note. The full list is kept in `CONTENT-TODO.md`.
- Numbers, names and direct quotes come from the brief. The patient and volunteer testimonials are told as short stories around their exact quoted words.

## 8. Logo

One mark, used in all three directions: **a record with a speech-bubble tail**. It says music and conversation in one shape, works at favicon size, and prints in one colour. It appears in the header of each sketch. The wordmark is set in the chosen direction's display type.

## 9. The three directions

All three are drawn as the first phone screen in `docs/directions-phone.png`. The sketches themselves are in `.impeccable/mocks/decision/`.

### A. Title Strips
*From: jukebox selection panels and their printed title strips.*

- **Idea:** every choice on the site is a title strip you press to play. Hospitals are A1, volunteers are B2.
- **Look:** cherry red across the whole first screen, ivory strips, ink black, and one lit yellow for whatever is selected. Heavy condensed capitals for headlines, typewriter capitals on the strips.
- **Carries through:** the three visit steps, the FAQ and the form fields are all strips. "Stardust" appears as *now playing*. The strip you chose stays lit in the header as you move around.
- **On a desktop:** the two strips sit side by side as one wide panel, with the headline to their left.
- **Risk:** it can tip into diner nostalgia and look less serious to administrators if the decoration is not held back.

### B. Side A
*From: 45 rpm singles, their centre labels and liner notes.*

- **Idea:** each visit is a single: one song, one story. The record on the home page is the patient's real request.
- **Look:** deep aubergine, a black record with a marigold label, warm white type. Bold geometric lettering like the labels of the time.
- **Carries through:** the two paths are tracks A1 and A2. Long copy is set as liner notes. Each page is its own "side" with its own label colour. The record turns slowly as you scroll.
- **On a desktop:** the record sits large on the right at full size, with the headline and track list on the left.
- **Risk:** vinyl is the most expected picture of music and memory, so this is the familiar choice.

### C. The Program
*From: a mid-century magazine identity built around one hidden mark.*

- **Idea:** Healing Beats presented like a well-made magazine of the era the patients' songs come from.
- **Look:** white paper, black ink, and one strong spot colour per page (tangerine on Home). A slab-serif masthead, heavy rules, and cut-paper pictures: here, a record rising like a sun beside a door left ajar.
- **Carries through:** the logo is hidden once in every picture. The FAQ is set as an interview. Forms look like a magazine reply card. Each page gets its own spot colour.
- **On a desktop:** a strict two-column grid, with the picture and headline sharing the top.
- **Risk:** it is the closest of the three to the editorial look many sites land on, and it depends on the quality of the illustrations.

### How these were chosen
Impeccable's process had me list seven candidate worlds from the audience's own surroundings, then rolled dice to pick which one leads, so the result is not just my first instinct.

- **A** is the one the roll assigned.
- **B** is my own first choice.
- **C** came from Impeccable's catalogue and held up against A on credibility with administrators.
- Five other catalogue options were weighed and declined: an amber-lit hall, a sneaker-box wall, a character-grid scene, a green terminal screen, and flat colour tiles. None fit a hospital or a student, but each lent A one discipline, such as one colour flooding the whole first screen.
- A fourth, plainer option is always available: the standard clean nonprofit layout, done well (`.impeccable/mocks/decision/canon.html`).

## 10. Constraints

- Astro static site, plain CSS with custom properties, self-hosted fonts, GitHub Pages, Formspree.
- WCAG 2.2 AA. One H1 per page.
- No photos of identifiable patients. No gradient blobs, glass effects, emoji icons, repeated three-card grids, or centred-everything layouts.
- Lighthouse mobile targets: 95+ performance, 100 accessibility.

## 11. Open decisions

- Which direction: A, B, C, the plain standard, or a new hand.
- Whether the logo mark (record with a speech-bubble tail) is right.
- Donation provider, Formspree form ID, and when the custom domain moves.
