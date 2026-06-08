# AccuMaxio – Practice Management System 🚀

A **premium, modern practice management platform** built with Next.js 16, featuring intelligent automation for accounting, legal, and professional services firms. Inspired by industry leaders like TaxDome, KarbonHQ, Ignition, and Canopy.

## ✨ Premium Features

- 🌙 **Full Dark Mode** with smooth theme transitions
- 💎 **Premium Design System** with gradients, glassmorphism, and shadows
- 🎨 **Sophisticated Animations** using Framer Motion
- 📊 **Social Proof Sections** (Stats, Testimonials, Trust Badges)
- ❓ **FAQ Accordion** for better conversion
- 📱 **Fully Responsive** mobile-first design
- ♿ **WCAG Compliant** accessibility
- ⚡ **Optimized Performance** with lazy loading
- 🎯 **Premium UI Components** with hover effects and micro-interactions

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom component library (shadcn-inspired)
- **Icons:** Lucide React (500+ icons)
- **Animations:** Framer Motion 12
- **Typography:** Inter font family (next/font)
- **Forms:** React Hook Form + Zod validation
- **Theme:** Custom dark/light mode system
- **TypeScript:** Full type safety

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install & Run

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    page.tsx          # Homepage
    layout.tsx        # Root layout (Header, Footer)
    globals.css       # Design system (colors, theme)
    features/         # Features page
    pricing/          # Pricing page
    about/            # About page
    contact/          # Contact/Demo page
    resources/        # Resources/Blog page
  components/
    ui/               # Button, Card, Badge, Input
    layout/           # Header, Footer
    sections/         # Hero, Features, Testimonials, etc.
  lib/
    utils.ts          # cn() and utilities
```

## Pages

| Page       | Route       | Status        |
|-----------|-------------|---------------|
| Homepage  | `/`         | ✅ Complete    |
| Features  | `/features`  | Placeholder   |
| Pricing   | `/pricing`   | Placeholder   |
| About     | `/about`     | Placeholder   |
| Contact   | `/contact`   | Placeholder   |
| Resources | `/resources` | Placeholder   |

## Design System

- **Primary:** `#2563eb` (blue)
- **Neutrals:** Gray scale from 50–900
- **Semantic:** Success, warning, error
- **Typography:** Inter, bold headings, clear hierarchy
- **Spacing:** Container `max-w-7xl`, section `py-16 md:py-24`

## 📚 Documentation

- **[ENHANCEMENTS.md](./ENHANCEMENTS.md)** - Complete list of v2.0 improvements and implementation details
- **[DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md)** - Quick reference for using the design system
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Pre-launch checklist and deployment guide
- **[IMPROVEMENTS.md](./IMPROVEMENTS.md)** - Original improvement suggestions (reference)

## 🎯 Next Steps

### Phase 2 - Content & Conversion (Weeks 1-2)
1. Replace dashboard mockup with real product screenshots
2. Add customer testimonials with photos and logos
3. Build interactive pricing page with calculator
4. Create 3-5 detailed case studies
5. Implement contact form with validation

### Phase 3 - Features & Pages (Weeks 3-4)
1. Full **Features** page with category tabs
2. Enhanced **Pricing** with comparison table
3. **About** page with team and mission
4. **Resources** section with blog articles
5. Security & compliance page

### Phase 4 - Optimization (Month 2)
1. SEO implementation (structured data, sitemap)
2. Analytics integration
3. Performance optimization
4. A/B testing setup
5. Marketing automation

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm run start        # Run production build

# Code Quality
npm run lint         # Lint code
```

## 🎓 Learning Resources

- **Next.js 16**: https://nextjs.org/docs
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/

## 👥 Contributing

This is a private project. For team members:

1. Create feature branch from `main`
2. Make changes following design system
3. Test thoroughly (light/dark mode, mobile, accessibility)
4. Submit PR with clear description
5. Wait for review and approval

## 📝 License

Private / All rights reserved © 2026 AccuMaxio
