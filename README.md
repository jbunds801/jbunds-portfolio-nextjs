# Jbunds Portfolio (Next.js)

Personal portfolio built with Next.js (App Router) and Tailwind CSS. It showcases projects with link previews, uses shared page-level layout styling, and reusable UI components.

## Features

- App Router with shared layout-level navigation and global styling
- Tailwind CSS utility-first styling
- Custom font (TrajanPro) loaded via `@font-face` in globals.css
- Reusable page heading component (`Header`) for consistent title styling and spacing
- Projects page with alternating card layout
- Data-driven projects list in a single data file
- Link preview component using an embedded iframe (when supported by the target site)
- Custom HoneyComb component (available for background visuals)
- Shimmer effect animation added to elements
- Glow effects on project links via custom CSS classes
- Custom portfolio colors defined as CSS variables in globals.css
- Contact page with reusable `mailto:` button component (no form backend)
- Stable page width behavior via scrollbar gutter handling
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
- Header: [src/components/Header.tsx](src/components/Header.tsx)
- Mailto button: [src/components/MailToButton.tsx](src/components/MailToButton.tsx)

## Data

Projects are defined in [src/data/projects.ts](src/data/projects.ts). Each entry uses the `Project` type in [src/types/project_type.ts](src/types/project_type.ts).

## Custom Styling

Custom colors, glow effects, and the shimmer border animation are defined in [app/globals.css](app/globals.css):

- --site-bg
- --site-text
- --color-pink-cstm
- --color-cyan-cstm
- .glow-pink
- .glow-cyan

Layout stability styles are also defined there:

- `html { overflow-y: scroll; }` - always reserves vertical scrollbar space
- `scrollbar-gutter: stable both-edges;` - avoids horizontal content shift when scrollbar state changes

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
