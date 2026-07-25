<div align="center">

# Jayesh Thar

**Software Development Engineer — Full-Stack**

A portfolio built the way I build everything else: fast, deliberate, secured by default.

[jayeshthar.me](https://jayeshthar.me) · [Resume](https://jayeshthar.me) · [LinkedIn](https://linkedin.com/in/jayesh-thar)

</div>

---

## What this is

Not a template with my name swapped in. Every pixel here — the star-field
canvas, the crop on the hero photo, the sparkle motif standing in for
project numbers — was a decision, not a default. If you're reading this
repo instead of the live site, you're the kind of person who checks the
`git log` before trusting the demo. Respect. Here's what's under the hood.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React + Vite | fast HMR, zero-config build |
| Motion | GSAP + ScrollTrigger | scroll-tied reveals, precise easing control |
| Scroll feel | Lenis | inertia-based smooth scroll, synced to GSAP's ticker |
| Styling | Hand-written CSS, design tokens in `:root` | no utility-class soup, full control over the type scale |
| Hosting | Vercel | auto-deploys on push, zero DNS pain |

## Structure

```
public/                  → served as-is, referenced by root-relative path
  images/                   (hero, about, contact banner)
  resume.pdf                (swap this file, keep the name, done)
src/
  components/            → one file per section, no god-component
  hooks/
    useLenis.js             smooth-scroll instance, exposed for scroll-to & stop/start
    useReveal.js            scroll-triggered `.reveal` / `.proj` animations
  App.jsx                 → composition root, owns the resume-modal state
  index.css               → design tokens + every component's styles
```

Images and the PDF live in `public/`, not `src/` — anything imported from
`src/` gets bundled (and base64-inlined if it's an asset), which is the
wrong move for a 700KB PDF. `public/` just gets copied to the output,
untouched, at the same path.

## Design notes

A few rules I held myself to, mostly so I wouldn't drown the content in
motion:

- **Every animation earns its place.** No animation exists just because
  GSAP was already imported. Reveals mark content entering view; the
  parallax on hero/contact images sells depth; nothing spins for the sake
  of spinning.
- **One signature, repeated.** The four-point sparkle from the banner
  photos shows up as the logo mark, the section markers, and the project
  bullets — a visual thread, not a coincidence.
- **Dark isn't the whole story.** The About and Education sections flip
  to a lighter "paper" surface — same palette family, different weight —
  so the page breathes instead of staying uniformly moody for six
  sections straight.

## Run it locally

```bash
npm install
npm run dev        # localhost:5173
npm run build       # → /dist
npm run preview      # sanity-check the build
```

## Deploy

Push to `main`, import the repo on [Vercel](https://vercel.com/new),
leave the Vite defaults (`npm run build`, output `dist`). Point your
domain's `A` record at Vercel's IP and the `www` `CNAME` at
`cname.vercel-dns.com`, and you're live — no CI config, no Dockerfile,
no drama.

---

<div align="center">

Built by <a href="https://jayeshthar.me">Jayesh Thar</a> · final-year CE student, Marwadi University

</div>