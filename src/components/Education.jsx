// src/components/Education.jsx
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '../data/content'

const { education } = content

const CARD_STYLE = {
  background: '#1a1a2e',
  border: '1px solid rgba(124,58,237,0.2)',
  borderRadius: '12px',
  padding: '1.25rem',
  transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
}

const CARD_HOVER_STYLE = {
  boxShadow: '0 0 20px rgba(124,58,237,0.3)',
  borderColor: 'rgba(124,58,237,0.45)',
}

function EducationCard({ item, index, inView }) {
  const [hovered, setHovered] = useState(false)

  const isMsc = item.degree.toLowerCase().includes('msc') ||
                item.degree.toLowerCase().includes('data science')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...CARD_STYLE, ...(hovered ? CARD_HOVER_STYLE : {}) }}
      aria-label={`${item.degree} at ${item.institution}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        {/* Degree initial badge */}
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
          style={{
            background: 'rgba(124,58,237,0.12)',
            border: '1px solid rgba(124,58,237,0.25)',
            color: '#7c3aed',
          }}
        >
          {item.degree.replace(/[^A-Z]/g, '').slice(0, 2) || item.degree[0]}
        </div>

        <time
          className="text-xs font-mono text-right flex-shrink-0"
          style={{ color: 'rgba(255,255,255,0.28)' }}
        >
          {item.period}
        </time>
      </div>

      <h3 className="text-sm font-semibold" style={{ color: '#e2e0ff' }}>
        {item.degree}
      </h3>
      {item.institutionUrl ? (
        <a
          href={item.institutionUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs hover:underline transition-colors block"
          style={{ color: 'rgba(196,181,253,0.6)' }}
        >
          {item.institution} ↗
        </a>
      ) : (
        <p className="text-xs" style={{ color: 'rgba(196,181,253,0.5)' }}>
          {item.institution}
        </p>
      )}

      {item.notes && (
        <p className="text-xs leading-relaxed mt-2" style={{ color: 'rgba(124,58,237,0.75)' }}>
          {item.notes}
        </p>
      )}

      {isMsc && (
        <span
          className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mt-3"
          style={{
            background: 'rgba(196,181,253,0.1)',
            border: '1px solid rgba(196,181,253,0.25)',
            color: '#c4b5fd',
          }}
        >
          Coursework completed
        </span>
      )}
    </motion.article>
  )
}

export default function Education() {
  const ref    = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} aria-labelledby="education-heading" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
            style={{ color: 'rgba(196,181,253,0.5)' }}>
            Education
          </p>
          <h2 id="education-heading"
            className="text-3xl sm:text-4xl font-light mb-12"
            style={{ color: '#e2e0ff' }}>
            Academic background
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((item, i) => (
            <EducationCard key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
