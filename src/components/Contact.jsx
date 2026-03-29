// portfolio/src/components/Contact.jsx
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import content from '../data/content'

const { personal } = content

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    // In production: replace with actual form handler (e.g. Formspree, Resend, etc.)
    await new Promise(resolve => setTimeout(resolve, 800))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contact" ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-heading">Contact</p>
          <h2 className="section-title">Get in touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-white/50 leading-8 font-light">
              I'm not actively looking, but I'm always happy to connect — whether it's about a platform challenge, an interesting role, or just a conversation about data engineering, AI tooling, or powerlifting.
            </p>

            <div className="space-y-3">
              {[
                {
                  label: 'GitHub',
                  href:  personal.github,
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href:  personal.linkedin,
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-text transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-200 text-white/40 group-hover:text-accent">
                    {link.icon}
                  </span>
                  {link.label}
                  <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="card text-center py-12">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-text font-medium mb-2">Message sent</h3>
                <p className="text-sm text-white/40">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-accent/60 hover:text-accent transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full bg-card border rounded-lg px-4 py-2.5 text-sm text-text placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors ${
                        errors.name ? 'border-rose-500/50' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                      })}
                      className={`w-full bg-card border rounded-lg px-4 py-2.5 text-sm text-text placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors ${
                        errors.email ? 'border-rose-500/50' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full bg-card border rounded-lg px-4 py-2.5 text-sm text-text placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors ${
                      errors.subject ? 'border-rose-500/50' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 20, message: 'Please write at least 20 characters' },
                    })}
                    className={`w-full bg-card border rounded-lg px-4 py-2.5 text-sm text-text placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors resize-none ${
                      errors.message ? 'border-rose-500/50' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative max-w-6xl mx-auto mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="text-xs text-white/15">
          Built with React · Vite · Tailwind CSS · Framer Motion
        </p>
      </div>
    </section>
  )
}
