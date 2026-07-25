# THE SOUND DOCKK — Studio Website

Marketing website for **THE SOUND DOCKK**, a boutique sound mixing, mastering
and vocal recording studio in Jubilee Hills, Hyderabad.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and
**Tailwind v4**, with a hand-written studio-aesthetic design system in
`src/app/globals.css`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
  app/
    layout.tsx      # fonts (Space Grotesk / JetBrains Mono / Anton) + metadata
    page.tsx        # page composition
    globals.css     # full design system + responsive rules
  components/
    BackgroundWave.tsx  # ambient animated waveform canvas (client)
    Nav.tsx             # sticky nav + mobile drawer (client)
    Hero.tsx            # hero + live VU meter strip (client)
    Marquee.tsx         # scrolling service marquee
    Services.tsx        # service cards
    Process.tsx         # signal-flow steps
    About.tsx           # studio copy + animated fader bank (client)
    Contact.tsx         # contact details + Google Maps embed
    Footer.tsx          # footer with social links
    Reveal.tsx          # scroll-in animation wrapper (client)
```

## Studio details

- **Address:** 2nd Floor, Vijay Sri Villa, 604B, Road No. 32, Aditya Enclave,
  Jubilee Hills, Hyderabad, Telangana 500033
- **Phone / WhatsApp:** +91 70138 98466
- **Instagram:** [@thesounddockk](https://www.instagram.com/thesounddockk/)

> Contact copy and service descriptions are drafted from public listings.
> Confirm final wording, pricing and any details from the client brief before
> going live.
