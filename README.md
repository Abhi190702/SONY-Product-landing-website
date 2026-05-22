# Sony WH-1000XM6 Product Landing Website

A premium, production-ready product landing page inspired by the Sony WH-1000XM6 experience. The site uses a clean editorial layout, high-quality product media, autoplay video sections, and a smooth canvas image-sequence animation built from frame-by-frame assets.

This project is built for portfolio presentation, GitHub hosting, and Vercel deployment.

## GitHub Description

Premium Sony WH-1000XM6 product landing page built with Next.js, TypeScript, Tailwind CSS, GSAP, Lenis, video sections, and smooth canvas image-sequence animation.

## Features

- Minimal, professional Sony-inspired product page design
- Responsive hero section with high-quality headphone imagery
- Smooth navbar with mobile drawer navigation
- Product highlight sections based on WH-1000XM6 feature messaging
- Three local video showcase sections
- Scroll-driven headphone engineering animation using 240 canvas frames
- Technical specifications section
- Final CTA section with official Sony India product link
- Vercel-ready static asset caching for animation frames
- Fully responsive desktop, tablet, and mobile layout

## Tech Stack

- Next.js 14 App Router
- React
- TypeScript
- Tailwind CSS v3
- GSAP ScrollTrigger
- Lenis smooth scrolling
- HTML5 Canvas API
- Local image and video assets

## Project Structure

```text
.
├── public/
│   ├── frames/
│   │   ├── headphone/
│   │   └── speaker/
│   └── media/
│       ├── images/
│       └── videos/
├── src/
│   └── app/
│       ├── components/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Run the production preview:

```bash
npm run start
```

## Deployment

This project is ready for Vercel.

```bash
npm run build
vercel --prod
```

The `vercel.json` file adds long-term cache headers for frame images:

```json
{
  "source": "/frames/(.*)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```

## Assets

The site expects the animation frames and product media at these paths:

```text
public/frames/headphone/ezgif-frame-001.jpg ... ezgif-frame-240.jpg
public/frames/speaker/ezgif-frame-001.jpg ... ezgif-frame-240.jpg
public/media/images/wh-1000xm6-hero.jpeg
public/media/videos/
```

Video files currently used:

```text
WH-1000XM6_Overview_NoiseCancelling_1920x1080.mp4
WH-1000XM6_Overview_Design_1920x1080.mp4
WH-1000XM6_Overview_CallQuality_1920x1080.mp4
```

## Main Sections

- Hero: premium product introduction with image and key stats
- Highlights: noise cancellation, sound quality, call quality, comfort, and connectivity
- Videos: immersive product feature videos
- Engineering: scroll-controlled canvas animation
- Specs: technical specifications
- CTA: final purchase-focused section
- Footer: product and support links

## Suggested GitHub Topics

```text
nextjs
react
typescript
tailwindcss
gsap
lenis
canvas-animation
landing-page
product-page
headphones
sony-wh1000xm6
```

## Disclaimer

This is an independent portfolio/demo project inspired by the Sony WH-1000XM6 product page. It is not an official Sony website and is not affiliated with, endorsed by, or sponsored by Sony Corporation. Product names, trademarks, and media belong to their respective owners.

## License

This project is intended for educational and portfolio use.
