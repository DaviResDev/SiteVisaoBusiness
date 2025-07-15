
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
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
        message: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 scroll-animation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Entre em contato conosco
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Pronto para transformar seu negócio? 
              <span className="text-white"> Vamos conversar!</span>
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Telefone</h4>
                  <p className="text-gray-400">+55 (41) 9 9777-2066</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">E-mail</h4>
                  <p className="text-gray-400">visãobusinesstech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localização</h4>
                  <p className="text-gray-400">Curitiba (PR) - Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-bg-dark/50 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Nome *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                    className="w-full bg-bg-darker/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50" 
                    placeholder="Seu nome completo" 
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">E-mail *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                    className="w-full bg-bg-darker/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50" 
                    placeholder="seu@email.com" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Empresa</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className="w-full bg-bg-darker/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50" 
                    placeholder="Nome da empresa" 
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className="w-full bg-bg-darker/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50" 
                    placeholder="(11) 99999-9999" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Mensagem *</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={5} 
                  disabled={isSubmitting}
                  className="w-full bg-bg-darker/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none disabled:opacity-50" 
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..." 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="w-full tech-button flex items-center justify-center gap-2 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
