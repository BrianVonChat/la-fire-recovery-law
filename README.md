# LA Fire Recovery Law Website

A modern, user-centric, mobile-first website for LA Fire Recovery Law (lafirerecoverylaw.com). The website primarily assists victims of recent Los Angeles fires (Jan 2025), focusing on fire insurance claims, loss of income, and personal injury.

## Features

- **Mobile-first, responsive design**: Optimized for all device sizes
- **Fast-loading**: Built with performance in mind
- **SEO optimized**: Structured for search engines with proper metadata
- **Accessible**: Following WCAG 2.2 AA standards
- **Modern UI/UX**: Clean, professional design with intuitive navigation

## Key Pages & Components

- **Homepage**: Hero section, services overview, attorney profiles, testimonials, and contact form
- **Interactive Intake Form**: Multi-step guided form with auto-save functionality
- **Fire-specific Landing Pages**: Dedicated pages for Eaton, Alta Dena, and Palisades fires
- **Resource Center**: Guides and information for fire victims
- **Contact Page**: Multiple contact options and detailed intake form

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Hook Form**: For form handling and validation
- **React Icons**: For iconography
- **Framer Motion**: For animations and transitions

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/la-fire-recovery-law.git
   cd la-fire-recovery-law
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
la-fire-recovery-law/
├── app/                  # Next.js App Router
│   ├── components/       # Reusable UI components
│   ├── contact/          # Contact page
│   ├── fires/            # Fire-specific landing pages
│   ├── resources/        # Resource center
│   ├── services/         # Service detail pages
│   ├── about/            # About pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── public/               # Static assets
│   └── images/           # Image files
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Deployment

The site can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

```bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## SEO Strategy

The website implements the following SEO strategies:

- Proper metadata for all pages
- Schema markup for attorneys, FAQs, and testimonials
- Optimized for local search with location-specific keywords
- Mobile-friendly design (Google's mobile-first indexing)
- Fast loading times for better user experience and search rankings

## Accessibility

The website follows WCAG 2.2 AA standards:

- Proper heading structure
- Adequate color contrast
- Alt text for images
- Keyboard navigation support
- ARIA attributes where necessary
- Focus management for interactive elements

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com). 