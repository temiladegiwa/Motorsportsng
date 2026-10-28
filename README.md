# MotorSports NG (Next.js)

## Run on your computer
1. Install Node.js 18 or newer (nodejs.org).
2. In this folder run: `npm install` then `npm run dev`
3. Open http://localhost:3000

## Deploy
1. Put this folder in a new GitHub repository.
2. In Vercel choose "Add New Project", pick the repository, and press Deploy. No settings needed.

## Where to edit things
- Events, standings, photos, podcast links: `lib/data.js` (podcast links are in the `POD` line at the bottom)
- Styles: `app/globals.css`
- Pages: `app/` folder; shared pieces: `components/`
- Images: `public/`

## Next step: real logins
Create a Supabase project, then add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel's Environment Variables. Profiles are saved on the device only until that is wired up.
