// portfolio/src/App.jsx
import { useEffect } from 'react'
import Hero          from './components/Hero'
import About         from './components/About'
import Experience    from './components/Experience'
import Education     from './components/Education'
import Skills        from './components/Skills'
import Certifications from './components/Certifications'
import Volunteering  from './components/Volunteering'
import Contact       from './components/Contact'
import Navigation    from './components/Navigation'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-sans noise-overlay">
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
  )
}
