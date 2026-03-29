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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(26,26,46,0.6) 0%, rgba(26,26,46,0.2) 100%)',
                border: '1px solid rgba(124,58,237,0.2)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(124,58,237,0.25)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <h3 className="text-sm font-semibold mb-4 group-hover:text-accent transition-colors relative" style={{ color: '#e2e0ff' }}>
                {skillGroup.category}
              </h3>

              <div className="space-y-2 relative">
                {skillGroup.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.1 + itemIdx * 0.03 }}
                    className="flex items-center gap-2 text-xs group-hover:text-accent/90 transition-colors"
                    style={{ color: 'rgba(226,224,255,0.6)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
