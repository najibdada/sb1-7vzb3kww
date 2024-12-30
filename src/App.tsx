import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnersSection } from './components/partners/PartnersSection';
import { AboutSection } from './components/about/AboutSection';
import { WhyChooseSection } from './components/features/WhyChooseSection';
import { ServicesSection } from './components/services/ServicesSection';
import { ProcessSection } from './components/process/ProcessSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { useLoading } from './hooks/useLoading';

export default function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`relative min-h-screen bg-gradient-to-b from-blue-50 to-white w-full overflow-hidden
        transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Hero />
        <PartnersSection />
        <AboutSection />
        <WhyChooseSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}