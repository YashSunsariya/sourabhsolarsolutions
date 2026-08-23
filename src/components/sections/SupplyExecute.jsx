import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const supplied = [
  {
    title: 'Solar Power Systems',
    text: 'On-grid, off-grid, and hybrid solar systems for every scale.',
  },
  {
    title: 'Solar Water Pumps',
    text: 'Solar-powered pumping systems for irrigation and water supply.',
  },
  {
    title: 'Solar Street Lights',
    text: 'Standalone solar lighting systems for public and private areas.',
  },
  {
    title: 'Solar Components',
    text: 'Mounting structures, controllers, wiring, and related accessories.',
  },
]

const executed = [
  {
    title: 'Site Assessment',
    text: 'Analyzing site conditions, energy needs, and technical feasibility.',
  },
  {
    title: 'System Design',
    text: 'Designing the right solar solution for the project requirement.',
  },
  {
    title: 'Supply',
    text: 'Sourcing and delivering quality products and materials.',
  },
  {
    title: 'Installation & Commissioning',
    text: 'Professional installation, wiring, and system commissioning.',
  },
  {
    title: 'Net Metering Support',
    text: 'Assistance with net metering applications and approvals.',
  },
  {
    title: 'Maintenance & AMC',
    text: 'Scheduled cleaning, inspection, and maintenance services.',
  },
  {
    title: 'After-Sales Support',
    text: 'Dependable support and assistance after project completion.',
  },
]

function SupplyExecute() {
  return (
    <section id="supply-execute" className="supply-execute-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">Our Model</span>
            <h2 className="section-heading">We Supply. We Execute. We Support.</h2>
            <p className="section-sub">
              Sourabh Solar Solutions is not just a solar product seller — we handle
              the complete lifecycle, from product supply to full project execution.
            </p>
          </div>
        </Reveal>
        <Row className="g-4 mt-2">
          <Col lg={5}>
            <Reveal delay={100}>
              <div className="se-panel se-supply">
                <div className="se-panel-head">
                  <span className="se-panel-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
                      <path d="m3 8 9 5 9-5M12 13v8" />
                    </svg>
                  </span>
                  <div>
                    <h3>What We Supply</h3>
                    <p>Quality solar products &amp; components</p>
                  </div>
                </div>
                <ul className="se-list">
                  {supplied.map((item) => (
                    <li key={item.title}>
                      <span className="se-check">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Col>
          <Col lg={7}>
            <Reveal delay={200}>
              <div className="se-panel se-execute">
                <div className="se-panel-head">
                  <span className="se-panel-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4L14 13l-3-3 3.7-3.7Z" />
                      <path d="m12 6 6-3 3 6-3 3M16 16l3 5-5-3" />
                    </svg>
                  </span>
                  <div>
                    <h3>What We Execute</h3>
                    <p>Complete project services, from site to support</p>
                  </div>
                </div>
                <div className="se-execute-grid">
                  {executed.map((item) => (
                    <div className="se-execute-item" key={item.title}>
                      <span className="se-bullet">✦</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SupplyExecute
