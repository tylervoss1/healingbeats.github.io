# Healing Beats Brand Lab

A shared workspace for trying color, type and logo combinations for Healing Beats. Anyone with the link can use it. No accounts needed.

- **GitHub Pages** hosts the page (free), as part of the Healing Beats site.
- **Supabase** stores the shared board and uploaded logos (free tier).

Without Supabase keys, the page still works, but saves only in each person's browser.

## Setup (about 10 minutes)

### 1. Create the Supabase project
1. Sign up at https://supabase.com (free) and click **New project**. Any name works, e.g. `healing-beats-lab`.
2. When it finishes, open **SQL Editor → New query**, paste everything in `supabase-setup.sql`, and click **Run**.
3. Open **Project Settings → API** and copy two values:
   - **Project URL** (looks like `https://abcd1234.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### 2. Add the keys to the page
Open `public/brand-lab/index.html` (on GitHub: open the file, then the pencil icon to edit), find this line near the top, and paste your values in:

```js
window.HB_CONFIG={SUPABASE_URL:'',SUPABASE_ANON_KEY:''};
```

The anon key is meant to be public. It is safe to put in the page.

### 3. Publish it
The page is already in the repo and already published with the Healing Beats site. Do **not** change the Pages settings: the site is deployed by GitHub Actions, and switching Pages to "Deploy from a branch" would take the main site down.

1. Commit your edit to the branch `claude/wizardly-thompson-bp2q41` (or `main`, once that exists).
2. After about a minute the lab is live, with your keys, at:
   `https://tylervoss1.github.io/healingbeats.github.io/brand-lab/`

Files: the page is `public/brand-lab/index.html` (published). This README and `supabase-setup.sql` live in `brand-lab/` and are not published.

Send that link to the team. Each person types their name in the top bar so their saves and likes are labeled.

## Good to know
- **Anyone with the link can add, edit or delete combos and logos.** That's fine for a small team, but don't post the link publicly.
- **The repository is public.** Once the keys are in the page, anyone who reads the repo can find the board and add, change or delete combos, or upload images to the logos bucket. That is fine for a short team exercise. When the exercise is done, pause or delete the Supabase project.
- Search engines are told to skip the page (`noindex`), and the main site does not link to it.
- Logos: SVG or PNG under 5 MB. Logo files can't be deleted from inside the page. To remove one, delete its row in Supabase's **Table Editor → logos**.
- Free Supabase projects pause after about a week with no activity. If the board stops loading, open the Supabase dashboard and click **Restore**.
