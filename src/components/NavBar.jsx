import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <img src="/favicon.svg" width="34" height="34" alt="Sourabh Solar Solution logo" />
          <span className="brand-name">
            Sourabh <span>Solar Solution</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <a href="#contact" className="btn btn-warning nav-cta ms-lg-3 px-3 py-2">
              Get a Free Quote
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
