import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

// NOTE: Editable placeholders. Replace `value` with the actual figures
// (e.g. "250+", "12", "40", "15+") as soon as real data is available.
const stats = [
  {
    value: '—',
    label: 'Projects Completed',
    hint: 'Add actual figure',
  },
  {
    value: '—',
    label: 'MW Installed',
    hint: 'Add actual figure',
  },
  {
    value: '—',
    label: 'Cities Served',
    hint: 'Add actual figure',
  },
  {
    value: '—',
    label: 'Years of Experience',
    hint: 'Add actual figure',
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
