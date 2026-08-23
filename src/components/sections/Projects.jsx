import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Street Lights', 'Water Pumps', 'Institutional']

// NOTE: Project cards below are editable placeholders.
// Replace with real project names, locations, solution types and scopes
// when actual project information is provided.
const projects = [
  {
    title: '[Residential Rooftop Solar Project]',
    type: 'Residential',
    category: 'Residential',
    location: '[Location]',
    solutionType: 'On-Grid System',
    scope: 'System Design + Supply + Installation',
    details: 'Add project details here — system capacity, energy output, and savings.',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: '[Commercial Solar Project]',
    type: 'Commercial',
    category: 'Commercial',
    location: '[Location]',
    solutionType: 'On-Grid System',
    scope: 'System Design + Supply + Installation',
    details: 'Add project details here — capacity, usage, and cost savings achieved.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: '[Industrial Solar Project]',
    type: 'Industrial',
    category: 'Industrial',
    location: '[Location]',
    solutionType: 'Hybrid System',
    scope: 'System Design + Supply + Installation',
    details: 'Add project details here — installed capacity and energy contribution.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: '[Solar Street Lighting Project]',
    type: 'Street Lights',
    category: 'Street Lights',
    location: '[Location]',
    solutionType: 'Solar Street Lights',
    scope: 'Supply + Installation',
    details: 'Add project details here — number of street lights, coverage, and outcomes.',
    image: 'https://images.unsplash.com/photo-1775646239349-49a01e01e203?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: '[Solar Water Pumping Project]',
    type: 'Water Pumps',
    category: 'Water Pumps',
    location: '[Location]',
    solutionType: 'Solar Water Pump',
    scope: 'Supply + Installation + Commissioning',
    details: 'Add project details here — pump capacity, water output, and beneficiaries.',
    image: 'https://images.unsplash.com/photo-1770178995777-31f3af9e6aa2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: '[Institutional Solar Project]',
    type: 'Institutional',
    category: 'Institutional',
    location: '[Location]',
    solutionType: 'Off-Grid System',
    scope: 'System Design + Supply + Installation',
    details: 'Add project details here — scope, execution timeline, and handover outcome.',
    image: 'https://images.unsplash.com/photo-1746570059096-fdfa39611486?q=80&w=1000&auto=format&fit=crop',
  },
]

function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="projects-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">Case Studies</span>
            <h2 className="section-heading">Our Projects</h2>
            <p className="section-sub">
              A look at the solar and infrastructure projects we deliver across
              residential, commercial, industrial, agricultural, and institutional
              segments.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="project-tabs" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                className={`project-tab ${active === category ? 'active' : ''}`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>
        <Row className="g-4">
          {filtered.map((project, index) => (
            <Col md={6} lg={4} key={`${project.category}-${index}`}>
              <Reveal delay={(index % 3) * 80}>
                <article className="case-card">
                  <div className="case-card-media">
                    <img src={project.image} alt={`${project.type} project`} loading="lazy" />
                    <span className="project-badge">{project.type}</span>
                  </div>
                  <div className="case-card-body">
                    <h3>{project.title}</h3>
                    <dl className="case-meta">
                      <div className="case-meta-row">
                        <dt>Location</dt>
                        <dd>{project.location}</dd>
                      </div>
                      <div className="case-meta-row">
                        <dt>Solution Type</dt>
                        <dd>{project.solutionType}</dd>
                      </div>
                      <div className="case-meta-row">
                        <dt>Project Scope</dt>
                        <dd>{project.scope}</dd>
                      </div>
                    </dl>
                    <p className="case-details">{project.details}</p>
                    <a href="#contact" className="case-link">
                      View Project
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Reveal>
            </Col>
          ))}
        </Row>
        <p className="project-placeholder-note">
          Project cards shown are placeholders and will be updated with actual projects.
        </p>
      </Container>
    </section>
  )
}

export default Projects
