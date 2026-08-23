import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'

const featuredProjects = [
  {
    title: 'Residential Rooftop Solar Solutions',
    type: 'Residential',
    category: 'Residential',
    location: 'Dhar, Madhya Pradesh',
    solutionType: 'On-Grid System',
    scope: 'System Design + Supply + Installation',
    details: 'Custom rooftop systems planned around household energy needs and available space.',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Commercial Solar Solutions',
    type: 'Commercial',
    category: 'Commercial',
    location: 'Dhar and nearby regions',
    solutionType: 'On-Grid System',
    scope: 'System Design + Supply + Installation',
    details: 'Practical solar planning for offices, shops, and commercial establishments.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Industrial Solar Solutions',
    type: 'Industrial',
    category: 'Industrial',
    location: 'Madhya Pradesh',
    solutionType: 'Hybrid System',
    scope: 'System Design + Supply + Installation',
    details: 'System design and execution support for high-demand facilities.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1000&auto=format&fit=crop',
  },
]

function FeaturedProjects() {
  return (
    <section id="projects" className="projects-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">Project Solutions</span>
            <h2 className="section-heading">Featured Solar Solutions</h2>
            <p className="section-sub">
              A look at some of our recent solar and infrastructure projects.
            </p>
          </div>
        </Reveal>
        <Row className="g-4">
          {featuredProjects.map((project, index) => (
            <Col md={6} lg={4} key={`${project.category}-${index}`}>
              <Reveal delay={index * 80}>
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
        <Reveal delay={200}>
          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-primary btn-lg px-5">
              View All Projects
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default FeaturedProjects