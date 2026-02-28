# Jbunds Portfolio (Next.js)

Personal portfolio built with Next.js (App Router) and Tailwind CSS. It showcases projects with link previews, uses a shared navigation bar, and includes a reusable project card layout.

## Features

- App Router with layout-level navigation and global styling
- Tailwind CSS utility-first styling
- Custom font (TrajanPro) loaded via `@font-face` in globals.css
- Projects page with alternating card layout
- Data-driven projects list in a single data file
- Link preview component using an embedded iframe (when supported by the target site)
- Custom HoneyComb component (available for background visuals)
- Shimmer border animation on project cards (white by default, pink-to-cyan on hover)
- Glow effects on project links via custom CSS classes
- Custom portfolio colors defined as CSS variables in globals.css
- Contact form with EmailJS integration
- About page

## Pages

- Home: [app/page.tsx](app/page.tsx)
- Projects: [app/projects/page.tsx](app/projects/page.tsx)
- About: [app/about/page.tsx](app/about/page.tsx)
- Contact: [app/contact/page.tsx](app/contact/page.tsx)

## Components

- Projects list: [src/components/Projects.tsx](src/components/Projects.tsx)
- Project card: [src/components/ProjectCard.tsx](src/components/ProjectCard.tsx)
- Link preview: [src/components/LinkPreview.tsx](src/components/LinkPreview.tsx)
- Nav bar: [src/components/NavBar.tsx](src/components/NavBar.tsx)
- Honeycomb background (optional): [src/components/HoneyCombBackground.tsx](src/components/HoneyCombBackground.tsx)

## Data

Projects are defined in [src/data/projects.ts](src/data/projects.ts). Each entry uses the `Project` type in [src/types/project_type.ts](src/types/project_type.ts).

## Custom Styling

Custom colors, glow effects, and the shimmer border animation are defined in [app/globals.css](app/globals.css):

- `--color-pink-cstm` - Primary pink (`#fd53f2`)
- `--color-cyan-cstm` - Primary cyan (`#00e1ff`)
- `.glow-pink` - Pink drop-shadow glow on hover
- `.glow-cyan` - Cyan drop-shadow glow on hover
- `.shimmer-border-wrapper` - White border by default, animated pink-to-cyan gradient on hover


## Link Preview Notes

The Link Preview uses an `<iframe>` to embed the target site. Some sites block iframe embedding for security reasons, so previews may fail for those URLs. In that case, consider swapping to a screenshot API later.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting
