# Jayesh Thar — Portfolio (React + Vite)

## 1. File structure — what goes where

```
react-portfolio/
├─ public/                     ← static files, served as-is at the site root
│  ├─ images/
│  │  ├─ hero-portrait.jpg     → available at  /images/hero-portrait.jpg
│  │  ├─ profile-side.jpg      → available at  /images/profile-side.jpg
│  │  └─ triple-banner.jpg     → available at  /images/triple-banner.jpg
│  └─ resume.pdf                → available at  /resume.pdf
├─ src/
│  ├─ components/
│  │  ├─ Nav.jsx
│  │  ├─ Hero.jsx
│  │  ├─ StarField.jsx          ← canvas star field used inside Hero
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Work.jsx
│  │  ├─ Education.jsx
│  │  ├─ Contact.jsx            ← includes the footer
│  │  └─ ResumeModal.jsx
│  ├─ hooks/
│  │  ├─ useLenis.js            ← smooth-scroll setup, synced to GSAP ticker
│  │  └─ useReveal.js           ← scroll-triggered `.reveal` / `.proj` animations
│  ├─ App.jsx                   ← assembles all sections, owns resume-modal state
│  ├─ main.jsx                  ← React root
│  └─ index.css                 ← all design tokens + component styles
├─ index.html                   ← Vite entry (fonts loaded here)
├─ package.json
├─ vite.config.js
└─ .gitignore
```

### Why images + the PDF live in `public/`, not `src/`
Anything in `public/` is copied to the build output **unchanged**, at the
same path. So `public/images/hero-portrait.jpg` becomes
`https://yourdomain.com/images/hero-portrait.jpg` after deploy — no import,
no bundler processing, no base64. That's exactly right for large photos and
the resume PDF: importing them from `src/` would base64-inline them into
your JS bundle and bloat it. Reference them with a **root-relative path**
(`/images/...`, `/resume.pdf`) exactly as the components already do.

If you ever swap the resume file, just replace `public/resume.pdf` — keep
the filename the same and nothing else needs to change.

## 2. Local setup

```bash
cd react-portfolio
npm install
npm run dev        # http://localhost:5173
```

Build for production:

```bash
npm run build       # outputs to /dist
npm run preview      # sanity-check the production build locally
```

## 3. Deploying (Vercel — recommended, free, zero config for Vite)

1. Push this folder to a GitHub repo (e.g. `jayesh-thar/portfolio`).
2. Go to vercel.com → **Add New Project** → import that repo.
3. Vercel auto-detects Vite. Leave build command as `npm run build`,
   output directory as `dist`. Click **Deploy**.
4. You'll get a live URL like `portfolio-jayesh.vercel.app` — confirm the
   site works there before touching DNS.

## 4. Connecting your Namecheap domain (jayeshthar.me) as a subdomain

Since `jayeshthar.me` itself might already be pointed elsewhere (or you
want to keep the root domain free for something else), the clean move is
to put the portfolio on a subdomain, e.g. **`portfolio.jayeshthar.me`** or
`work.jayeshthar.me`.

**In Vercel:**
1. Open your project → **Settings → Domains**.
2. Type `portfolio.jayeshthar.me` → **Add**.
3. Vercel will show you a CNAME record to create, something like:
   - Type: `CNAME`
   - Host: `portfolio`
   - Value: `cname.vercel-dns.com`

**In Namecheap:**
1. Log in → **Domain List** → click **Manage** next to `jayeshthar.me`.
2. Go to the **Advanced DNS** tab.
3. Click **Add New Record**:
   - Type: `CNAME Record`
   - Host: `portfolio`
   - Value: `cname.vercel-dns.com` (use exactly what Vercel showed you)
   - TTL: Automatic
4. Save. DNS usually propagates in a few minutes, sometimes up to a few
   hours.
5. Back in Vercel, the domain status will flip to **Valid** once it
   detects the record — it also auto-issues the HTTPS certificate, no
   extra step needed.

If you'd rather use the **root domain** (`jayeshthar.me`) for the
portfolio instead of a subdomain, the difference is just the DNS record
type — Namecheap requires an `A record` pointing at Vercel's IP
(`76.76.21.21`) plus a `CNAME` for `www`, both of which Vercel's Domains
screen will show you the exact values for once you add the root domain
there.

## 5. Notes specific to this build

- **Fonts** (Clash Display, General Sans, JetBrains Mono) load from
  Fontshare/Google Fonts `<link>` tags in `index.html` — no local font
  files needed, but you can self-host later for slightly faster first
  paint if you care to.
- **GSAP + ScrollTrigger + Lenis** are real npm dependencies here (not
  CDN `<script>` tags like the plain-HTML version), imported directly in
  `useLenis.js`, `useReveal.js`, and `Hero.jsx`.
- Nav links and the resume button both go through the same click handler
  in `App.jsx`, so every `#anchor` link on the page animates via Lenis
  instead of jumping instantly.
