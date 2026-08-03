import { Col, Container, Row } from 'react-bootstrap'

const features = [
  {
    title: 'Trusted Expertise',
    text: 'A team of certified engineers and technicians with years of hands-on solar experience.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
        <path d="M12 2 4 5v6c0 5.25 3.4 10.16 8 11 4.6-.84 8-5.75 8-11V5l-8-3Zm-1.5 14.5-3.8-3.8 1.4-1.4 2.4 2.4 5.6-5.6 1.4 1.4-7 7Z" />
      </svg>
    ),
  },
  {
    title: 'Quality Products',
    text: 'We use top-tier panels, inverters, and batteries backed by strong manufacturer warranties.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-5 14H7v-2h7v2Zm3-4H7v-2h10v2Zm0-4H7V7h10v2Z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Pricing',
    text: 'Transparent quotes, flexible payment plans, and maximum subsidy assistance.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-1.2A4 4 0 0 1 8.5 13l1.8-1a2 2 0 0 0 3.7.9c.5-.8-.3-1.4-1.8-1.9-2.2-.7-3.6-1.9-3.6-3.9a3 3 0 0 1 2-2.8V4h2v1.1a3.6 3.6 0 0 1 2.9 2.7l-1.9.6a1.7 1.7 0 0 0-3.1-.4c-.5.8.3 1.4 1.8 1.9 2.2.7 3.6 1.9 3.6 3.9a3 3 0 0 1-2.3 2.9V17Z" />
      </svg>
    ),
  },
  {
    title: 'Full Support',
    text: 'From site survey and permits to installation, commissioning, and lifetime after-sales care.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm4 11.5c-.2.9-1.1 1.5-2 1.8a9 9 0 0 1-3.6 0c-.9-.3-1.8-.9-2-1.8-.1-.6.3-1.1.9-1.3.6-.2 1.2.1 1.5.6.1.2.4.3.6.4.3 0 .6-.1.9-.1.3 0 .6.1.9.1.2-.1.5-.2.6-.4.3-.5.9-.8 1.5-.6.6.2 1 .7.9 1.3Z" />
      </svg>
    ),
  },
]

function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={5}>
            <div className="about-card bg-white shadow-sm rounded-4 p-4">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p className="text-muted">
                Sourabh Solar Solution is a trusted provider of solar energy systems.
                We help residential and commercial customers cut electricity costs and
                reduce their carbon footprint with reliable, high-performance solar
                installations.
              </p>
              <p className="text-muted">
                Our complete service covers consultation, design, government subsidy
                paperwork, installation, net metering, and long-term maintenance — so
                you can go solar with total peace of mind.
              </p>
              <a href="#contact" className="btn btn-warning fw-semibold px-4">
                Talk to an Expert
              </a>
            </div>
          </Col>
          <Col lg={7}>
            <Row className="g-4">
              {features.map((feature) => (
                <Col md={6} key={feature.title}>
                  <div className="feature-card bg-white rounded-4 p-4 h-100 shadow-sm">
                    <div className="feature-icon text-warning mb-3">{feature.icon}</div>
                    <h5 className="fw-bold mb-2">{feature.title}</h5>
                    <p className="text-muted mb-0">{feature.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
