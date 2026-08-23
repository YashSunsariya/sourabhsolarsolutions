import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const trustItems = [
  {
    icon: '🪪',
    title: 'GST Registered',
    text: 'GSTIN 23GHNPS6644L2ZI · Registered under the Regular scheme.',
  },
  {
    icon: '🏢',
    title: 'Udyam / MSME Registered',
    text: 'Udyam No. UDYAM-MP-17-0026504 · Registered as a Micro Enterprise.',
  },
  {
    icon: '📜',
    title: 'PAN Registered',
    text: 'PAN GHNPS6644L · Income Tax PAN registered business.',
  },
  {
    icon: '🏛',
    title: 'Business Constitution',
    text: 'Sole Proprietorship owned and operated by Dr. Sourabh Soni.',
  },
  {
    icon: '🤝',
    title: 'Registered Since 2023',
    text: 'Operating from Dhar, Madhya Pradesh since 2023.',
  },
  {
    icon: '🏅',
    title: 'Verified Contact Details',
    text: 'Phone +91 76971 55558 · sourabhsolarsolutions@gmail.com',
  },
]

function Trust() {
  return (
    <section id="trust" className="trust-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">Trust &amp; Credentials</span>
            <h2 className="section-heading">A Registered, Credible Solar Partner</h2>
            <p className="section-sub">
              Sourabh Solar Solutions operates as a registered business with the
              credentials required for residential, commercial, industrial, and
              institutional solar work.
            </p>
          </div>
        </Reveal>
        <Row className="g-4 mt-2">
          {trustItems.map((item, index) => (
            <Col xs={6} sm={6} lg={4} key={item.title}>
              <Reveal delay={(index % 3) * 90}>
                <div className="trust-item">
                  <span className="trust-item-icon" aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
        <Reveal delay={150}>
          <p className="trust-note">
            Registered solar solutions provider — GST, Udyam, and PAN verified details
            above.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

export default Trust
