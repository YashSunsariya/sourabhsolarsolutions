import { Col, Container, Row } from 'react-bootstrap'

const services = [
  {
    title: 'Residential Solar',
    text: 'Rooftop solar systems for homes that cut bills by up to 90%.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden="true">
        <path d="M12 3 1 9l11 6 11-6-11-6Zm0 8.3L4.4 9 12 5.7 19.6 9 12 11.3ZM1 15l11 6 11-6v-2L12 19 1 13v2Z" />
      </svg>
    ),
  },
  {
    title: 'Commercial & Industrial',
    text: 'Large-scale solar plants that power offices, factories, and farms.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden="true">
        <path d="M7 2v11h3v9l7-12h-4l4-8H7Z" />
      </svg>
    ),
  },
  {
    title: 'Solar Water Pumps',
    text: 'Energy-efficient pumping solutions for agriculture and irrigation.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden="true">
        <path d="M4 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3V9h2v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4.2a5 5 0 0 0 0-9.6V3a1 1 0 0 0-1-1H4Zm16 4-2 3h4l-2-3Z" />
      </svg>
    ),
  },
  {
    title: 'Net Metering',
    text: 'Seamless grid connectivity so you earn credit for surplus energy.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden="true">
        <path d="M13 2 3 14h7v8l10-12h-7l0-8Z" />
      </svg>
    ),
  },
  {
    title: 'Subsidy Assistance',
    text: 'We complete all government subsidy paperwork on your behalf.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden="true">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-5 14H7v-2h7v2Zm3-4H7v-2h10v2Zm0-4H7V7h10v2Z" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & AMC',
    text: 'Cleaning, monitoring, and servicing to keep your system at peak output.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden="true">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-4 14h-2v-4H9a2 2 0 0 1-2-2 2 2 0 0 1 2-2h6v8Z" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="services-section py-5">
      <Container>
        <div className="text-center mb-5">
          <p className="section-eyebrow text-warning fw-semibold mb-2">What We Do</p>
          <h2 className="fw-bold mb-3">Our Solar Services</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
            End-to-end solar solutions tailored to your energy needs — from first
            consultation to lifetime support.
          </p>
        </div>
        <Row className="g-4">
          {services.map((service) => (
            <Col md={6} lg={4} key={service.title}>
              <div className="service-card bg-white rounded-4 p-4 h-100 shadow-sm">
                <div className="service-icon mb-3">{service.icon}</div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted mb-0">{service.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services
