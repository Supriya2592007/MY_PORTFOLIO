import { useLayoutEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Achievements from './sections/Achievements'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './App.css'

const revealSelector = [
  '#projects .section-heading',
  '#projects .project-card',
  '#experience .section-heading',
  '#experience .journey-item',
  '#achievements .section-heading',
  '#achievements .achievement-card',
  '#certifications .section-heading',
  '#certifications .certification-card',
  '#contact .contact-heading > :not(.contact-details)',
  '#contact .contact-detail',
  '#contact .contact-form',
].join(', ')

function App() {
  useLayoutEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window)
    ) return undefined

    const elements = document.querySelectorAll(revealSelector)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' })

    elements.forEach((element) => {
      element.setAttribute('data-reveal', '')

      const staggerGroup = element.closest('.projects-grid, .journey-list, .achievements-grid, .certifications-grid, .contact-details')
      if (staggerGroup) {
        const index = Array.from(staggerGroup.children).indexOf(element)
        if (index >= 0) element.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`)
      }

      const bounds = element.getBoundingClientRect()
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        element.classList.add('is-revealed')
      } else {
        observer.observe(element)
      }
    })

    document.documentElement.classList.add('has-reveal-motion')
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-reveal-motion')
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
