import NavBar from '../NavBar.jsx'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Contact from '../sections/Contact.jsx'
import Footer from '../Footer.jsx'

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
