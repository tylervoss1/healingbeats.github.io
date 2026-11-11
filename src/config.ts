/**
 * Site settings. Everything a non-developer is likely to change lives here.
 */

export const SITE = {
  name: 'Healing Beats Volunteers',
  shortName: 'Healing Beats',
  mission: 'Creating humanizing healthcare experiences through music and companionship.',
  email: 'jake.nitzkin@healingbeatsvolunteers.org',
  ein: '84-3530929',
  founder: 'Jake Nitzkin, RN',
  /** UnityPoint Health's 76-second film featuring Jake. */
  youtubeId: 'eiKWuePIR6Q',
};

/**
 * Hero video (optional). The home page shows a photo behind the headline.
 * To play the film there instead, put an MP4 in the `public` folder and set
 * its path here, e.g. '/hero.mp4'. It plays muted and looping under the same
 * red treatment; the photo stays as the fallback. Keep the file short and
 * small (10 to 20 seconds, under 3 MB).
 */
export const HERO_VIDEO = '';

/**
 * Search engines. Leave false while the copy still has items for Jake to
 * confirm (see CONTENT-TODO.md). Set to true at launch.
 */
export const ALLOW_INDEXING = false;

/**
 * Forms. All three forms post to this one endpoint.
 * Create a form at https://formspree.io and paste its URL here,
 * e.g. 'https://formspree.io/f/abcdwxyz'. While this is empty the forms
 * show a notice instead of sending.
 */
export const FORM_ENDPOINT = '';

/**
 * Donations. Paste the embed or donate-page URL from the provider you pick
 * and set `provider` to its name. While `url` is empty the Donate page shows
 * a "by email for now" panel.
 *
 * Nonprofit-friendly options to choose from:
 *   - Zeffy            (no platform fees; donors may add a tip)
 *   - Givebutter       (free with optional donor tips; good event tools)
 *   - Donorbox         (recurring gifts; platform fee on the free plan)
 *   - PayPal Giving Fund (no fees; payout is monthly, not instant)
 */
export const DONATION_EMBED: { provider: string; url: string } = {
  provider: '',
  url: '',
};
