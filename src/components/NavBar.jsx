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
  const [activeHref, setActiveHref] = useState('#home')

  const clickLockUntilRef = useRef(0)

  const handleNavigation = (event, href) => {
    event.preventDefault()

    setExpanded(false)
    setActiveHref(href)

    const target = document.querySelector(href)

    if (!target) return

    const navbarEl = document.querySelector('.navbar-solar')
    const navHeight = navbarEl
      ? navbarEl.offsetHeight
      : 80

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navHeight

    const travelDistance = Math.abs(window.scrollY - targetPosition)
    const clickLockDuration = Math.min(
      2200,
      Math.max(900, travelDistance / 8),
    )

    clickLockUntilRef.current = Date.now() + clickLockDuration

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    })
  }

  // Navbar scroll state
  useEffect(() => {
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
  }, [])

  // Active navbar item while scrolling
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
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
        return '#home'
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
        window.setTimeout(() => {
          handleScroll()
        }, clickLockUntilRef.current - Date.now())
        ticking = false
        return
      }

      const newActiveHref = resolveActiveSection()

      setActiveHref((current) =>
        current === newActiveHref
          ? current
          : newActiveHref
      )

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
    setActiveHref(resolveActiveSection())

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
        <Navbar.Brand
          href="#home"
          onClick={(event) =>
            handleNavigation(event, '#home')
          }
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
        </Navbar.Brand>

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
              <Nav.Link
                key={link.href}
                href={link.href}
                active={false}
                className={
                  activeHref === link.href
                    ? 'active'
                    : ''
                }
                onClick={(event) =>
                  handleNavigation(
                    event,
                    link.href
                  )
                }
              >
                {link.label}
              </Nav.Link>
            ))}

            <a
              href="#contact"
              className="nav-cta ms-lg-3"
              onClick={(event) =>
                handleNavigation(
                  event,
                  '#contact'
                )
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