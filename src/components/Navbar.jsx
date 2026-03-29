// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import content from '../data/content'

const NAV_LINKS = [
  { label: 'About',          id: 'about' },
  { label: 'Experience',     id: 'experience' },
  { label: 'Education',      id: 'education' },
  { label: 'Skills',         id: 'skills' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Volunteering',   id: 'volunteering' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const { personal } = content

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(15,15,19,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.12)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          aria-label={`${personal.name} — scroll to top`}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span style={{ color: '#7c3aed', fontWeight: 700 }}>MFM</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span className="hidden sm:inline" style={{ color: 'rgba(226,224,255,0.45)', fontWeight: 400 }}>
            {personal.name.split(' ').slice(0, 2).join(' ')}
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, id }) => {
            const active = activeId === id
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active ? 'location' : undefined}
                className="relative px-3 py-1.5 text-sm rounded-md transition-all duration-200"
                style={{
                  color:      active ? '#c4b5fd' : 'rgba(226,224,255,0.4)',
                  background: active ? 'rgba(124,58,237,0.1)' : 'transparent',
                }}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute bottom-0 left-3 right-3 h-px"
                    style={{ background: '#7c3aed' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          style={{ color: 'rgba(226,224,255,0.6)' }}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            {[
              menuOpen ? 'rotate(45deg) translateY(6px)'  : 'none',
              null,
              menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
            ].map((transform, i) => (
              i === 1
                ? <span key={i} className="block h-px bg-current transition-all duration-300"
                    style={{ opacity: menuOpen ? 0 : 1 }} />
                : <span key={i} className="block h-px bg-current transition-all duration-300"
                    style={{ transform: transform || 'none' }} />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(26,26,46,0.96)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(124,58,237,0.15)',
            }}
          >
            <nav className="px-6 py-4 flex flex-col gap-0.5">
              {NAV_LINKS.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm transition-colors"
                  style={{ color: activeId === id ? '#c4b5fd' : 'rgba(226,224,255,0.5)' }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
