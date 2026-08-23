import { Container } from 'react-bootstrap'

const trustPoints = ['Quality Solutions', 'Professional Installation', 'End-to-End Support']

function Hero() {
  return (
    <section id="home" className="hero">
      <Container>
        <div className="hero-content">
          <span className="hero-eyebrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
            </svg>
            Solar Energy · Infrastructure · Project Solutions
          </span>
          <h1 className="hero-title">
            Powering a Cleaner <span className="text-sun">Tomorrow, Today</span>
          </h1>
          <p className="hero-subtitle">
            Complete solar solutions for residential, commercial, industrial, and
            agricultural applications — from design and supply to installation and
            maintenance.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-solar">
              Get a Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#solutions" className="btn-ghost">
              Explore Our Solutions
            </a>
          </div>
          <div className="hero-trust">
            {trustPoints.map((point) => (
              <span className="hero-trust-item" key={point}>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {point}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
