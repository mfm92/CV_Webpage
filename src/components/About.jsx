// src/components/About.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '../data/content'

const { about } = content

const STATS = [
  { value: '9+',     label: 'Years at MIC',        sub: 'with dramatically growing scope' },
  { value: '40+',    label: 'Enterprise clients',  sub: 'across 150+ countries' },
  { value: '7',      label: 'Team size',            sub: 'de facto lead, current role' },
  { value: '3-in-1', label: 'Backgrounds',          sub: 'linguistics · CS · data engineering' },
  { value: '🏋️',    label: 'Competitive powerlifter', sub: 'structured performance, year-on-year' },
]

const CARD_STYLE = {
  background: '#1a1a2e',
  border: '1px solid rgba(124,58,237,0.2)',
  borderRadius: '12px',
  padding: '1rem 1.25rem',
}

export default function About() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} aria-labelledby="about-heading" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
            style={{ color: 'rgba(196,181,253,0.5)' }}>
            About
          </p>
          <h2 id="about-heading"
            className="text-3xl sm:text-4xl font-light mb-12"
            style={{ color: '#e2e0ff' }}>
            The long version
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left: bio paragraphs */}
          <div className="lg:col-span-3 space-y-6">
            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-base font-light leading-8"
                style={{ color: 'rgba(226,224,255,0.55)' }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right: stat cards */}
          <motion.aside
            aria-label="Key highlights"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-3"
          >
            {STATS.map((stat, i) => (
              <article key={i} style={CARD_STYLE} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-2xl font-light" style={{
                    background: 'linear-gradient(135deg, #e2e0ff 0%, #c4b5fd 50%, #7c3aed 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: 'rgba(226,224,255,0.8)' }}>
                    {stat.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>
                    {stat.sub}
                  </p>
                </div>
                <div className="w-px self-stretch rounded-full"
                  style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.6), transparent)' }} />
              </article>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
