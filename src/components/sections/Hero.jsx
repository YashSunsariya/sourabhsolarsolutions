import { Button, Col, Container, Row } from 'react-bootstrap'

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={7} className="text-white hero-content">
            <p className="hero-eyebrow text-warning fw-semibold mb-3">
              Harness the Power of the Sun
            </p>
            <h1 className="hero-title mb-3">
              Solar Solutions for a Brighter, Greener Future
            </h1>
            <p className="hero-subtitle mb-4">
              Sourabh Solar Solution designs, installs, and maintains high-quality
              solar power systems for homes and businesses — saving you money while
              protecting the planet.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#contact">
                <Button variant="warning" size="lg" className="fw-semibold">
                  Get a Free Quote
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline-light"
                  size="lg"
                  className="fw-semibold"
                >
                  Explore Services
                </Button>
              </a>
            </div>
          </Col>
          <Col lg={5} className="d-none d-lg-block text-center">
            <img
              src="/favicon.svg"
              alt="Solar energy"
              className="hero-sun"
              width="320"
              height="320"
            />
          </Col>
        </Row>
      </Container>
      <div className="hero-stats">
        <Container>
          <Row className="text-center text-white g-4">
            <Col xs={6} md={3}>
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Installations</div>
            </Col>
            <Col xs={6} md={3}>
              <div className="hero-stat-value">12+</div>
              <div className="hero-stat-label">Years Experience</div>
            </Col>
            <Col xs={6} md={3}>
              <div className="hero-stat-value">3 MW</div>
              <div className="hero-stat-label">Clean Energy</div>
            </Col>
            <Col xs={6} md={3}>
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Satisfied Customers</div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Hero
