# Kathy's Portfolio Website

A pixel art-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases IT expertise with a unique retro gaming aesthetic inspired by Undertale.

## Features

- 🎮 Pixel art theme with retro gaming aesthetics
- 📱 Responsive design for all devices
- ⚡ Fast performance with Next.js
- 🎨 Beautiful animations with Framer Motion
- 📝 Contact form for easy communication
- 🎯 Sections for skills, projects, and experience
- 🎨 Custom pixel art styling components

## Tech Stack

- **Frontend Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Form Handling:** React Hook Form
- **Deployment:** Vercel (recommended)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/kathy-portfolio.git
   cd kathy-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
kathy-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Section.tsx
│   │   ├── SkillCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ContactForm.tsx
│   └── styles/
│       └── globals.css
├── public/
│   └── fonts/
├── package.json
└── README.md
```

## Customization

1. Update personal information in `src/app/page.tsx`
2. Add your own projects to the projects array
3. Modify skills and their levels
4. Add your own pixel art assets to the `public` directory
5. Customize the color scheme in `src/styles/globals.css`

## Deployment

The easiest way to deploy this portfolio is using Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
