import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const faqs = [
  {
    question: 'What solar solutions does Sourabh Solar Solutions provide?',
    answer:
      'We provide solar power systems for residential, commercial, industrial, and agricultural applications — including on-grid, off-grid, and hybrid systems, solar water pumps, solar street lights, and complete EPC project execution.',
  },
  {
    question: 'Do you provide residential solar systems?',
    answer:
      'Yes. We provide rooftop solar systems for homes, including system design, supply, installation, and commissioning, along with net metering and subsidy assistance.',
  },
  {
    question: 'Do you provide commercial and industrial solar systems?',
    answer:
      'Yes. We design and install solar systems for offices, shops, commercial establishments, factories, and industries, sized to the actual energy requirement and consumption pattern.',
  },
  {
    question: 'What is the difference between on-grid, off-grid, and hybrid systems?',
    answer:
      'On-grid systems are connected to the electricity grid and export surplus power through net metering. Off-grid systems work independently with battery backup. Hybrid systems combine both, giving grid connection plus battery backup for uninterrupted power.',
  },
  {
    question: 'Do you provide solar water pumps?',
    answer:
      'Yes. We supply and install solar-powered water pumping systems for irrigation, agriculture, and water supply applications, including sizing, supply, installation, and commissioning.',
  },
  {
    question: 'Do you supply solar street lights?',
    answer:
      'Yes. We supply and install solar-powered street lighting solutions for roads, communities, campuses, public areas, and infrastructure projects.',
  },
  {
    question: 'What is included in your EPC project service?',
    answer:
      'Our EPC service covers engineering, procurement, and construction — from site assessment and system design to material supply, installation, and commissioning of the solar project.',
  },
  {
    question: 'Do you provide maintenance services?',
    answer:
      'Yes. We provide annual maintenance contracts and AMC services including regular cleaning, inspection, and servicing to keep your solar system performing at its best.',
  },
  {
    question: 'Do you provide net metering and government subsidy assistance?',
    answer:
      'Yes. We assist with net metering applications and documentation, and guide you through applicable government subsidy schemes to make solar adoption more affordable.',
  },
  {
    question: 'How can I request a quotation?',
    answer:
      'You can request a quotation through the contact form, by phone at +91 76971 55558, by email, or on WhatsApp. Share your requirement and our team will get back to you with the right solar solution.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq-section section-pad">
      <Container>
        <Row className="g-5">
          <Col lg={4}>
            <Reveal>
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="section-sub">
                Common questions about our solar products, projects, and process.
              </p>
              <a href="#contact" className="btn-outline-green">
                Ask Us Anything
              </a>
            </Reveal>
          </Col>
          <Col lg={8}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <Reveal key={faq.question} delay={Math.min(index * 60, 300)}>
                  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      {faq.question}
                      <span className="faq-toggle" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="faq-answer-wrap"
                      style={{ maxHeight: isOpen ? '300px' : '0' }}
                    >
                      <div className="faq-answer">{faq.answer}</div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Faq
