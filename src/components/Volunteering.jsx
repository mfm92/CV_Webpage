// src/components/Volunteering.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '../data/content'

const { volunteering } = content

export default function Volunteering() {
  const ref    = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="volunteering"
      ref={ref}
      aria-labelledby="volunteering-heading"
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
            Beyond work
          </p>
          <h2 id="volunteering-heading"
            className="text-3xl sm:text-4xl font-light mb-12"
            style={{ color: '#e2e0ff' }}>
            Volunteering &amp; research
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {volunteering.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#1a1a2e',
                border: '1px solid rgba(124,58,237,0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.3)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
              }}
              aria-label={`${item.role} at ${item.org}`}
            >
              {/* Decorative corner glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', top: '-24px', right: '-24px',
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'rgba(124,58,237,0.07)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }}
              />

              <time
                className="text-xs font-mono block mb-3"
                style={{ color: 'rgba(124,58,237,0.65)' }}
              >
                {item.period}
              </time>

              <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: '#e2e0ff' }}>
                {item.role}
              </h3>
              {item.orgUrl ? (
                <a
                  href={item.orgUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs hover:underline transition-colors block mb-3"
                  style={{ color: 'rgba(196,181,253,0.6)' }}
                >
                  {item.org} ↗
                </a>
              ) : (
                <p className="text-xs mb-3" style={{ color: 'rgba(196,181,253,0.5)' }}>
                  {item.org}
                </p>
              )}
              <p className="text-sm font-light leading-7" style={{ color: 'rgba(226,224,255,0.42)' }}>
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
