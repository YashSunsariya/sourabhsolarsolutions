import { Col, Container, Row } from 'react-bootstrap'
import Reveal from '../Reveal.jsx'

const products = [
  {
    title: 'Solar Power Systems',
    text: 'On-grid, off-grid, and hybrid solar power systems for every scale and sector.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    alt: 'Solar power system installation',
  },
  {
    title: 'On-Grid Systems',
    text: 'Grid-connected systems that generate power during the day and export surplus through net metering.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
    alt: 'On-grid rooftop solar system',
  },
  {
    title: 'Off-Grid Systems',
    text: 'Standalone systems with battery backup for reliable power in remote locations.',
    image: 'https://images.unsplash.com/photo-1771479755134-9c1e3143c110?q=80&w=800&auto=format&fit=crop',
    alt: 'Off-grid solar system with battery backup',
  },
  {
    title: 'Hybrid Systems',
    text: 'Combined grid-connected and battery-backed systems for uninterrupted power.',
    image: 'https://images.unsplash.com/photo-1723407653103-7a9c6b579acf?q=80&w=800&auto=format&fit=crop',
    alt: 'Hybrid solar system with battery storage',
  },
  {
    title: 'Solar Water Pumps',
    text: 'Solar-powered water pumping systems for irrigation and water supply.',
    image: 'https://images.unsplash.com/photo-1770178995777-31f3af9e6aa2?q=80&w=800&auto=format&fit=crop',
    alt: 'Solar powered water pump',
  },
  {
    title: 'Solar Street Lights',
    text: 'Standalone solar lighting systems for roads, campuses, and public spaces.',
    image: 'https://images.unsplash.com/photo-1775646239349-49a01e01e203?q=80&w=800&auto=format&fit=crop',
    alt: 'Solar street lights along a road',
  },
]

function Products() {
  return (
    <section id="products" className="products-section section-pad">
      <Container>
        <Reveal>
          <div className="section-head-wrap center">
            <span className="section-eyebrow">Our Range</span>
            <h2 className="section-heading">Solar Products &amp; Solutions</h2>
            <p className="section-sub">
              A dependable range of solar power systems and components, selected for
              quality, performance, and long-term value.
            </p>
          </div>
        </Reveal>
        <Row className="g-4 mt-2">
          {products.map((product, index) => (
            <Col sm={6} lg={3} key={product.title}>
              <Reveal delay={index * 90}>
                <article className="product-card">
                  <div className="product-card-media">
                    <img src={product.image} alt={product.alt} loading="lazy" />
                  </div>
                  <div className="product-card-body">
                    <h3>{product.title}</h3>
                    <p>{product.text}</p>
                  </div>
                </article>
              </Reveal>
            </Col>
          ))}
        </Row>
        <Reveal delay={200}>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <a href="#contact" className="btn-outline-green">
              View Solutions
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Products
