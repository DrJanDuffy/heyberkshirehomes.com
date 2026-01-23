# HeyBerkshireHomes.com

Las Vegas Real Estate Authority Hub for Dr. Jan Duffy

## Overview

A high-performance, SEO-optimized real estate website built with Next.js 15, featuring comprehensive community pages, market segment pages, and RealScout integration.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Inter (body), Manrope (headings)
- **Deployment:** Vercel-ready
- **Analytics:** Google Analytics 4 ready

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── communities/        # Community pages
│   │   ├── page.tsx        # Communities listing
│   │   └── [slug]/         # Individual community pages
│   ├── luxury-homes/       # Luxury homes page
│   ├── 55-plus-living/     # Active adult communities
│   ├── new-construction/   # New construction page
│   ├── investors/          # Investment properties
│   ├── sell-your-home/     # Seller services
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # Robots.txt
├── components/             # React components
│   ├── Header.tsx          # Site navigation
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section
│   ├── CTASection.tsx      # Call-to-action sections
│   ├── RealScoutWidget.tsx # RealScout integration
│   ├── SchemaMarkup.tsx    # Schema.org markup
│   └── ...                 # Other components
├── data/                   # Site data and configuration
│   ├── siteDetails.ts      # Site configuration
│   ├── communities.ts      # Community data
│   ├── menuItems.ts        # Navigation menu
│   └── footer.ts           # Footer data
└── lib/                    # Utilities
    └── schema.ts           # Schema markup generators
```

## Features

### ✅ Completed

- [x] Next.js 15 App Router setup
- [x] Tailwind CSS with Berkshire Hathaway brand colors
- [x] Responsive Header and Footer
- [x] Homepage with all sections (Hero, Trust Signals, Communities, Market Segments, RealScout, Testimonials)
- [x] Community pages (dynamic routing for all communities)
- [x] Market segment pages (Luxury, 55+, New Construction, Investors, Selling)
- [x] About page with Dr. Jan's bio
- [x] Contact page with form
- [x] Schema markup (Organization, LocalBusiness, Breadcrumbs, RealEstateListing)
- [x] SEO sitemap and robots.txt
- [x] RealScout widget component with CSP configuration
- [x] Mobile-first responsive design

### 🔄 To Do

- [ ] Blog/market updates structure (`/blog` or `/market-updates`)
- [ ] Divorce real estate page (`/divorce-real-estate`)
- [ ] Probate real estate page (`/probate-real-estate`)
- [ ] Contact form API endpoint
- [ ] Google Analytics 4 integration (add GA4 ID to `siteDetails.ts`)
- [ ] Image optimization (add actual images to `/public/images/`)
- [ ] Google Maps embed for contact page
- [ ] RealScout widget actual integration (currently placeholder)
- [ ] Privacy Policy and Terms of Service pages
- [ ] 404 and error pages customization

## Configuration

### Site Details

Edit `src/data/siteDetails.ts` to update:
- Contact information
- Agent details
- Social media links
- Google Analytics ID

### Communities

Edit `src/data/communities.ts` to add or modify community information.

### Brand Colors

Colors are defined in:
- `src/app/globals.css` (CSS variables)
- `tailwind.config.ts` (Tailwind theme)

Current brand colors:
- Primary: `#6B1D2D` (Burgundy/Maroon)
- Gold: `#D4AF37` (Accent)
- Warm Gray: `#E8E6E1` (Backgrounds)

## SEO Features

- Semantic HTML5 structure
- Schema.org markup on all pages
- XML sitemap generation
- robots.txt configuration
- Open Graph and Twitter Card meta tags
- Mobile-first responsive design
- Core Web Vitals optimization ready

## RealScout Integration

The RealScout widget component is set up with proper CSP headers in `next.config.mjs`. To complete integration:

1. Add your RealScout embed code/script
2. Update `RealScoutWidget.tsx` with actual widget initialization
3. Test widget functionality

## Images Needed

Add the following images to `/public/images/`:
- `hero-las-vegas.jpg` - Homepage hero image
- `dr-jan-duffy.jpg` - About page photo
- `community-placeholder.jpg` - Default community image
- `og-image.jpg` - Open Graph image (1200x675)
- `twitter-image.jpg` - Twitter Card image

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

No environment variables required for basic setup. Add if needed for:
- Google Analytics
- Contact form API
- RealScout API keys

## License

Private project for Dr. Jan Duffy / HeyBerkshireHomes.com

## Support

For questions or issues, contact the development team.
