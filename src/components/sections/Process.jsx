import { Container } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const steps = [
  {
    number: '01',
    title: 'Requirement',
    text: 'Understand the client\u2019s energy / project requirements.',
  },
  {
    number: '02',
    title: 'Site Assessment',
    text: 'Analyze site conditions and technical requirements.',
  },
  {
    number: '03',
    title: 'Proposal',
    text: 'Prepare the appropriate solar solution and quotation.',
  },
  {
    number: '04',
    title: 'Installation',
    text: 'Professional installation and project execution.',
  },
  {
    number: '05',
    title: 'Support',
    text: 'Post-installation support and assistance.',
  },
]

function Process() {
  return (
    <section id="process" className="process-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-heading">A Clear, Professional Process</h2>
            <p className="section-sub">
              A structured approach that takes your project from requirement to
              completed installation — and beyond.
            </p>
          </div>
        </Reveal>
        <div className="process-grid mt-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <div className="process-step">
                {index < steps.length - 1 && (
                  <span className="process-connector" aria-hidden="true" />
                )}
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Process
