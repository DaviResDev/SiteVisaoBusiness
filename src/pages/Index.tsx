
import * as React from 'react';
const { useEffect } = React;
import WhatsAppButton from '../components/WhatsAppButton';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import HeroSection from '../components/HeroSection';
import CentralNavbar from '../components/CentralNavbar';
import ServicesOverview from '../components/ServicesOverview';
import RocketMail from '../components/RocketMail';
import Footer from '../components/Footer';
import AutomationsService from '../components/AutomationsService';
import DataAnalysisService from '../components/DataAnalysisService';
import SystemDevelopmentService from '../components/SystemDevelopmentService';

const Index = () => {
  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-animation');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full">
      <CentralNavbar />
      
      <main>
        {/* Hero Section com background exclusivo */}
        <HeroSection />

        {/* Background structure para seções após Hero */}
        <div className="relative">
          {/* Background image e overlay igual ao /sobre (agora FIXED) */}
          <div 
            className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/86c40c51-1d9b-4ac3-a5ec-85f767a5f986.png')`,
              zIndex: 0,
            }}
          />
          <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-blue-950/50 to-black/80" style={{zIndex: 1}} />
          
          <div className="relative z-10">
            {/* Services Overview */}
            <ServicesOverview />

            {/* RocketMail Section */}
            <RocketMail />

            {/* Automations Service Section */}
            <AutomationsService />

            {/* Data Analysis Service Section */}
            <DataAnalysisService />

            {/* System Development Service Section */}
            <SystemDevelopmentService />

            {/* Seção de Contato (replicada da página de contato) */}
            <ContactForm />

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
