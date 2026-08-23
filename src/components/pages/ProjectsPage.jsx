import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Street Lights', 'Water Pumps', 'Institutional']

const projects = [
  {
    title: 'Residential Rooftop Solar Solutions',
    type: 'Residential',
    category: 'Residential',
    location: 'Dhar, Madhya Pradesh',
    solutionType: 'On-Grid System',
    scope: 'System Design + Supply + Installation',
    details: 'Custom rooftop systems planned around household energy needs, available space, and future savings goals.',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Commercial Solar Solutions',
    type: 'Commercial',
    category: 'Commercial',
    location: 'Dhar and nearby regions',
    solutionType: 'On-Grid System',
    scope: 'System Design + Supply + Installation',
    details: 'Practical solar planning for offices, shops, and commercial establishments seeking reliable daytime power.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Industrial Solar Solutions',
    type: 'Industrial',
    category: 'Industrial',
    location: 'Madhya Pradesh',
    solutionType: 'Hybrid System',
    scope: 'System Design + Supply + Installation',
    details: 'System design and execution support for high-demand facilities and large energy consumers.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Solar Street Lighting Solutions',
    type: 'Street Lights',
    category: 'Street Lights',
    location: 'Communities and public areas',
    solutionType: 'Solar Street Lights',
    scope: 'Supply + Installation',
    details: 'Independent lighting systems for roads, villages, campuses, and public infrastructure.',
    image: 'https://images.unsplash.com/photo-1775646239349-49a01e01e203?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Solar Water Pumping Solutions',
    type: 'Water Pumps',
    category: 'Water Pumps',
    location: 'Agricultural and community sites',
    solutionType: 'Solar Water Pump',
    scope: 'Supply + Installation + Commissioning',
    details: 'Solar-powered pumping planned for irrigation, agriculture, and community water supply requirements.',
    image: 'https://images.unsplash.com/photo-1770178995777-31f3af9e6aa2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Institutional Solar Solutions',
    type: 'Institutional',
    category: 'Institutional',
    location: 'Schools, offices, and institutions',
    solutionType: 'Off-Grid System',
    scope: 'System Design + Supply + Installation',
    details: 'Dependable solar infrastructure planned for institutions, campuses, and public-facing facilities.',
    image: 'https://images.unsplash.com/photo-1746570059096-fdfa39611486?q=80&w=1000&auto=format&fit=crop',
  },
]

function ProjectsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="projects-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">Project Solutions</span>
            <h2 className="section-heading">Solar Projects We Deliver</h2>
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
            <Col xs={12} md={6} lg={4} key={`${project.category}-${index}`}>
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
                  </div>
                </article>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProjectsPage