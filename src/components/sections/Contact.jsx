import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const projectTypes = [
  'Residential Solar',
  'Commercial Solar',
  'Industrial Solar',
  'On-Grid System',
  'Off-Grid System',
  'Hybrid System',
  'Solar Water Pump',
  'Solar Street Light',
  'EPC Project',
  'Annual Maintenance / AMC',
  'Net Metering Assistance',
  'Government Subsidy Assistance',
  'Other',
]

const contactRows = [
  {
    label: 'Phone / WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
    line1: '+91 76971 55558',
    line1Href: 'tel:+917697155558',
    line2: 'WhatsApp: +91 76971 55558',
    line2Href: 'https://wa.me/917697155558',
  },
  {
    label: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
    line1: 'sourabhsolarsolutions@gmail.com',
    line1Href: 'mailto:sourabhsolarsolutions@gmail.com',
  },
  {
    label: 'Address',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    line1: 'Sourabh Solar Solutions',
    line2: 'D4/2, Shiv Vihar Colony, Dhar, Madhya Pradesh – 454001',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const WHATSAPP_NUMBER = '917697155558'

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(event.currentTarget))
    const message = [
      'New Solar Enquiry',
      `Name: ${data.name || '-'}`,
      `Phone: ${data.phone || '-'}`,
      `Email: ${data.email || '-'}`,
      `Project Type: ${data.projectType || '-'}`,
      `Requirement: ${data.requirement || '-'}`,
      `Message: ${data.message || '-'}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    if (!whatsappWindow) {
      window.location.assign(whatsappUrl)
      return
    }

    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section section-pad">
      <Container>
        <Reveal>
          <div className="contact-cta-banner">
            <div>
              <h2>Need a Solar Solution?</h2>
              <p>
                Share your requirement and our team will get back to you with the right
                solar solution.
              </p>
            </div>
            <div className="contact-cta-actions">
              <a href="#contact-form" className="btn-solar">
                Get a Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="https://wa.me/917697155558"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.49 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.8 9.8 0 0 1 6.98 2.9 9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.9 9.88m8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.48-8.42" />
                </svg>
                WhatsApp Us
              </a>
              <a href="tel:+917697155558" className="btn-call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </Reveal>
        <Row className="g-4 mt-2">
          <Col lg={5}>
            <Reveal>
              <div className="contact-info-panel">
                <h3>Contact Information</h3>
                <p>Reach out by phone, email, or WhatsApp — or visit us at our office in Dhar, Madhya Pradesh.</p>
                {contactRows.map((row) => (
                  <div className="contact-row" key={row.label}>
                    <span className="contact-row-icon">{row.icon}</span>
                    <div>
                      <h6>{row.label}</h6>
                      <p>
                        {row.line1Href ? (
                          <a href={row.line1Href}>{row.line1}</a>
                        ) : (
                          row.line1
                        )}
                        {row.line2 && (
                          <>
                            <br />
                            {row.line2Href ? (
                              <a href={row.line2Href}>{row.line2}</a>
                            ) : (
                              row.line2
                            )}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps?q=Dhar,Madhya%20Pradesh,India&output=embed"
                    title="Sourabh Solar Solutions location map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>
          </Col>
          <Col lg={7}>
            <Reveal delay={120}>
              <div className="contact-form-wrap" id="contact-form">
                {submitted ? (
                  <div className="form-success" role="status" aria-live="polite">
                    <span className="form-success-icon">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <h4>Thank You!</h4>
                    <p>
                      Your enquiry has been received. Our team will contact you shortly
                      to discuss your solar requirement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate={false}>
                    <h3>Send an Enquiry</h3>
                    <p>Fill in the form and our team will respond within 24 hours.</p>
                    <Row className="g-3">
                      <Col md={6}>
                        <label className="form-label-solar" htmlFor="contact-name">Name</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          className="form-control-solar"
                          placeholder="Your name"
                          autoComplete="name"
                          required
                        />
                      </Col>
                      <Col md={6}>
                        <label className="form-label-solar" htmlFor="contact-phone">Phone</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          className="form-control-solar"
                          placeholder="+91 00000 00000"
                          pattern="[0-9+()\-\s]{10,15}"
                          title="Enter a valid phone number (10-15 digits)"
                          autoComplete="tel"
                          required
                        />
                      </Col>
                      <Col md={6}>
                        <label className="form-label-solar" htmlFor="contact-email">Email</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className="form-control-solar"
                          placeholder="you@example.com"
                          autoComplete="email"
                        />
                      </Col>
                      <Col md={6}>
                        <label className="form-label-solar" htmlFor="contact-type">Project Type</label>
                        <select id="contact-type" name="projectType" className="form-select-solar" defaultValue="">
                          <option value="" disabled>
                            Select project type
                          </option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </Col>
                      <Col xs={12}>
                        <label className="form-label-solar" htmlFor="contact-requirement">Requirement</label>
                        <input
                          id="contact-requirement"
                          name="requirement"
                          type="text"
                          className="form-control-solar"
                          placeholder="e.g. 5 kW rooftop solar for home"
                        />
                      </Col>
                      <Col xs={12}>
                        <label className="form-label-solar" htmlFor="contact-message">Message</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          className="form-control-solar"
                          placeholder="Tell us about your project or requirement..."
                        />
                      </Col>
                      <Col xs={12}>
                        <button type="submit" className="btn-solar" style={{ width: '100%' }}>
                          Submit Enquiry
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </button>
                      </Col>
                    </Row>
                  </form>
                )}
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
