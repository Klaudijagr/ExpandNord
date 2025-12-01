# ExpandNord

Business expansion consultancy connecting Baltic and Nordic markets.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Linting**: Biome
- **Forms**: Web3Forms

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- bun, pnpm, or npm

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
bun run build
bun start
```

### Linting & Formatting

```bash
bun run lint      # Check for issues
bun run format    # Format code
bun run check     # Fix all issues
bun run typecheck # TypeScript check
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # Base UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and configurations
│   └── translations/      # Multi-language support
└── public/               # Static assets
```

## Features

- Multi-language support (English, Lithuanian, Norwegian)
- Responsive design
- Contact form via Web3Forms
- Animated sections with Intersection Observer
- Language preference persistence
- React Compiler for automatic memoization
- PWA support

## Deployment

Deployed on Vercel at [expandnord.com](https://expandnord.com). Push to `main` to trigger automatic deployment.

## License

All rights reserved. Copyright ExpandNord.
