import { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="text-center mb-5">
          <p className="section-eyebrow text-warning fw-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="fw-bold mb-3">Request a Free Site Survey</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
            Tell us about your energy needs and we will get back to you within 24 hours.
          </p>
        </div>
        <Row className="g-5">
          <Col lg={5}>
            <div className="contact-info h-100">
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon">☎</div>
                <div>
                  <h6 className="fw-bold mb-1">Phone / WhatsApp</h6>
                  <a className="text-decoration-none" href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon">✉</div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <a className="text-decoration-none" href="mailto:info@sourabhsolar.in">
                    info@sourabhsolar.in
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon">⌖</div>
                <div>
                  <h6 className="fw-bold mb-1">Address</h6>
                  <p className="mb-0">
                    Sourabh Solar Solution, Nashik, Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="contact-icon">◷</div>
                <div>
                  <h6 className="fw-bold mb-1">Working Hours</h6>
                  <p className="mb-0">Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="bg-white rounded-4 p-4 shadow-sm">
              {submitted ? (
                <Alert variant="success" className="mb-0">
                  <Alert.Heading>Thank you!</Alert.Heading>
                  <p className="mb-0">
                    Your enquiry has been received. Our team will contact you shortly.
                  </p>
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="contact-name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="contact-phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="+91" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="contact-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="you@example.com" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="contact-type">
                        <Form.Label>Installation Type</Form.Label>
                        <Form.Select defaultValue="Residential">
                          <option>Residential</option>
                          <option>Commercial</option>
                          <option>Industrial</option>
                          <option>Water Pump</option>
                          <option>Maintenance / AMC</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="contact-message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Tell us about your energy needs..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="d-grid d-sm-block">
                      <Button type="submit" variant="warning" size="lg" className="fw-semibold px-5">
                        Send Enquiry
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
