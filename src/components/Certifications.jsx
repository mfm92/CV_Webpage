// src/components/Certifications.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '../data/content'

const { certifications, awards } = content

const CARD_STYLE = {
  background: '#1a1a2e',
  border: '1px solid rgba(124,58,237,0.2)',
  borderRadius: '12px',
  padding: '1rem 1.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  transition: 'box-shadow 0.25s, border-color 0.25s',
}

function CertCard({ cert, delay, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={CARD_STYLE}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.3)'
        e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
      }}
      aria-label={`${cert.title} — ${cert.issuer}, ${cert.date}`}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}
        aria-hidden="true"
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" style={{ color: '#7c3aed' }}>
          <path d="M10 1l2.39 4.84 5.35.78-3.87 3.77.91 5.33L10 13.27l-4.78 2.51.91-5.33L2.26 6.62l5.35-.78L10 1z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <h3 className="text-sm font-semibold leading-snug" style={{ color: '#e2e0ff' }}>
          {cert.title}
        </h3>
        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.38)' }}>
          {cert.issuer}
        </p>
        <time className="text-xs font-mono mt-1.5 block" style={{ color: 'rgba(124,58,237,0.7)' }}>
          {cert.date}
        </time>
      </div>
    </motion.article>
  )
}

function AwardCard({ award, delay, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        ...CARD_STYLE,
        borderColor: 'rgba(245,158,11,0.2)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 0 20px rgba(245,158,11,0.2)'
        e.currentTarget.style.borderColor = 'rgba(245,158,11,0.45)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'rgba(245,158,11,0.2)'
      }}
      aria-label={`Award: ${award.title}`}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)' }}
        aria-hidden="true"
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" style={{ color: '#f59e0b' }}>
          <path d="M10 2v4M10 14v4M4.22 4.22l2.83 2.83M12.95 12.95l2.83 2.83M2 10h4M14 10h4M4.22 15.78l2.83-2.83M12.95 7.05l2.83-2.83"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <h3 className="text-sm font-semibold leading-snug" style={{ color: '#e2e0ff' }}>
          {award.title}
        </h3>
        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.38)' }}>
          {award.issuer}
        </p>
        <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {award.description}
        </p>
        <time className="text-xs font-mono mt-1.5 block" style={{ color: 'rgba(245,158,11,0.65)' }}>
          {award.date}
        </time>
      </div>
    </motion.article>
  )
}

export default function Certifications() {
  const ref    = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" ref={ref} aria-labelledby="certs-heading" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
            style={{ color: 'rgba(196,181,253,0.5)' }}>
            Credentials
          </p>
          <h2 id="certs-heading"
            className="text-3xl sm:text-4xl font-light mb-12"
            style={{ color: '#e2e0ff' }}>
            Certifications &amp; awards
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} delay={i * 0.1} inView={inView} />
          ))}
        </div>

        {awards.length > 0 && (
          <>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              Awards
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {awards.map((award, i) => (
                <AwardCard key={i} award={award} delay={0.2 + i * 0.1} inView={inView} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
