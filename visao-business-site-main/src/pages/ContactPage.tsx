
import React, { useState } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const { submitForm, isSubmitting } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const result = await submitForm(formData);
    
    if (result.success) {
      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background image with overlay - matching AboutPage structure */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/d60e93aa-a7a1-46a3-9f41-28931be54fe1.png')`,
        }}
      />
      
      {/* Dark overlay for readability - matching AboutPage */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-blue-950/70 to-black/90" />
      
      {/* Content */}
      <div className="relative z-10">
        <CentralNavbar />
        
        <main className="pt-32 pb-16">
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-satoshi">
                Transforme seu negócio com{' '}
                <span className="text-blue-400">tecnologia</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-satoshi">
                Somos mais que uma empresa de tecnologia. Somos parceiros na jornada de transformação digital do seu negócio. 
                Cada solução que desenvolvemos é pensada para gerar resultados reais e impacto positivo.
              </p>
            </div>
          </div>

          {/* Contact Form and Info */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-3xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 font-satoshi">Como nos encontrar</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium font-satoshi">E-mail</div>
                        <div className="text-gray-300 font-satoshi">visaobusinesstech@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium font-satoshi">WhatsApp</div>
                        <div className="text-gray-300 font-satoshi">+55 41 9777-2066</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium font-satoshi">Localização</div>
                        <div className="text-gray-300 font-satoshi">Curitiba, PR - Brasil</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default ContactPage;
