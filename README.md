# Cluck & Stack — Next.js Site

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — Vercel auto-detects Next.js, no config needed

## Project Structure

```
cluck-stack/
├── app/
│   ├── layout.tsx       # Root layout, fonts, CartProvider
│   ├── page.tsx         # Main page — assembles all sections
│   └── globals.css      # All styles
├── components/
│   ├── Nav.tsx          # Sticky nav
│   ├── Hero.tsx         # Hero section with mascot
│   ├── Ticker.tsx       # Scrolling marquee
│   ├── Combos.tsx       # Combo deals grid
│   ├── UpsellStrip.tsx  # Side upgrade selector
│   ├── MenuSection.tsx  # Tabbed full menu
│   ├── LTO.tsx          # Limited time offer + countdown
│   ├── CtaBand.tsx      # CTA band before visit
│   ├── Visit.tsx        # Hours, location, ordering
│   ├── Footer.tsx       # Footer
│   └── CartFloat.tsx    # Floating cart panel
└── lib/
    └── CartContext.tsx  # Global cart state (React Context)
```

## Customizing Content

- **Menu items** — edit the arrays in `components/MenuSection.tsx`
- **Combos** — edit `components/Combos.tsx`
- **Hours/Location** — edit `components/Visit.tsx`
- **LTO item** — edit `components/LTO.tsx`
- **Colors** — edit CSS variables at top of `app/globals.css`
- **Images** — all served from R2 CDN, update the `BASE` URL constants in each component
