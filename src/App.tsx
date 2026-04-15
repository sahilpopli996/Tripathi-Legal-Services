import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Blog from './components/Blog'
import Contact from './components/Contact'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Blog />
      <Contact />
      <FloatingContact />
      <Footer />
    </div>
  )
}
