# Jbunds Portfolio (Next.js)

Personal portfolio built with Next.js (App Router), Tailwind CSS v4, and TypeScript. Showcases projects, skills, and contact information with custom animations and a consistent visual theme.

## Stack

- **Next.js 16** — App Router, file-based routing
- **Tailwind CSS v4** — utility-first styling with CSS variable integration
- **TypeScript** — strict typing throughout
- **styled-components** — scoped component styles (ContactForm)
- **EmailJS** — client-side contact form submission (no backend required)
- **lucide-react** — icon set used in the hamburger nav

## Features

- Responsive layout — stacks on mobile, side-by-side on `md`+
- Collapsible hamburger nav on small screens
- Shimmer border animation on hover (project cards, contact form)
- Shimmer text animation on the home page header
- Glow effects on links via custom CSS classes
- Skills section with SVG icon grid on the home page
- Data-driven projects list — add a project by editing one file
- Link preview component using an embedded iframe
- HoneyComb / HoneyCombBackground decorative components
- Custom font (TrajanPro) via `@font-face` in globals.css
- Stable page width via scrollbar gutter handling

## Pages

- Home: [app/page.tsx](app/page.tsx)
- Projects: [app/projects/page.tsx](app/projects/page.tsx)
- About: [app/about/page.tsx](app/about/page.tsx)
- Contact: [app/contact/page.tsx](app/contact/page.tsx)

## Components

- Nav bar (desktop): [src/components/NavBar.tsx](src/components/NavBar.tsx)
- Nav bar (mobile/hamburger): [src/components/NavBarHamburger.tsx](src/components/NavBarHamburger.tsx)
- Page heading: [src/components/Header.tsx](src/components/Header.tsx)
- Projects list: [src/components/Projects.tsx](src/components/Projects.tsx)
- Project card: [src/components/ProjectCard.tsx](src/components/ProjectCard.tsx)
- Link preview: [src/components/LinkPreview.tsx](src/components/LinkPreview.tsx)
- Contact form: [src/components/ContactForm.tsx](src/components/ContactForm.tsx)
- Mailto button: [src/components/MailToButton.tsx](src/components/MailToButton.tsx)
- SVG icons: [src/components/Icons.tsx](src/components/Icons.tsx)
- Icon grid: [src/components/IconsGroup.tsx](src/components/IconsGroup.tsx)

## Data

Projects are defined in [src/data/projects.ts](src/data/projects.ts) using the `Project` type from [src/types/project_type.ts](src/types/project_type.ts).

## Custom Styling

Custom colors, glow effects, and the shimmer border animation are defined in [app/globals.css](app/globals.css):

- --site-bg
- --site-text
- --color-pink-cstm
- --color-cyan-cstm
- .glow-pink
- .glow-cyan

Key utility classes: `.shimmer-border`, `.shimmer-text`, `.glow-pink`, `.glow-cyan`

## Getting Started

```bash
npm install
npm run dev
```

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
