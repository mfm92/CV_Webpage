// src/components/Experience.jsx
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import content from '../data/content'

const { experience } = content

const CARD_STYLE = {
  background: '#1a1a2e',
  border: '1px solid rgba(124,58,237,0.2)',
  borderRadius: '10px',
  padding: '1rem 1.25rem',
}

function RoleCard({ role, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article style={{ borderLeft: '2px solid rgba(124,58,237,0.35)', paddingLeft: '1.25rem', position: 'relative', marginBottom: '0' }}>
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute', left: '-5px', top: '10px',
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#0f0f13', border: '2px solid #7c3aed',
        }}
      />

      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-label={`${open ? 'Collapse' : 'Expand'} details for ${role.title}`}
        className="w-full text-left group flex items-start justify-between gap-4 py-1"
      >
        <div>
          <h4
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: open ? '#c4b5fd' : '#e2e0ff' }}
          >
            {role.title}
          </h4>
          <time
            className="text-xs font-mono mt-0.5 block"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            {role.period}
          </time>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-1"
          style={{ color: 'rgba(196,181,253,0.4)' }}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-5 space-y-4">
              {role.bullets.length > 0 && (
                <ul className="space-y-2" aria-label="Responsibilities">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed font-light"
                      style={{ color: 'rgba(226,224,255,0.5)' }}>
                      <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                        style={{ background: 'rgba(124,58,237,0.7)' }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {role.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Tech stack">
                  {role.stack.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(124,58,237,0.1)',
                        border: '1px solid rgba(124,58,237,0.25)',
                        color: '#c4b5fd',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default function Experience() {
  const ref    = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      aria-labelledby="experience-heading"
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
            Experience
          </p>
          <h2 id="experience-heading"
            className="text-3xl sm:text-4xl font-light mb-12"
            style={{ color: '#e2e0ff' }}>
            Where I've worked
          </h2>
        </motion.div>

        <div className="space-y-14">
          {experience.map((company, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Company header */}
              <header className="mb-5">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold" style={{ color: '#e2e0ff' }}>
                        {company.company}
                      </h3>
                      {company.companyUrl ? (
                        <a
                          href={company.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs hover:underline transition-colors"
                          style={{ color: 'rgba(196,181,253,0.6)' }}
                        >
                          {company.companyNote} ↗
                        </a>
                      ) : (
                        <p className="text-xs" style={{ color: 'rgba(196,181,253,0.5)' }}>
                          {company.companyNote}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </header>

              {/* Role timeline */}
              <div className="space-y-4">
                {company.roles.map((role, ri) => (
                  <RoleCard key={ri} role={role} defaultOpen={ci === 0 && ri === 0} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
