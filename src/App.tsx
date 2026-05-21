import { useEffect, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';
import DisclaimerModal from './components/DisclaimerModal';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isServicePage = hash.startsWith('#service/');
  const serviceSlug = hash.replace('#service/', '');

  if (isServicePage) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <ServicePage slug={serviceSlug} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <DisclaimerModal/>
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Blog />
      <Contact />
      <FloatingContact />
      <Footer />
    </div>
  );
}