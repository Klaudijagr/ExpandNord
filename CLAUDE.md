# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for ExpandNord, a business expansion consultancy connecting Baltic and Nordic markets. The site is built with v0.dev and automatically syncs with deployments.

**Key Technologies:**
- Next.js 15.2.4 with App Router
- React 19 with TypeScript
- Tailwind CSS for styling
- Shadcn/ui component library
- Lucide React icons
- pnpm as package manager

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Architecture

**Application Structure:**
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `components/ui/` - Shadcn/ui components
- `lib/` - Utility functions
- `hooks/` - Custom React hooks
- `public/` - Static assets

**Main Application File:**
- `app/page.tsx` - Single-page application with all sections (hero, services, process, contact)
- Multi-language support (English, Lithuanian, Norwegian)
- Animated components with Intersection Observer
- Form handling for contact submissions

**Key Features:**
- Responsive design with mobile-first approach
- Custom Baltic-themed divider components
- Animated text reveals and section transitions
- Multi-language translation system
- Contact form with validation
- Custom color scheme based on Nordic/Baltic branding

## Configuration

- **TypeScript**: Configured with strict mode, path aliases (`@/*`)
- **Tailwind**: Extended with custom colors, animations, and Shadcn/ui integration
- **Next.js**: Configured to ignore build errors and ESLint during builds (for v0.dev compatibility)
- **Shadcn/ui**: Configured with default style, neutral base color, CSS variables

## Development Notes

- This project is synced with v0.dev - changes may be overwritten by v0.dev deployments
- Modular architecture with separated concerns (components, hooks, translations, types)
- Multi-language support with type-safe translation system
- Performance optimized with React.memo and custom hooks
- Enhanced form handling with validation and state management
- Custom animations use Intersection Observer for optimal performance

## Architecture Improvements

**Component Structure:**
- `components/` - Modular, reusable React components
- `lib/translations/` - Type-safe translation system (core, services, additional)
- `hooks/` - Custom hooks for state management and performance
- `lib/types.ts` - Comprehensive TypeScript interfaces
- `lib/services.ts` - Service configuration
- `lib/performance.ts` - Performance monitoring utilities

**Key Features:**
- Separated translations by category for better maintainability
- Type-safe translation hooks with service-specific helpers
- Enhanced form handling with validation and async submission
- Performance optimizations with React.memo
- Custom intersection observer hooks for animations
- Scroll tracking and smooth navigation

## Styling Guidelines

- Primary colors: `#0A2D28` (dark green), `#6EA282` (medium green), `#9ED0A8` (light green)
- Uses gradient backgrounds and subtle animations
- Follows Nordic/Baltic design aesthetics with traditional pattern elements
- Responsive breakpoints follow Tailwind defaults (md: 768px, lg: 1024px)