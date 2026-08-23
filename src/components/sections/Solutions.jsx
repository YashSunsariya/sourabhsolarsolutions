import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const solutions = [
  {
    title: 'Residential Solar',
    text: 'Rooftop solar power systems for homes, designed to reduce electricity bills with clean, reliable energy.',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=900&auto=format&fit=crop',
    alt: 'Residential rooftop solar panels',
  },
  {
    title: 'Commercial Solar',
    text: 'Solar systems for offices, shops, and commercial establishments to cut operating costs and improve sustainability.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=900&auto=format&fit=crop',
    alt: 'Commercial solar installation on a building',
  },
  {
    title: 'Industrial Solar',
    text: 'High-capacity solar power plants and systems for factories, industries, and large-scale energy consumers.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=900&auto=format&fit=crop',
    alt: 'Industrial scale solar power generation',
  },
  {
    title: 'On-Grid Systems',
    text: 'Grid-connected solar systems that generate power during the day and export surplus energy through net metering.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop',
    alt: 'On-grid solar system connected to the power grid',
  },
  {
    title: 'Off-Grid Systems',
    text: 'Standalone solar systems with battery backup for reliable power in remote and non-connected locations.',
    image: 'https://images.unsplash.com/photo-1771479755134-9c1e3143c110?q=80&w=900&auto=format&fit=crop',
    alt: 'Off-grid solar system with battery storage',
  },
  {
    title: 'Hybrid Systems',
    text: 'Combined grid-connected and battery-backed solar systems for uninterrupted power and maximum savings.',
    image: 'https://images.unsplash.com/photo-1723407653103-7a9c6b579acf?q=80&w=900&auto=format&fit=crop',
    alt: 'Hybrid solar system combining solar and battery storage',
  },
  {
    title: 'Solar Water Pumps',
    text: 'Solar-powered water pumping systems for irrigation, agriculture, and water supply applications.',
    image: 'https://images.unsplash.com/photo-1770178995777-31f3af9e6aa2?q=80&w=900&auto=format&fit=crop',
    alt: 'Solar panels powering a water pump',
  },
  {
    title: 'Solar Street Lights',
    text: 'Solar-powered street lighting for roads, communities, campuses, public areas, and infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1775646239349-49a01e01e203?q=80&w=900&auto=format&fit=crop',
    alt: 'Solar-powered street light against a clear sky',
  },
  {
    title: 'EPC Projects',
    text: 'End-to-end engineering, procurement, and construction of solar projects from design to commissioning.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=900&auto=format&fit=crop',
    alt: 'End-to-end EPC solar project execution',
  },
  {
    title: 'Annual Maintenance',
    text: 'Regular cleaning, inspection, and servicing contracts to keep your solar system performing at its best.',
    image: 'https://images.unsplash.com/photo-1751823570442-3a992e3ef80b?q=80&w=900&auto=format&fit=crop',
    alt: 'Technician servicing a solar panel system',
  },
  {
    title: 'Net Metering Assistance',
    text: 'Complete support with net metering applications, documentation, and approvals for grid-connected systems.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=900&auto=format&fit=crop',
    alt: 'Net metering enabled rooftop solar system',
  },
  {
    title: 'Govt Subsidy Assistance',
    text: 'Guidance and support through government subsidy schemes to make solar adoption more affordable.',
    image: 'https://images.unsplash.com/photo-1746570059096-fdfa39611486?q=80&w=900&auto=format&fit=crop',
    alt: 'Solar system installation with government subsidy support',
  },
]

const serviceGroups = [
  { title: 'Residential & Commercial', names: ['Residential Solar', 'Commercial Solar'] },
  {
    title: 'Industrial & Grid Systems',
    names: ['Industrial Solar', 'On-Grid Systems', 'Off-Grid Systems', 'Hybrid Systems'],
  },
  { title: 'Water & Public Lighting', names: ['Solar Water Pumps', 'Solar Street Lights'] },
  {
    title: 'EPC, Maintenance & Support',
    names: ['EPC Projects', 'Annual Maintenance', 'Net Metering Assistance', 'Govt Subsidy Assistance'],
  },
]

function Solutions() {
  const [openGroup, setOpenGroup] = useState(0)

  return (
    <section id="solutions" className="solutions-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-heading">Our Services</h2>
            <p className="section-sub">
              End-to-end solar solutions across every scale and sector — from design
              and supply to installation and maintenance.
            </p>
          </div>
        </Reveal>
        <div className="solutions-desktop-grid">
          <Row className="g-4 mt-2">
            {solutions.map((solution, index) => (
              <Col md={6} lg={3} key={solution.title}>
                <Reveal delay={index * 90} className="h-100">
                  <article className="solution-card">
                    <div className="solution-card-media">
                      <img src={solution.image} alt={solution.alt} loading="lazy" />
                    </div>
                    <div className="solution-card-body">
                      <h3>{solution.title}</h3>
                      <p>{solution.text}</p>
                      <a href="#contact" className="learn-more">
                        Learn More
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
        </div>
        <div className="solutions-mobile-accordion">
          {serviceGroups.map((group, index) => {
            const isOpen = openGroup === index
            const items = solutions.filter((solution) => group.names.includes(solution.title))
            return (
              <div className={`sol-group ${isOpen ? 'open' : ''}`} key={group.title}>
                <button
                  type="button"
                  className="sol-group-btn"
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? -1 : index)}
                >
                  <span>{group.title}</span>
                  <span className="sol-group-meta">
                    <span className="sol-group-count">{items.length}</span>
                    <span className="sol-group-toggle" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </span>
                </button>
                <div
                  className="sol-group-body"
                  style={{ maxHeight: isOpen ? '520px' : '0' }}
                >
                  {items.map((item) => (
                    <div className="sol-item" key={item.title}>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Solutions
