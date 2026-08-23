import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const features = [
  {
    title: 'Supply & Installation',
    text: 'Complete material supply, installation, and commissioning for solar projects.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4L14 13l-3-3 3.7-3.7Z" />
      </svg>
    ),
  },
  {
    title: 'Solar Street Lighting',
    text: 'Street lighting systems for roads, villages, and public areas.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 3h8v2l-1 3v8h-1v5h-4v-5H9V8L8 5V3ZM9 12h6" />
      </svg>
    ),
  },
  {
    title: 'Solar Infrastructure',
    text: 'Institutional and community-scale solar installations.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="7" rx="1" />
        <rect x="3" y="15" width="18" height="5" rx="1" />
        <path d="M7 4 5 11M12 4v7M17 4l2 7" />
      </svg>
    ),
  },
  {
    title: 'Institutional Solar Solutions',
    text: 'Solar systems for schools, colleges, offices, and institutions.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18M4 18h16M6 18v-6M10 18v-6M14 18v-6M18 18v-6M3 9l9-6 9 6H3Z" />
      </svg>
    ),
  },
  {
    title: 'Solar Water Pumping',
    text: 'Solar-powered pumping for community water supply and irrigation.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v8M8 7h8M6 15a6 6 0 0 0 12 0c0-2-1-3.5-2-5h-8c-1 1.5-2 3-2 5Z" />
      </svg>
    ),
  },
  {
    title: 'End-to-End Support',
    text: 'From requirement analysis to handover and after-sales support.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

function Government() {
  return (
    <section id="government" className="government-section section-pad">
      <div className="government-inner">
        <Container>
          <Reveal>
            <div className="section-head-wrap center">
              <span className="section-eyebrow">Government &amp; Institutional</span>
              <h2 className="section-heading">
                Solar Infrastructure for Public &amp; Institutional Projects
              </h2>
              <p className="section-sub">
                From supply and installation to end-to-end project support,
                Sourabh Solar Solutions delivers dependable solar infrastructure for
                government and institutional requirements.
              </p>
              <a href="#contact" className="gov-cta" style={{ marginTop: '20px' }}>
                Discuss Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </Reveal>

          <div className="gov-project-panel">
            <Row className="g-0">
              <Col lg={7}>
                <Reveal>
                  <div className="gov-media">
                    <img
                      src="https://images.unsplash.com/photo-1746570059096-fdfa39611486?q=80&w=1400&auto=format&fit=crop"
                      alt="Solar panel powering public infrastructure"
                      loading="lazy"
                    />
                    <div className="gov-media-tag">Public Infrastructure</div>
                    <div className="gov-media-caption">
                      <h6>Solar-Powered Public Infrastructure</h6>
                      <p>Dependable energy for roads, villages, campuses &amp; institutions.</p>
                    </div>
                  </div>
                </Reveal>
              </Col>
              <Col lg={5}>
                <Reveal delay={120}>
                  <div className="gov-features-panel">
                    {features.map((feature) => (
                      <div className="gov-feature" key={feature.title}>
                        <span className="gov-feature-icon">{feature.icon}</span>
                        <div>
                          <h6>{feature.title}</h6>
                          <p>{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Government
