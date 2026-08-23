import { Col, Container, Row } from 'react-bootstrap'

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const solutionLinks = [
  { label: 'Solar Power Systems', href: '#solutions' },
  { label: 'On-Grid & Off-Grid Systems', href: '#solutions' },
  { label: 'Solar Water Pumps', href: '#solutions' },
  { label: 'Solar Street Lights', href: '#solutions' },
  { label: 'EPC Projects', href: '#solutions' },
]

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
    label: 'Phone / WhatsApp',
    value: '+91 76971 55558',
    href: 'tel:+917697155558',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
    label: 'Email',
    value: 'sourabhsolarsolutions@gmail.com',
    href: 'mailto:sourabhsolarsolutions@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Address',
    value: 'D4/2, Shiv Vihar Colony, Dhar, Madhya Pradesh – 454001',
  },
]

function Footer() {
  return (
    <footer className="footer-solar py-5">
      <Container>
        <Row className="g-4 g-lg-5">
          <Col lg={4}>
            <div className="footer-brand">
              <span className="brand-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" fill="#f9a825" stroke="none" />
                  <g strokeLinecap="round">
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
                  </g>
                </svg>
              </span>
              <span className="brand-name">
                Sourabh <span>Solar Solutions</span>
              </span>
            </div>
            <p className="mb-1" style={{ fontSize: '0.93rem', color: '#ffffff', fontWeight: 600 }}>
              Powering a Cleaner Tomorrow, Today
            </p>
            <p className="mb-3" style={{ fontSize: '0.85rem', color: 'var(--amber-400)' }}>
              Design · Supply · Installation · Maintenance
            </p>
            <p className="mb-0" style={{ fontSize: '0.93rem' }}>
              Solar energy solutions for residential, commercial, industrial, and
              agricultural applications — delivered with quality, reliability, and
              customer satisfaction.
            </p>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <h6>Company</h6>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <h6>Solutions</h6>
            <ul className="footer-links">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={4} lg={3}>
            <h6>Contact</h6>
            {contactDetails.map((item) => (
              <div className="footer-contact-item" key={item.label}>
                <span className="fi">{item.icon}</span>
                <div>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <div className="footer-bottom">
          <span>© 2026 Sourabh Solar Solutions. All Rights Reserved.</span>
          <span>Design · Supply · Installation · Maintenance</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
