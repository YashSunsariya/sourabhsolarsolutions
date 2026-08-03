import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="footer-section text-white py-5">
      <Container>
        <Row className="g-4">
          <Col lg={5}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src="/favicon.svg" width="36" height="36" alt="Sourabh Solar Solution logo" />
              <span className="brand-name fs-4 text-white">
                Sourabh <span>Solar Solution</span>
              </span>
            </div>
            <p className="text-white-50 mb-0">
              Powering a sustainable future with reliable, affordable solar energy
              solutions for homes, businesses, and farms.
            </p>
          </Col>
          <Col md={6} lg={3}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="footer-links list-unstyled mb-0">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={6} lg={4}>
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <ul className="list-unstyled text-white-50 mb-0">
              <li>+91 98765 43210</li>
              <li>info@sourabhsolar.in</li>
              <li>Nashik, Maharashtra, India</li>
            </ul>
          </Col>
        </Row>
        <hr className="border-secondary my-4" />
        <div className="text-center text-white-50 small">
          © {new Date().getFullYear()} Sourabh Solar Solution. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer
