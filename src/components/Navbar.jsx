import { useEffect, useState } from 'react'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: null },
  { label: 'Journey', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const sections = navigationItems
      .filter((item) => item.href)
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    let frame = 0
    const updateNavigation = () => {
      frame = 0
      setIsScrolled(window.scrollY > 8)

      const activeLine = window.innerHeight * 0.35
      let currentSection = sections[0]
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activeLine) currentSection = section
      })
      if (currentSection) setActiveSection(currentSection.id)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavigation)
    }

    updateNavigation()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          SUPRIYA<span className="brand-dot">.</span>
        </a>
        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="primary-menu">
          {navigationItems.map((item) => item.href ? (
            <a
              className={item.href === `#${activeSection}` ? 'active' : ''}
              href={item.href}
              aria-current={item.href === `#${activeSection}` ? 'location' : undefined}
              key={item.label}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ) : (
            <span className="nav-link-placeholder" aria-disabled="true" title="Skills section coming soon" key={item.label}>
              {item.label}
            </span>
          ))}
          <span className="resume-link is-placeholder" aria-disabled="true" title="Resume link not provided">
            Resume <span aria-hidden="true">↗</span>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar