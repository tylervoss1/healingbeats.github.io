---
name: Healing Beats Volunteers
description: A jukebox selection panel for a nonprofit whose volunteers play a patient's requested song and stay for the story.
colors:
  red: "#c5281c"
  red-deep: "#a41f15"
  maroon: "#5e0f0c"
  ink: "#1a1210"
  ivory: "#fff6e0"
  ivory-shade: "#f0e2bc"
  yellow: "#ffc531"
  yellow-deep: "#b8860b"
  yellow-hover: "#ffd255"
  ink-hover: "#2c211d"
  paper: "#fffdf6"
  paper-error: "#fff1ec"
  groove: "#33282a"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.75rem, 0.6rem + 15.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  headline-lg:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.1rem, 1.5rem + 7.6vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 4.4vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 1.1rem + 1.5vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.05
    fontVariation: "'wdth' 72"
  body-lg:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 800
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 75"
  strip:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.03em"
rounded:
  strip: "3px"
  radius: "8px"
  radius-lg: "14px"
  round: "50%"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4.5rem"
  s-9: "6.5rem"
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 2.5rem)"
  wrap: "74rem"
  measure: "34rem"
components:
  key:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.radius}"
    padding: "0.55rem 1.25rem 0.5rem"
    height: "3rem"
  key-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.radius}"
    padding: "0.55rem 1.25rem 0.5rem"
    height: "3rem"
  cap:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "3rem"
  cap-on-ivory:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.round}"
    size: "3rem"
  cap-lit:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "3rem"
  select-button:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    padding: "0.8rem 1rem 0.7rem 1.25rem"
    height: "4.25rem"
  select-button-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  strip:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    typography: "{typography.strip}"
    rounded: "{rounded.strip}"
    padding: "0.5rem 0 0.45rem"
  strip-band:
    backgroundColor: "{colors.red}"
    textColor: "{colors.ivory}"
    padding: "0.5rem 0.85rem 0.42rem"
  strip-band-lit:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    padding: "0.5rem 0.85rem 0.42rem"
  nav-link:
    textColor: "{colors.ivory}"
    rounded: "{rounded.radius}"
    padding: "0 0.85rem"
    height: "2.75rem"
  nav-link-hover:
    backgroundColor: "{colors.red-deep}"
  nav-link-current:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  field:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.radius}"
    padding: "0.7rem 0.85rem"
    height: "3.25rem"
---

# Design System: Healing Beats Volunteers

## Overview

**Creative North Star: "Title Strips"**

The site is the selection panel of a jukebox. Whole regions are flooded in one flat colour, the way a cabinet is enamelled. Things you can press are keys with a visible lip. Things that are printed (a song, an artist, a year) sit on ivory title strips with a red band. When something is chosen it lights yellow. A record and a tonearm appear once, where the film lives.

The system is loud in colour and plain in structure. Headings are heavy condensed capitals set tight and large. Reading text is an ordinary grotesque at a comfortable size, left aligned, in a narrow measure. Sections are separated by a change of flood, never by boxes, and lists are ruled rows, never cards.

The one photograph is treated as print: the still of a volunteer at a patient's door is multiplied onto red and covered with a dot screen, so it reads as red ink on the same panel. The site does not use a full-colour stock hero over icon cards.

**Key Characteristics:**
- Five flat surfaces (red, ink, maroon, ivory, yellow); each section takes exactly one, edge to edge.
- One lit colour per surface, used for what is pressable, current, or the stressed half of a headline.
- Heavy condensed uppercase headings (Archivo, width 62, weight 900) against a plain reading face.
- Pressable things look pressable: a solid lip under the key that shortens when pressed.
- Printed title strips in typewriter capitals carry songs, names and dates.
- Motion follows native scroll and state. Nothing takes over scrolling and nothing plays sound unasked.

## Colors

A jukebox cabinet: cherry red enamel, black, a darker red for trim, ivory card stock, and one yellow lamp.

### Primary
- **Cherry Red** (`red`): the default flood. Header, home hero, every inner page hero, the proof section, the band on a title strip, and the deck plinth. On ivory it is also the lit colour for stressed words and list marks.
- **Deep Red** (`red-deep`): hover fill for header links on red, and form error text on ivory. Not a surface.
- **Maroon** (`maroon`): the third dark surface (menu sheet, quiet closing rows, some inner sections), the mat behind a tilted strip, the tonearm pivot, and the lip under the deck and the scrolled header.

### Secondary
- **Lit Yellow** (`yellow`): the lamp. Primary keys, the current header link, a lit cap, the lit band on a strip, the open FAQ marker, the focus ring on dark surfaces, text selection, and the stressed half of a headline or a figure on red, ink and maroon. It is also one full surface, used for the closing donate band and for form sections.
- **Lamp Shade** (`yellow-deep`): only the lip under a yellow key or lit cap.

### Neutral
- **Ink** (`ink`): text on ivory and yellow, the dark surface (footer, now-playing band, some sections), the dark key, record vinyl, 2px field borders, the 3px rules on ivory and yellow.
- **Strip Ivory** (`ivory`): text on red, ink and maroon; the light surface; title strip stock; resting keys and caps on dark surfaces.
- **Ivory Shade** (`ivory-shade`): only the lip under an ivory key or cap.

Hairlines are not separate colours. Each surface defines its own rule as ivory at 28 to 38 percent on dark floods and ink at 22 to 30 percent on light ones.

### Named Rules
**The One Flood Rule.** Every section sets one of five surfaces (red, ink, maroon, ivory, yellow) and fills the full width with it, flat. The surface sets text, lit colour, hairline and focus ring together. Neighbouring sections change surface; nothing inside a section sits on a different coloured panel except a title strip, the deck, or a yellow confirmation block.

**The One Lamp Rule.** Each surface has a single lit colour: yellow on red, ink and maroon; red on ivory; ink on yellow. Use it for what can be pressed, what is current, and the stressed part of a headline or figure. Do not introduce a second accent.

**The Large Lamp Rule.** Yellow on cherry red is 3.6:1. It is allowed there only for type that counts as large under WCAG (bold at 18.66px and up, in practice the title size and above) and for icons. Small text on red is ivory (5.3:1). Yellow text of any size is fine on ink (11.7:1) and maroon (8.6:1).

## Typography

**Display Font:** Archivo variable, condensed to width 62 (with Helvetica Neue, Arial)
**Body Font:** Archivo variable at normal width (with Helvetica Neue, Arial)
**Label/Mono Font:** Courier Prime 700 (with Courier New), for printed strips only

**Character:** One variable family does both jobs by changing width. Squeezed to its narrowest and heaviest it is a poster face; at normal width and regular weight it is a quiet reading face. Courier Prime is the typewriter that fills in the title cards. Both are self-hosted; Archivo is preloaded.

### Hierarchy
- **Display** (900, width 62, `clamp(3.75rem, 0.6rem + 15.2vw, 6rem)`, line-height 0.88, uppercase): the home hero headline, and the run of proof figures on wide screens.
- **Headline large** (900, width 62, `clamp(3.1rem, 1.5rem + 7.6vw, 5rem)`, 0.92, uppercase): the H1 of every inner page, figure runs, and the H2 of a closing band.
- **Headline** (900, width 62, `clamp(2.5rem, 1.6rem + 4.4vw, 4rem)`, 0.92, uppercase): section H2. Balanced wrapping.
- **Title** (800, width 72, `clamp(1.45rem, 1.1rem + 1.5vw, 1.9rem)`, 1.05, sentence case): H3, step titles, FAQ questions, tick-list headings, pull quotes.
- **Body large** (400, 1.25rem, 1.45): the one-sentence lede under a heading. Max width 34rem.
- **Body** (400, 1.0625rem, 1.55): everything read at length. Max width 34rem; `text-wrap: pretty`.
- **Caption** (400, 0.875rem): captions, attributions, hints, legal lines. The smallest size in the ramp.
- **Label** (800, width 75, 1.0625rem, 0.06em tracking, uppercase): key labels. Header and footer links use the same idea at width 78, weight 700, 0.05em.
- **Strip** (Courier Prime 700, 0.875rem, 0.03em tracking, uppercase, 1.35): the printed lines on a title strip and single-line printed readouts.

### Named Rules
**The Three Widths Rule.** Width carries hierarchy. 62 is for uppercase headings and figures. 68 to 78 is for titles, key labels and navigation. 100 is for reading. Do not set running text condensed, and do not set a heading at normal width.

**The Typewriter Rule.** Courier Prime appears only where something is printed on a card: the lines of a title strip, the now-playing readout, a registration number. A strip's top line (a year, "A program offered by") is part of the card and stays with its band. Typewriter text never floats above a section heading as a label.

**The No Kicker Rule.** Headings stand alone. No small uppercase label, eyebrow or tag sits above an H1 or H2. If a section needs context, the lede under the heading gives it.

## Layout

Mobile first. One real breakpoint at 56.25em (900px): below it everything is a single column, above it sections split into two. Content sits in a centred wrap of at most 74rem with a fluid gutter (1rem to 2.5rem), but text inside it is left aligned and held to a 34rem measure.

Sections have 4.5rem of vertical padding on phones and 6.5rem on wide screens. Space comes from one scale (0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4.5, 6.5rem). A heading is followed by 2rem before its content; stacked paragraphs are 1rem apart; the two halves of a split are 3rem apart on phones and 4.5rem on wide screens.

Wide splits are uneven by default (0.8fr to 1.2fr), with the heading column sticky under the header while the longer column scrolls. An even or vertically centred split is the variant, used when a strip or the deck sits beside text. Splits swap sides from section to section.

Repeated items are ruled rows: a 3px rule in the text colour opens the group and a 1px hairline closes each row. On wide screens a row becomes three columns (name, problem, answer). Figures are set as a stacked headline, not as stat cards.

The header is sticky (3.75rem tall, 4.5rem from 900px) and always shows the Donate key. Below 900px navigation is a full-height maroon sheet with links at 2.6rem condensed capitals in 4.25rem rows. Anchors scroll with the header height plus 1rem of padding. Every tap target is at least 2.75rem (44px).

**The Left Edge Rule.** Headings, text and actions share the left edge of their column. Centring is reserved for objects (the deck in its column, a glyph inside a round key).

## Elevation & Depth

Surfaces are flat. Depth belongs to objects you can press or that sit on the panel, and it is built from two parts: a solid lip directly below the object in a deeper shade of its own colour, and a tight, soft ink shadow tucked under it. There are no floating cards and no blur or glass.

### Shadow Vocabulary
- **Key lip** (`box-shadow: 0 3px 0 var(--yellow-deep), 0 8px 14px -6px rgb(26 18 16 / 0.45)`): every yellow key. The ink key uses a black lip, ivory caps use the ivory shade.
- **Key pressed** (`transform: translateY(2px); box-shadow: 0 1px 0 var(--yellow-deep), 0 3px 6px -4px rgb(26 18 16 / 0.45)`): the key sinks and its lip shortens.
- **Large key lip** (`box-shadow: 0 4px 0 var(--ivory-shade), 0 14px 22px -12px rgb(26 18 16 / 0.6)`): the hero choice buttons; sinks 3px when pressed.
- **Lit halo** (`box-shadow: 0 3px 0 var(--yellow-deep), 0 0 0 5px rgb(255 197 49 / 0.25), 0 8px 12px -6px rgb(26 18 16 / 0.4)`): a cap that has lit.
- **Deck plinth** (`box-shadow: 0 6px 0 var(--maroon), 0 30px 40px -24px rgb(26 18 16 / 0.55)`): the record deck only.
- **Header on scroll** (`box-shadow: 0 1px 0 var(--maroon), 0 10px 24px -14px rgb(26 18 16 / 0.7)`): appears once the page has moved 8px.

### Named Rules
**The Key Lip Rule.** A lip means "this can be pressed". It goes straight down, never sideways, uses the deeper shade of the object's own colour, and shortens on press. Do not put a lip or a shadow on text blocks, sections or images.

## Shapes

Corners are small and mechanical. Keys, fields, the menu buttons and the mat behind a strip use 8px. The deck uses 14px. A title strip is nearly square (3px) because it is cut card. Round things are fully round: caps, the record, the play key, the FAQ marker. Text links take a 4px corner on their focus outline.

Borders are structural and few: 2px ink around a field, 2px ivory around the menu button, 3px rules to open a group or to bracket a strip top and bottom, 1px hairlines between rows.

Two things are allowed to sit off-square: a title strip used as an illustration is tilted about 2 degrees on its maroon mat, and the tonearm swings. Everything else is on the grid.

Gradients appear only as print or material: the dot screen and the fade that melts the photo into the red flood, the grooves on vinyl, the sheen on the record. They are never a background wash.

Icons come from one authored set (arrow, down, play, menu, close, mail, check): a 24px grid, 2.25px strokes, round caps and joins, drawn in the current text colour.

## Components

### Buttons
Tactile and unambiguous: they look like keys on a machine.
- **Shape:** gently squared (8px), at least 3rem tall, condensed uppercase label with 0.06em tracking, optional icon at 1.1em after the label.
- **Primary key:** yellow fill, ink label, key lip. Used on red, ink, maroon and ivory.
- **Ink key:** ink fill, ivory label, black lip. Used on yellow and on ivory when the action is the section's main one.
- **Hover / Active:** hover lightens the fill slightly; active sinks the key 2px and shortens the lip (0.18s ease-out).
- **Focus:** 3px outline offset 3px, yellow on dark surfaces and ink on light ones.
- **Sizes:** the header key is 2.75rem tall; form submit and the menu key are 3.5rem.
- **Quiet link:** weight 600 text with the arrow icon, 2.75rem tall; the arrow moves 4px right on hover.

### Select Button (signature)
The hero's audience choice. A full-width ivory key (at least 4.25rem tall, 8px corners, large lip) with a title-weight label at width 68 and an arrow in a 3rem slot. On hover, focus or press the key turns yellow, the arrow slides out, and a small 45 with a red label slides into the slot and spins. Stacked on phones, side by side from 900px.

### Caps
Round lettered keys, 3rem, weight 900. Ivory on dark surfaces, ink on ivory. A cap lights yellow with a soft halo when its step scrolls into view, one after another (90ms apart). Without JavaScript they are lit from the start.

### Title Strip (signature)
The printed card. Ivory stock, 3px corners, a 3px red rule top and bottom. A typewriter line, a red band holding the title in heavy condensed type (1.6rem, larger when used as an illustration), then a second typewriter line. The lit variant has ink rules and a yellow band with ink type; use it for the song that is playing or chosen. As an illustration it sits on a maroon mat with 0.5rem of margin and is tilted about 2 degrees.

### Record Deck (signature)
A square red plinth (14px corners) with a vinyl record, a yellow centre label, and an ivory tonearm with a yellow headshell. The record turns and the arm swings in with the deck's own scroll progress through the viewport; the page scrolls natively. A pill-shaped ink play control with a round yellow key sits bottom left. Pressing it replaces the deck with the film at 16:9. Nothing is requested from the video host before that press. With reduced motion the record and arm hold still.

### Step List
Numbered steps: a cap, a title, a short paragraph (max 30rem). Stacked by default. The across variant lays steps in equal columns from 900px, each under a 3px rule.

### Ruled Rows and FAQ
Groups open with a 3px rule and close each row with a hairline. Problem rows set the name in display type in the lit colour, then the problem, then the answer in bold with an arrow. FAQ questions are title type with a round 2.75rem ink marker showing a plus; open, the marker turns yellow and shows a minus. The first question starts open.

### Inputs / Fields
- **Style:** label in bold above the field, optional hint in caption size. Field is at least 3.25rem tall, 8px corners, 2px ink border, a pale paper fill, body-size text, red caret.
- **Focus:** a 4px yellow ring around the field in place of the outline.
- **Error:** red border, a faint red-tinted fill, and a bold deep red message under the field.
- **Sent:** the form is replaced by a yellow block ruled top and bottom in ink, with a round ink mark holding a yellow check.
- Fields are one column, two from 40em, with text areas spanning both. Forms sit on the yellow surface beside a sticky heading.

### Navigation
- **Header:** sticky, red, logo left, links right in condensed uppercase (width 78, weight 700), then the Donate key. Hover fills a link deep red; the current page is a yellow tab with ink text.
- **Menu sheet:** below 900px a 2.75rem bordered button opens a native dialog on maroon. Links are display type in hairline rows; the current page is yellow. The sheet wipes down and rows rise in sequence.
- **Footer:** ink. Logo and mission, two columns of uppercase links that turn yellow on hover, contact, then a hairline and caption-size legal lines.

### Page Hero and Closing Band
Inner pages open on red with one H1 (max 16ch, the stressed words in yellow), one lede, and at most one key. Pages close with a band on yellow, maroon or ink: a large headline on the left, one sentence and one key on the right, bottom aligned.

### Halftone Photo
A photograph is placed on red, blended with `multiply`, given a little extra contrast, and overlaid with a 5 to 6px maroon dot screen and a fade into solid red on the side where text sits. Credit the source in caption-size text.

### Motion
Easing is one curve, `cubic-bezier(0.16, 1, 0.3, 1)`. Content rises 1.25rem and fades in as it enters view (0.7 to 0.9s, 90ms stagger); hero lines rise 1.5rem at load, 100ms apart. Entrance, scroll-linked and looping motion runs only when the visitor has not asked for reduced motion, and content is fully visible without JavaScript. Scroll position is read, never controlled. Under `prefers-reduced-motion: reduce`, one global rule in `global.css` makes every transition and animation instant, so states still change but nothing travels.

## Do's and Don'ts

### Do:
- **Do** give every section one of the five surfaces and let it run edge to edge. Change surface between neighbours.
- **Do** use the surface's lit colour for the stressed half of a headline, as in "Three problems. One program."
- **Do** make every action a key with a lip, or a quiet link with the arrow. Keep one main key per section.
- **Do** keep tap targets at 2.75rem (44px) or more, reading text at 1.0625rem, and contrast at WCAG 2.2 AA.
- **Do** set songs, names and dates on a title strip when they are the subject, with the lit variant for the one that is playing.
- **Do** separate repeated items with a 3px opening rule and hairlines.
- **Do** gate entrance, scroll-linked and looping motion behind `prefers-reduced-motion: no-preference`, and leave scrolling to the browser.
- **Do** draw new icons in the authored set's style: 24px grid, 2.25px round strokes.

### Don't:
- **Don't** put a kicker, eyebrow or small label above a heading. A strip's own top line is not a kicker and stays.
- **Don't** set small yellow text on cherry red. Below title size, text on red is ivory.
- **Don't** add a second accent colour or a sixth surface.
- **Don't** use gradient blobs, colour washes or glass. Gradients are only the dot screen, the photo's melt into red, and vinyl.
- **Don't** use emoji or an icon library. Icons come from the authored set.
- **Don't** lay content out as a repeated grid of three cards, or centre every block.
- **Don't** set Courier Prime anywhere except printed strips and one-line printed readouts.
- **Don't** put a lip or shadow on anything that cannot be pressed, apart from the deck and the scrolled header.
- **Don't** hijack scroll, autoplay sound, or load the video before the visitor presses play.
- **Don't** show a photo in full colour. Photographs are printed in red ink with the dot screen.
