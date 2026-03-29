// src/components/Skills.jsx
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '../data/content'

const { skills } = content

const CATEGORY_ACCENTS = {
  'Data & Analytics Platform': { bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)',  text: '#c4b5fd' },
  'Infrastructure & DevOps':   { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.3)',  text: '#93c5fd' },
  'Development':               { bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.3)',  text: '#6ee7b7' },
  'AI & Productivity':         { bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.3)',  text: '#fcd34d' },
  'Product & Leadership':      { bg: 'rgba(236,72,153,0.1)',  border: 'rgba(236,72,153,0.3)',  text: '#f9a8d4' },
  'Languages':                 { bg: 'rgba(196,181,253,0.1)', border: 'rgba(196,181,253,0.3)', text: '#c4b5fd' },
}

const DEFAULT_ACCENT = { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)', text: '#c4b5fd' }

function SkillBadge({ label, accent }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-block text-xs font-medium px-2.5 py-1 rounded-md cursor-default transition-all duration-200"
      style={{
        background:  hovered ? accent.bg  : 'rgba(255,255,255,0.04)',
        border:      `1px solid ${hovered ? accent.border : 'rgba(255,255,255,0.07)'}`,
        color:       hovered ? accent.text : 'rgba(226,224,255,0.55)',
        boxShadow:   hovered ? `0 0 14px rgba(124,58,237,0.3)` : 'none',
        transform:   hovered ? 'translateY(-1px)' : 'none',
      }}
    >
      {label}
    </span>
  )
}

export default function Skills() {
  const ref    = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      aria-labelledby="skills-heading"
      className="py-28 px-6"
      style={{ background: 'rgba(26,26,46,0.18)' }}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
            style={{ color: 'rgba(196,181,253,0.5)' }}>
            Skills
          </p>
          <h2 id="skills-heading"
            className="text-3xl sm:text-4xl font-light mb-12"
            style={{ color: '#e2e0ff' }}>
            Technical toolkit
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const accent = CATEGORY_ACCENTS[group.category] ?? DEFAULT_ACCENT
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: '#1a1a2e',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                }}
                aria-label={`Skill category: ${group.category}`}
              >
                <h3
                  className="text-xs font-semibold tracking-wider uppercase mb-4"
                  style={{ color: accent.text, opacity: 0.8 }}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5" role="list">
                  {group.items.map(item => (
                    <div key={item} role="listitem">
                      <SkillBadge label={item} accent={accent} />
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
