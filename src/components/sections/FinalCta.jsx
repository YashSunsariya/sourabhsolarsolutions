import { Container } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

function FinalCta() {
  return (
    <section id="cta" className="cta-section">
      <Container>
        <Reveal>
          <div className="cta-inner">
            <span className="section-eyebrow" style={{ justifyContent: 'center', color: 'var(--amber-400)' }}>
              Let's Get Started
            </span>
            <h2 className="section-heading">Let's Power Your Future with Solar</h2>
            <p className="section-sub">
              Tell us about your requirement and our team will help you find the right
              solar solution — from design and supply to installation and maintenance.
            </p>
            <div className="cta-actions">
              <a href="#contact" className="btn-solar">
                Request a Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Us
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default FinalCta
