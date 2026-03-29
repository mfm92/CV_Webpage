# CLAUDE.md – Project Context & Development Guide

This file provides context for AI assistants (Claude, etc.) working on this project.

## Project Overview

**CV Webpage** is a modern, animated portfolio website built to showcase professional experience, projects, and skills. It's a single-page application (SPA) with smooth animations and responsive design.

### Core Technologies

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + inline styles
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Visibility Tracking**: react-intersection-observer

## Project Structure

```
CV-WebPage/
├── src/
│   ├── components/           # React components
│   │   ├── Contact.jsx       # Contact form (react-hook-form, validation)
│   │   ├── Experience.jsx    # Work experience section
│   │   ├── Hero.jsx          # Landing/header section
│   │   ├── Projects.jsx      # Portfolio projects grid
│   │   ├── Skills.jsx        # Technical skills display
│   │   └── Volunteering.jsx  # Volunteer work & research
│   ├── data/
│   │   └── content.js        # Central data file (all text content)
│   ├── styles/
│   │   └── globals.css       # Tailwind imports + global styles
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── .gitignore               # Git exclusions (includes .env files)
├── README.md                # User-facing documentation
├── CLAUDE.md                # This file – AI context
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies & scripts
```

## Key Components & Their Patterns

### Contact Component (Contact.jsx)

**Current State**: Form collects data but doesn't send emails (placeholder only)

**Form Structure**:
- Uses `react-hook-form` for state management
- Fields: name, email, subject, message
- Validation: required fields, email pattern matching, min length for message
- Error display: inline error messages below each field
- Loading state: button shows "Sending…" during submission

**To Implement Email**:
- Modify `onSubmit` function to POST to an email service
- Recommended: Formspree (free, no backend needed)
- Store API keys in `.env.local` → add to Vercel env vars before deploying

### Component Animation Pattern

All sections use this pattern:
```jsx
const ref = useRef(null)
const inView = useInView(ref, { once: true, margin: '-80px' })

<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Content */}
</motion.div>
```

**Pattern Details**:
- `useInView` triggers animation when component enters viewport
- `once: true` means animation only plays once
- `margin: '-80px'` means trigger 80px before entering viewport
- Easing function `[0.22, 1, 0.36, 1]` is custom cubic-bezier (smooth, bouncy feel)
- Stagger animations with `delay: i * 0.12` for lists

### Styling Conventions

- **Primary color**: `accent` (purple, used via Tailwind or rgba)
- **Text colors**: `text` (light), `white/40`, `white/50` (various opacities)
- **Backgrounds**: `card`, dark overlays (rgba values in inline styles)
- **Borders**: `border-white/[0.08]` (very subtle)
- **Hover states**: opacity changes, color shifts, border highlights

Example class usage:
```jsx
className="text-sm text-white/40 hover:text-accent transition-colors"
```

## Development Workflow

### Adding a New Section

1. Create new component in `src/components/YourSection.jsx`
2. Follow the animation pattern above
3. Add content to `src/data/content.js`
4. Import and add to `src/App.jsx` in proper order
5. Use consistent spacing: `py-28 px-6` for sections

### Modifying Content

All text content lives in `src/data/content.js`. Update this file to change:
- Personal info (name, title, links)
- Experience entries
- Projects
- Skills
- Volunteering entries

### Testing Animations

Use Framer Motion devtools:
1. Components auto-animate on scroll
2. Browser DevTools → check `transform` and `opacity` values
3. Slow down in DevTools (⚙ → Throttling) to see animations better

## Important Notes for AI Assistants

### Environment Variables

- **Location**: `.env.local` (development), Vercel dashboard (production)
- **Never commit**: API keys, tokens, secrets (already in .gitignore)
- **Examples needed**: VITE_FORMSPREE_ID, VITE_RESEND_API_KEY
- **Access in code**: `import.meta.env.VITE_*`

### Form Implementation

Current placeholder uses:
```jsx
await new Promise(resolve => setTimeout(resolve, 800))
setSubmitted(true)
```

This fakes a submission. Real implementation should:
1. Call fetch() or axios to email service
2. Handle errors gracefully
3. Show error messages if submission fails
4. Only set `submitted=true` on success

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Grid layout: `grid sm:grid-cols-2` means 1 col on mobile, 2 on tablet+
- Padding: `px-6` on all sections (3rem = 48px horizontal)

### Performance Considerations

- Lazy animation triggering with `useInView`
- No large images (assuming no image assets needed for portfolio)
- CSS is optimized via Tailwind's PurgeCSS
- Vite handles code splitting automatically

## Deployment Checklist

Before pushing to production:

- [ ] Contact form integration complete (or note it as TODO)
- [ ] All personal info updated in `content.js`
- [ ] No hardcoded API keys in code (use .env.local)
- [ ] Build test: `npm run build` succeeds
- [ ] Responsive design tested on mobile
- [ ] All links work (GitHub, LinkedIn, etc.)
- [ ] No console errors in browser DevTools

## Common Tasks

### Update Personal Info
→ Edit `src/data/content.js`, search for `personal` object

### Change Colors
→ Check `tailwind.config.js` or inline `style={{}}` props

### Add New Project
→ Add entry to `projects` array in `src/data/content.js`

### Modify Animation Speed
→ Change `duration` prop in `transition={{}}` (in seconds)

### Test Form Locally
→ It logs to console; check browser DevTools → Console tab

## Git Workflow

```bash
# Before first push
git remote add origin https://github.com/mfm92/CV_Webpage
git add .
git commit -m "Initial commit: portfolio setup"
git push -u origin main

# For changes
git add .
git commit -m "descriptive message"
git push
```

## Support & References

- **Framer Motion Docs**: https://www.framer.com/motion/
- **React Hook Form**: https://react-hook-form.com/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite Docs**: https://vitejs.dev/
- **Vercel Deployment**: https://vercel.com/docs

---

**Last Updated**: 2024
**Maintained by**: mfm92
