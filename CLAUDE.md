# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Development: `npm run dev` - Starts local development server
- Build: `npm run build` - Creates production build
- Lint: `npm run lint` - Runs ESLint to check code quality
- Format: `npm run format` - Formats code with Prettier

## Code Style Guidelines
- **Framework**: React with Tailwind CSS for styling
- **Formatting**: Use Prettier defaults, 2-space indentation
- **Imports**: Group by: 1) React/framework, 2) Components, 3) Utilities
- **Types**: Use TypeScript with explicit return types on functions
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Components**: Prefer functional components with hooks
- **CSS**: Use Tailwind utility classes, minimize custom CSS
- **Error handling**: Use try/catch blocks with descriptive error messages

## Project Structure
- `/public` - Static assets
- `/src` - Application source code
  - `/components` - Reusable UI components 
  - `/pages` - Top-level page components
  - `/utils` - Shared utility functions
  - `/styles` - Any custom styling