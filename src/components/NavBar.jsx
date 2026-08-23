import { useEffect, useRef, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/', scrollTo: '#home' },
  { label: 'About', to: '/', scrollTo: '#about' },
  { label: 'Solutions', to: '/', scrollTo: '#solutions' },
  { label: 'Government Projects', to: '/', scrollTo: '#government' },
  { label: 'Projects', to: '/projects', scrollTo: '#projects' },
  { label: 'Contact', to: '/', scrollTo: '#contact' },
]

function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')
  const clickLockUntilRef = useRef(0)

  const scrollToSection = (scrollTo) => {
    const target = document.querySelector(scrollTo)

    if (!target) return

    const navbarEl = document.querySelector('.navbar-solar')
    const navHeight = navbarEl
      ? navbarEl.offsetHeight
      : 80

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navHeight -
      (window.innerWidth <= 991.98 ? 0 : 30)

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    })
  }

  const handleNavigation = (event, scrollTo, to = '/') => {
    event.preventDefault()

    setExpanded(false)
    setActiveHref(scrollTo || '#projects')
    clickLockUntilRef.current = Date.now() + 650

    if (to !== '/' && location.pathname === '/') {
      navigate(to)
      return
    }

    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => scrollToSection(scrollTo), 0)
      return
    }

    scrollToSection(scrollTo)
  }

  // Navbar scroll state
  useEffect(() => {
    if (location.pathname !== '/') return undefined

    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [location.pathname])

  // Active navbar item while scrolling (only for same-page sections)
  useEffect(() => {
    const sectionLinks = navLinks.filter(l => l.scrollTo)
    const sections = sectionLinks
      .map((link) => document.querySelector(link.scrollTo))
      .filter(Boolean)

    if (!sections.length) return

    let ticking = false

    const resolveActiveSection = () => {
      const navbarEl = document.querySelector('.navbar-solar')

      const navHeight = navbarEl
        ? navbarEl.offsetHeight
        : 80

      const activationPoint =
        window.scrollY + navHeight + 30

      const docHeight =
        document.documentElement.scrollHeight

      const viewportBottom =
        window.scrollY + window.innerHeight

      // Top of page
      if (window.scrollY <= 5) {
        return sectionLinks[0].scrollTo
      }

      // Bottom of page
      if (viewportBottom >= docHeight - 5) {
        return `#${sections[sections.length - 1].id}`
      }

      let currentSection = sections[0]
      let currentSectionTop = -Infinity

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY

        if (sectionTop <= activationPoint && sectionTop > currentSectionTop) {
          currentSection = section
          currentSectionTop = sectionTop
        }
      }

      return `#${currentSection.id}`
    }

    const updateActiveSection = () => {
      if (Date.now() < clickLockUntilRef.current) {
        ticking = false
        return
      }

      const newActiveHref = resolveActiveSection()

      setActiveHref((current) => (
        current === newActiveHref ? current : newActiveHref
      ))

      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return

      ticking = true

      window.requestAnimationFrame(
        updateActiveSection
      )
    }

    const handleResize = () => {
      updateActiveSection()
    }

    // Initial active state
    updateActiveSection()

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    window.addEventListener(
      'resize',
      handleResize,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )

      window.removeEventListener(
        'resize',
        handleResize
      )
    }
  }, [])

  return (
    <Navbar
      expand="lg"
      className={`navbar-solar fixed-top ${
        scrolled ? 'navbar-scrolled' : ''
      } ${
        expanded ? 'navbar-expanded' : ''
      }`}
      expanded={expanded}
    >
      <Container>
        <a
          href="/"
          className="navbar-brand"
          onClick={(event) =>
            handleNavigation(event, '#home')
          }
          end
        >
          <span className="brand-mark">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="#f9a825"
                stroke="none"
              />

              <g strokeLinecap="round">
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
              </g>
            </svg>
          </span>

          <span className="brand-name">
            Sourabh{' '}
            <span>Solar Solutions</span>
          </span>
        </a>

        <Navbar.Toggle
          aria-controls="solar-nav"
          className="navbar-toggler-solar"
          onClick={() =>
            setExpanded((v) => !v)
          }
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </Navbar.Toggle>

        <Navbar.Collapse id="solar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className={`nav-link ${
                  link.to === '/projects'
                    ? location.pathname === '/projects' || (location.pathname === '/' && activeHref === link.scrollTo) ? 'active' : ''
                    : location.pathname === '/' && activeHref === link.scrollTo ? 'active' : ''
                }`}
                  onClick={(event) => handleNavigation(event, link.scrollTo, link.to)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/"
              className="nav-cta ms-lg-3"
              onClick={(event) =>
                handleNavigation(event, '#contact')
              }
            >
              Get a Quote

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
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