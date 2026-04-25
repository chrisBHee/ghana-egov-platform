# GovData Ghana — E-Government Data Centralization Platform

A full-stack e-government data centralization platform for Ghana, built with Next.js 16, TypeScript, and Tailwind CSS. The platform provides centralized management of government payments, agency digitalization tracking, AI-powered analytics, and data center infrastructure monitoring.

## Features

### Dashboard
- KPI cards showing key metrics (agencies, adoption rate, transactions, uptime)
- E-government adoption rate chart (15% in 2020 → 75% in 2024)
- Real-time activity feed

### Payment Systems
- Government payment management (salaries, pensions, grants, contracts)
- Filterable transaction records table
- Monthly payment volume visualization
- Payment status tracking and summary statistics

### Agency Management
- Government agency digitalization progress tracking
- Agency cards with status indicators and progress bars
- Filterable grid view (active, transitioning, planned)
- Inter-agency data connection tracking

### AI Analytics
- AI-generated insight cards with confidence scores
- Policy outcome prediction charts (actual vs. predicted)
- Resource allocation optimization visualization
- Machine learning model deployment tracking

### Data Center Infrastructure
- African data center network monitoring
- Infrastructure timeline with project milestones
- Capacity, cost, and tier tracking
- AfCFTA infrastructure gap analysis (700 facilities needed)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the platform.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Dashboard
│   ├── payments/           # Payment management
│   ├── agencies/           # Agency tracking
│   ├── analytics/          # AI analytics
│   └── infrastructure/     # Data center monitoring
├── components/
│   ├── layout/             # Sidebar, Header
│   ├── dashboard/          # Dashboard widgets
│   ├── payments/           # Payment components
│   ├── agencies/           # Agency components
│   ├── analytics/          # Analytics components
│   └── infrastructure/     # Infrastructure components
├── lib/
│   ├── data/               # Mock data modules
│   └── utils.ts            # Utility functions
└── types/                  # TypeScript type definitions
```

## Key Data Points

Data used in the platform is derived from Ghana's e-government digitalization trajectory:

- **Adoption Rate**: 15.0% (2020) → 75.0% (2024)
- **Digital Payment Target**: Full implementation by early 2026
- **NLA Digital Transition**: Fully digital by Q3 2026
- **Data Center Cost**: $11.3M per MW (Tier III average)
- **New Facilities**: 56 scheduled across Africa by end of 2026
- **AfCFTA Requirement**: 700 data centers needed for digital trade
