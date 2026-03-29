# CV Webpage

A modern, animated portfolio website built with React, Vite, and Tailwind CSS. Showcasing professional experience, projects, and contact information with smooth animations and geometric design elements.

## Features

- ✨ **Smooth Animations** – Framer Motion for elegant transitions and interactions
- 🎨 **Modern Design** – Clean, minimalist aesthetic with geometric shapes
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile
- ⚡ **Fast Performance** – Built with Vite for instant HMR and optimized builds
- 🎯 **Interactive Contact Form** – Form validation with react-hook-form
- 🌙 **Dark Theme** – Professional dark mode throughout

## Tech Stack

- **React 18** – UI library
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Animation library
- **React Hook Form** – Form state management
- **React Intersection Observer** – Scroll-based animations

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
git clone https://github.com/mfm92/CV_Webpage.git
cd CV_Webpage
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Generates optimized production build in `dist/` directory.

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Contact.jsx        # Contact form with validation
│   ├── Experience.jsx     # Work experience section
│   ├── Hero.jsx          # Hero/landing section
│   ├── Projects.jsx      # Portfolio projects
│   ├── Skills.jsx        # Technical skills
│   └── Volunteering.jsx  # Volunteer work
├── data/
│   └── content.js        # All content/text data
├── styles/
│   └── globals.css       # Global styles & Tailwind config
└── App.jsx               # Main app component
```

## Customization

### Content

Edit `src/data/content.js` to update:
- Personal information
- Work experience
- Projects
- Skills
- Volunteering activities
- Social links

### Styling

- Colors are managed in Tailwind CSS (`globals.css`)
- Component styles use Tailwind utility classes
- Animation timings are in individual components

### Contact Form

Currently logs form data to console. To integrate with a real email service:

1. **Formspree** (recommended for simplicity):
   - Create form at [formspree.io](https://formspree.io)
   - Update `onSubmit` in `Contact.jsx` to POST to your Formspree endpoint

2. **Resend** (modern alternative):
   - Install: `npm install resend`
   - Get API key from [resend.com](https://resend.com)
   - Add to `.env.local` and update form handler

3. **Your Backend**:
   - Create API endpoint that sends email
   - Call from `onSubmit` function

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel auto-detects Vite settings
5. Deploy with one click

For environment variables (email API keys, etc.):
- Add them in Vercel Dashboard → Project Settings → Environment Variables

### Other Platforms

- **Netlify** – Similar to Vercel, great alternative
- **GitHub Pages** – Free but requires build path configuration
- **Self-hosted** – Any static hosting works (AWS S3, DigitalOcean, etc.)

## Environment Variables

Create `.env.local` for development:

```env
VITE_FORMSPREE_ID=your_formspree_id_here
# or
VITE_RESEND_API_KEY=your_resend_key_here
```

These are automatically ignored by `.gitignore` and won't be committed.

## Performance

- Lazy loading with Intersection Observer
- Optimized animations using Framer Motion
- CSS minification via Tailwind
- Code splitting via Vite

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Personal portfolio project. Feel free to use as a template.

## Contact

See the portfolio website for contact information and social links.

---

Built with ❤️ using React, Vite, and Tailwind CSS
