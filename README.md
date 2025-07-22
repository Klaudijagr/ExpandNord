# ExpandNord Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/klaudijas-projects-2e61cdde/v0-expand-nord-website)

## Overview

ExpandNord is a business expansion consultancy website that bridges Baltic and Nordic markets. This modern, multi-language single-page application showcases services for companies looking to expand between the Baltic states (Estonia, Latvia, Lithuania) and Nordic countries (Denmark, Finland, Iceland, Norway, Sweden).

## Key Features

- **Multi-language Support**: Full translations in English, Lithuanian, and Norwegian
- **Interactive Sections**: Hero, Services, Process, and Contact sections with smooth scrolling
- **Animated Components**: Typewriter effects, scroll-triggered animations, and transitions
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Performance Optimized**: Lazy loading, memoization, and efficient re-rendering
- **Baltic-Nordic Theme**: Custom design elements reflecting the cross-regional focus

## Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript with React 19
- **Styling**: Tailwind CSS with custom Nordic/Baltic color palette
- **Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Services Offered

1. **Market Research & Analysis**: Comprehensive market intelligence and competitor analysis
2. **Strategic Partnerships**: Business matching and partnership facilitation
3. **Legal & Compliance**: Regulatory guidance and compliance support
4. **Market Entry Strategy**: Customized expansion roadmaps and implementation
5. **Marketing & PR**: Localized marketing strategies and brand positioning
6. **Business Establishment**: Company formation and operational setup
7. **Funding & Financing**: Access to grants, investors, and financial planning
8. **Business Networking**: Industry connections and networking events

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Project Structure

```
ExpandNord/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main single-page application
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   └── ...               # Custom components (Header, Footer, sections)
├── lib/                   # Utilities and configurations
│   ├── translations/     # Multi-language translations
│   ├── types.ts         # TypeScript interfaces
│   ├── services.ts      # Service configurations
│   └── utils.ts         # Helper functions
├── hooks/                 # Custom React hooks
└── public/               # Static assets
```

## Key Components

- **Header**: Sticky navigation with language switcher
- **HeroSection**: Animated landing area with value proposition
- **ServicesSection**: Grid display of all services with icons
- **ProcessSection**: 4-step client engagement visualization
- **ContactSection**: Interactive form with validation
- **BalticDivider**: Custom SVG divider with traditional patterns
- **FloatingCTA**: Persistent call-to-action button

## Deployment

The project is deployed on Vercel for optimal performance and scalability.

## Design System

- **Primary Colors**: 
  - Dark Green: `#0A2D28`
  - Medium Green: `#6EA282`
  - Light Green: `#9ED0A8`
- **Typography**: System fonts with responsive sizing
- **Animations**: Smooth transitions and scroll-triggered effects
- **Patterns**: Baltic-inspired decorative elements

## Performance Features

- React.memo for component optimization
- Intersection Observer for lazy animations
- Debounced scroll tracking
- Efficient translation system with memoization
- Optimized image loading and rendering

## License

This project is proprietary software. All rights reserved.