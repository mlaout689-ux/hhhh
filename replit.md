# Overview

Bravix AI is a Spanish-language landing page for an AI-powered virtual receptionist service. The application presents a premium business solution that uses artificial intelligence with human-like voice capabilities to transform telephone customer service. The site showcases how AI receptionists can handle calls 24/7, manage multiple simultaneous conversations, and provide consistent customer experiences across various industry sectors including dental, real estate, legal services, education, HVAC, and automotive.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using TypeScript and modern web technologies. The application uses a component-based architecture with:

- **UI Framework**: React with TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS with custom CSS variables for brand colors and design tokens
- **Component Library**: Radix UI components wrapped in custom shadcn/ui components for accessibility and consistency
- **Typography**: Custom font implementation using Playfair Display for headlines and Inter for body text
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The backend follows a simple Express.js REST API pattern with:

- **Server Framework**: Express.js with TypeScript
- **Data Layer**: Drizzle ORM for type-safe database operations
- **Storage Strategy**: In-memory storage implementation with interface for easy database migration
- **API Design**: RESTful endpoints for contact form submissions and data retrieval
- **Development Environment**: Hot module replacement and error overlay for development experience

## Design System
The application implements a comprehensive design system with:

- **Color Palette**: Dark theme with brand colors including purple (#8B5CF6), turquoise (#06B6D4), and cyan (#67E8F9)
- **Animation System**: Custom CSS animations including particle effects, scroll reveals, and hover interactions
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## Data Storage Solutions
Currently uses an in-memory storage implementation that can be easily replaced with PostgreSQL:

- **Schema Definition**: Drizzle schema for contacts table with fields for name, email, company, industry, and message
- **Type Safety**: Full TypeScript integration with Zod validation schemas
- **Migration Ready**: Drizzle configuration prepared for PostgreSQL deployment

## External Dependencies

- **Database**: Neon Database (PostgreSQL) configured via Drizzle ORM
- **Fonts**: Google Fonts integration for Playfair Display and Inter typography
- **Icons**: Font Awesome for consistent iconography throughout the application
- **UI Components**: Extensive Radix UI primitive components for accessibility and behavior
- **Development Tools**: Replit-specific plugins for development environment integration
- **Form Handling**: React Hook Form with Zod resolvers for type-safe form validation
- **Animations**: CSS-based animations with intersection observer for scroll-triggered effects

The architecture prioritizes performance, accessibility, and maintainability while providing a premium user experience that matches the high-end AI service being marketed.