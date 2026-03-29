import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ]

  return (
    <>
      {/* Sticky Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{ 
          background: 'rgba(26,13,58,0.8)',
          borderColor: 'rgba(196,181,253,0.2)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-sm font-semibold text-accent">
            MFM
          </a>

          <div className="hidden sm:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-medium text-white/60 hover:text-white hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.6)] transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(196,181,253,0.2) 0%, rgba(167,139,250,0.15) 100%)',
              color: '#c4b5fd',
              border: '1px solid rgba(196,181,253,0.4)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(196,181,253,0.3) 0%, rgba(167,139,250,0.25) 100%)'
              e.currentTarget.style.boxShadow = '0 0 16px rgba(196,181,253,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(196,181,253,0.2) 0%, rgba(167,139,250,0.15) 100%)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Contact
          </button>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0L5 14m7-7v12" />
        </svg>
      </motion.button>
    </>
  )
}
