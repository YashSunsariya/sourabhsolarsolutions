import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const reasons = [
  {
    title: 'Quality Products',
    text: 'Reliable solar products selected for long-term performance.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 4 5v6c0 5.25 3.4 10.16 8 11 4.6-.84 8-5.75 8-11V5l-8-3Zm-1.5 14.5-3.8-3.8 1.4-1.4 2.4 2.4 5.6-5.6 1.4 1.4-7 7Z" />
      </svg>
    ),
  },
  {
    title: 'Professional Installation',
    text: 'Proper planning, installation, and commissioning.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4L14 13l-3-3 3.7-3.7Z" />
      </svg>
    ),
  },
  {
    title: 'End-to-End Solutions',
    text: 'From product selection to installation and project completion.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Government & Institutional Capability',
    text: 'Solar infrastructure and installation capability for government and institutional requirements.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18M4 18h16M6 18v-6M10 18v-6M14 18v-6M18 18v-6M3 9l9-6 9 6H3Z" />
      </svg>
    ),
  },
  {
    title: 'Cost-Efficient Solutions',
    text: 'Solutions designed around project requirements and long-term value.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-1.2A4 4 0 0 1 8.5 13l1.8-1a2 2 0 0 0 3.7.9c.5-.8-.3-1.4-1.8-1.9-2.2-.7-3.6-1.9-3.6-3.9a3 3 0 0 1 2-2.8V4h2v1.1a3.6 3.6 0 0 1 2.9 2.7l-1.9.6a1.7 1.7 0 0 0-3.1-.4c-.5.8.3 1.4 1.8 1.9 2.2.7 3.6 1.9 3.6 3.9a3 3 0 0 1-2.3 2.9V17Z" />
      </svg>
    ),
  },
  {
    title: 'After-Sales Support',
    text: 'Reliable support after project completion.',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm4 11.5c-.2.9-1.1 1.5-2 1.8a9 9 0 0 1-3.6 0c-.9-.3-1.8-.9-2-1.8-.1-.6.3-1.1.9-1.3.6-.2 1.2.1 1.5.6.1.2.4.3.6.4.3 0 .6-.1.9-.1.3 0 .6.1.9.1.2-.1.5-.2.6-.4.3-.5.9-.8 1.5-.6.6.2 1 .7.9 1.3Z" />
      </svg>
    ),
  },
]

function WhyChoose() {
  return (
    <section id="why" className="why-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">Why Us</span>
            <h2 className="section-heading">Why Choose Sourabh Solar Solutions</h2>
            <p className="section-sub">
              A dependable solar partner for residential, commercial, industrial,
              agricultural, and institutional projects — built on quality, execution,
              and support.
            </p>
          </div>
        </Reveal>
        <Row className="g-4 mt-2">
          {reasons.map((reason, index) => (
            <Col xs={6} md={6} lg={4} key={reason.title}>
              <Reveal delay={(index % 3) * 90}>
                <div className="why-card">
                  <span className="why-card-icon">{reason.icon}</span>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default WhyChoose
