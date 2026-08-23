import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const testimonials = [
  {
    name: 'Requirement Analysis',
    role: 'Before installation',
    quote:
      'Every solar plan starts with understanding your energy needs, site conditions, and long-term goals.',
  },
  {
    name: 'Professional Installation',
    role: 'During execution',
    quote:
      'Our team coordinates supply, installation, commissioning, and documentation for a clear project journey.',
  },
  {
    name: 'Reliable Equipment',
    role: 'For every application',
    quote:
      'Residential, commercial, agricultural, and institutional requirements are matched with practical solar solutions.',
  },
  {
    name: 'Ongoing Support',
    role: 'After commissioning',
    quote:
      'Maintenance, net metering, subsidy guidance, and after-sales assistance remain available after handover.',
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[active]

  return (
    <section id="testimonials" className="testimonials-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">Our Commitment</span>
            <h2 className="section-heading">What You Can Expect</h2>
            <p className="section-sub">
              A clear, dependable approach to solar planning, installation, and support.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="testimonial-wrap" style={{ position: 'relative', maxWidth: '860px', margin: '0 auto' }}>
            <button
              type="button"
              className="testimonial-prev"
              aria-label="Previous testimonial"
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="testimonial-next"
              aria-label="Next testimonial"
              onClick={() => setActive((active + 1) % testimonials.length)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <div className="testimonial-card">
              <span className="quote-mark" aria-hidden="true">“</span>
              <div className="testimonial-stars" aria-label="Service commitment">
                {'End-to-end support'}
              </div>
              <p className="testimonial-text">{current.quote}</p>
              <div className="testimonial-person">
                <span className="testimonial-avatar">{current.name.charAt(0)}</span>
                <div>
                  <h6>{current.name}</h6>
                  <p>{current.role}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="testimonial-dots">
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-${index}`}
              type="button"
              className={`testimonial-dot ${index === active ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
