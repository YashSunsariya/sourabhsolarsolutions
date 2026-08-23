import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const stats = [
  {
    value: '2023',
    label: 'Founded',
    hint: 'Serving with purpose',
  },
  {
    value: 'MP',
    label: 'Primary Service Area',
    hint: 'Dhar and nearby regions',
  },
  {
    value: 'EPC',
    label: 'Delivery Model',
    hint: 'From design to commissioning',
  },
  {
    value: 'AMC',
    label: 'After-Sales Support',
    hint: 'Maintenance and assistance',
  },
]

function Stats() {
  return (
    <section className="stats-strip" aria-label="Company statistics">
      <Container>
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col xs={6} md={3} key={stat.label}>
              <Reveal delay={index * 90}>
                <div className="stats-item">
                  <div className="stats-value">{stat.value}</div>
                  <div className="stats-label">{stat.label}</div>
                  <div className="stats-hint">{stat.hint}</div>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Stats
