import { useEffect, useRef, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Government Projects', href: '#government' },
  { label: 'Contact', href: '#contact' },
]

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [activeHref, setActiveHref] = useState(navLinks[0].href)
  const clickLockUntilRef = useRef(0)

  const handleNavigation = (event, href) => {
    event.preventDefault()
    setExpanded(false)
    clickLockUntilRef.current = Date.now() + 900
    setActiveHref(href)

    const target = document.querySelector(href)
    if (target) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)
    if (sections.length === 0) return

    const resolveActiveHref = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) {
        return `#${sections[sections.length - 1].id}`
      }
      if (window.scrollY <= 4) {
        return `#${sections[0].id}`
      }
      const probeLine = window.innerHeight * 0.35
      let current = sections[0]
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= probeLine) {
          current = section
        }
      }
      return `#${current.id}`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        if (Date.now() < clickLockUntilRef.current) return
        setActiveHref(resolveActiveHref())
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    setActiveHref(resolveActiveHref())

    const onResize = () => setActiveHref(resolveActiveHref())
    window.addEventListener('resize', onResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Navbar
      expand="lg"
      className={`navbar-solar fixed-top ${scrolled ? 'navbar-scrolled' : ''} ${expanded ? 'navbar-expanded' : ''}`}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={(event) => handleNavigation(event, '#home')}>
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="#f9a825" stroke="none" />
              <g strokeLinecap="round">
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
              </g>
            </svg>
          </span>
          <span className="brand-name">
            Sourabh <span>Solar Solutions</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="solar-nav"
          className="navbar-toggler-solar"
          onClick={() => setExpanded((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="solar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                className={activeHref === link.href ? 'active' : ''}
                onClick={(event) => handleNavigation(event, link.href)}
              >
                {link.label}
              </Nav.Link>
            ))}
            <a
              href="#contact"
              className="nav-cta ms-lg-3"
              onClick={(event) => handleNavigation(event, '#contact')}
            >
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
