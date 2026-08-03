import { Col, Container, Row } from 'react-bootstrap'

const testimonials = [
  {
    name: 'Ramesh Patil',
    role: 'Homeowner, Nashik',
    quote:
      'Electricity bill dropped from ₹4,500 to under ₹400 a month. The team handled everything — subsidy, net meter, installation. Highly recommended!',
  },
  {
    name: 'Priya Deshmukh',
    role: 'Business Owner',
    quote:
      'Professional and punctual. Their commercial rooftop plant runs flawlessly and the payback has been even faster than promised.',
  },
  {
    name: 'Suresh Jadhav',
    role: 'Farmer',
    quote:
      'Installed a solar water pump for our farm. Water flows through the day with zero diesel cost. Truly life-changing service.',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section py-5">
      <Container>
        <div className="text-center mb-5">
          <p className="section-eyebrow text-warning fw-semibold mb-2">
            What Our Clients Say
          </p>
          <h2 className="fw-bold mb-3">Trusted by Families & Businesses</h2>
        </div>
        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col md={4} key={testimonial.name}>
              <div className="testimonial-card bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="text-warning fs-4 mb-2" aria-hidden="true">
                  {'★★★★★'}
                </div>
                <p className="mb-3">{testimonial.quote}</p>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar-circle d-flex align-items-center justify-content-center fw-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="fw-bold">{testimonial.name}</div>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
