import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const points = [
  'Residential, commercial & industrial solar systems',
  'On-grid, off-grid & hybrid systems',
  'Solar water pumps & solar street lights',
  'Design, supply, installation & maintenance',
]

const trustCards = [
  {
    icon: '📅',
    title: '2023',
    text: 'Established / Udyam Registered',
  },
  {
    icon: '🏢',
    title: 'MICRO',
    text: 'MSME Enterprise Type',
  },
  {
    icon: '🔆',
    title: '4',
    text: 'Business Segments Served',
  },
]

function About() {
  return (
    <section id="about" className="about-section section-pad">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <Reveal>
              <div className="about-media">
                <img
                  src="https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1200&auto=format&fit=crop"
                  alt="Solar panels installed on a rooftop by Sourabh Solar Solutions"
                  loading="lazy"
                />
                <div className="about-float-card">
                  <span className="about-float-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
                    </svg>
                  </span>
                  <div>
                    <h6>Dr. Sourabh Soni</h6>
                    <p>Founder &amp; Owner · Dhar, Madhya Pradesh</p>
                    <div className="about-founder-links">
                      <a href="tel:+917697155558">+91 76971 55558</a>
                      <a href="mailto:sourabhsolarsolutions@gmail.com">
                        sourabhsolarsolutions@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Col>
          <Col lg={6}>
            <Reveal delay={120}>
              <div className="about-text">
                <span className="section-eyebrow">About Us</span>
                <h2 className="section-heading">About Sourabh Solar Solutions</h2>
                <p>
                  Sourabh Solar Solutions is a solar energy company based in Dhar,
                  Madhya Pradesh, providing design, supply, installation, and
                  maintenance of residential, commercial, industrial, and agricultural
                  solar power systems.
                </p>
                <p>
                  We focus on quality, reliability, and customer satisfaction, helping
                  clients reduce electricity costs through clean, renewable energy.
                </p>
                <div className="about-points">
                  {points.map((point) => (
                    <span className="about-point" key={point}>
                      <span className="tick">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {point}
                    </span>
                  ))}
                </div>
                <div className="about-mission-vision">
                  <div>
                    <h6>Our Mission</h6>
                    <p>
                      Deliver premium solar solutions, promote clean energy, provide
                      excellent customer service, reduce electricity costs, and support
                      India&rsquo;s renewable energy mission.
                    </p>
                  </div>
                  <div>
                    <h6>Our Vision</h6>
                    <p>
                      To become one of India&rsquo;s most trusted solar energy solution
                      providers through innovative, sustainable, and cost-effective
                      renewable energy solutions.
                    </p>
                  </div>
                </div>
                <a href="#contact" className="btn-solar">
                  Discuss Your Requirement
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="about-trust-cards">
                {trustCards.map((card) => (
                  <div className="about-trust-card" key={card.title}>
                    <span className="icon" aria-hidden="true">{card.icon}</span>
                    <h6>{card.title}</h6>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
