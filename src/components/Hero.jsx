// src/components/Hero.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import content from '../data/content'

const { personal } = content

const SUBTITLES = [
  personal.title,
  'Analytics Platform Engineer',
  'Product Owner',
  'Data Pipeline Architect',
  'Full-Stack Platform Builder',
]

function useTypewriter(words, { typingSpeed = 60, deletingSpeed = 35, pauseMs = 1800 } = {}) {
  const [display, setDisplay]   = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [typing,  setTyping]    = useState(true)
  const [pausing, setPausing]   = useState(false)

  useEffect(() => {
    const target = words[wordIdx]

    if (pausing) {
      const t = setTimeout(() => { setPausing(false); setTyping(false) }, pauseMs)
      return () => clearTimeout(t)
    }

    if (typing) {
      if (display.length < target.length) {
        const t = setTimeout(() => setDisplay(target.slice(0, display.length + 1)), typingSpeed)
        return () => clearTimeout(t)
      } else {
        setPausing(true)
      }
    } else {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(display.slice(0, -1)), deletingSpeed)
        return () => clearTimeout(t)
      } else {
        setWordIdx(i => (i + 1) % words.length)
        setTyping(true)
      }
    }
  }, [display, typing, pausing, wordIdx, words, typingSpeed, deletingSpeed, pauseMs])

  return display
}

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const typed = useTypewriter(SUBTITLES)

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Animated radial gradient background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 70% 55% at 50% -5%,  rgba(124,58,237,0.24) 0%, transparent 65%)',
            'radial-gradient(ellipse 80% 60% at 55% -8%,  rgba(124,58,237,0.18) 0%, transparent 68%)',
            'radial-gradient(ellipse 65% 50% at 45% -3%,  rgba(124,58,237,0.26) 0%, transparent 62%)',
            'radial-gradient(ellipse 70% 55% at 50% -5%,  rgba(124,58,237,0.24) 0%, transparent 65%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage:
            'linear-gradient(rgba(196,181,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Location chip */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase"
            style={{ color: 'rgba(196,181,253,0.5)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#7c3aed' }} />
            {personal.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
          className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.07] mb-6"
          style={{ color: '#e2e0ff' }}
        >
          {personal.name.split(' ').map((word, i, arr) => (
            <span key={i}>
              {i === arr.length - 1
                ? <span style={{
                    background: 'linear-gradient(135deg, #e2e0ff 0%, #c4b5fd 40%, #7c3aed 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 300,
                  }}>{word}</span>
                : word}{' '}
            </span>
          ))}
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.22}
          className="flex items-center gap-1 mb-10 h-8"
          aria-label={`Role: ${typed}`}
        >
          <span className="text-lg sm:text-xl font-light" style={{ color: 'rgba(226,224,255,0.45)' }}>
            {typed}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block w-0.5 h-5 ml-0.5 rounded-sm"
            style={{ background: '#7c3aed' }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Accent rule */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          className="mb-10"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block h-px w-24 origin-left"
            style={{ background: 'linear-gradient(90deg, #7c3aed, transparent)' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0.38}
          className="text-base sm:text-lg font-light leading-8 max-w-xl mb-12"
          style={{ color: 'rgba(226,224,255,0.3)' }}
        >
          Linguistics → computer science → data engineering.
          Building end-to-end analytics platforms where technical depth and product thinking meet.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.46}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: '#7c3aed' }}
          >
            View work
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full transition-all duration-200 hover:border-white/30"
            style={{
              color: 'rgba(226,224,255,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full transition-all duration-200 hover:border-white/30"
            style={{
              color: 'rgba(226,224,255,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.6), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
