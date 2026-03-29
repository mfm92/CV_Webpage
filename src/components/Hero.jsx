// src/components/Hero.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-6 text-accent/70">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight"
          style={{ color: '#e2e0ff' }}
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl font-light mb-8"
          style={{ color: 'rgba(196,181,253,0.7)' }}
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'rgba(226,224,255,0.6)' }}
        >
          {personal.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#experience"
            className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent/40 text-accent rounded-lg font-medium hover:border-accent/70 hover:bg-accent/5 transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
