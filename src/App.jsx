// portfolio/src/App.jsx
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero          from './components/Hero'
import About         from './components/About'
import Experience    from './components/Experience'
import Education     from './components/Education'
import Skills        from './components/Skills'
import Certifications from './components/Certifications'
import Volunteering  from './components/Volunteering'
import Contact       from './components/Contact'
import Navigation    from './components/Navigation'

function AnimatedTriangles() {
  const triangles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    delay: i * 0.12,
    duration: 10 + Math.random() * 6,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 80 + Math.random() * 220,
    opacity: i % 2 === 0 ? 0.2 + Math.random() * 0.2 : 0.1 + Math.random() * 0.15,
    color: i % 3 === 0 ? 'rgba(196,181,253,' : i % 3 === 1 ? 'rgba(167,139,250,' : 'rgba(139,92,246,',
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {triangles.map(tri => (
        <motion.div
          key={tri.id}
          className="absolute"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${tri.size / 2}px solid transparent`,
            borderRight: `${tri.size / 2}px solid transparent`,
            borderBottom: `${tri.size}px solid ${tri.color}${tri.opacity})`,
            filter: 'blur(1px)',
            left: `${tri.x}%`,
            top: `${tri.y}%`,
            mixBlendMode: 'screen',
          }}
          animate={{
            x: [0, 120, -120, 0],
            y: [0, -120, 120, 0],
            rotate: [0, 180, 360],
            opacity: [tri.opacity * 0.2, tri.opacity, tri.opacity * 0.2],
          }}
          transition={{
            duration: tri.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: tri.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div 
      className="min-h-screen bg-bg text-text font-sans noise-overlay relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #1a0f3a 50%, #0f0f1e 100%)',
      }}
    >
      <AnimatedTriangles />
      {/* Subtle white glow accents */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%),radial-gradient(circle at 80% 80%, rgba(196,181,253,0.04) 0%, transparent 50%)',
        zIndex: 1,
      }} />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Certifications />
          <Volunteering />
          <Contact />
        </main>
      </div>
    </div>
  )
}
