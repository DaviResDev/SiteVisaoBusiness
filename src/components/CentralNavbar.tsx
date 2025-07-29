
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Calendar } from 'lucide-react';

const CentralNavbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const mainMenuItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Contato', href: '/contato' }
  ];

  const serviceItems = [
    { name: 'RocketMail', href: '/rocket-mail' },
    { name: 'Automação', href: '/automacao' },
    { name: 'Análise de Dados', href: '/analise-dados' },
    { name: 'Landing Page', href: '/landing-page' }
  ];

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeDropdown = () => {
    setIsServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6">
      <div className="flex justify-center px-4">
        <nav className="bg-black/10 border border-white/20 rounded-full shadow-lg px-6 py-3 backdrop-blur-sm">
          <div className="flex items-center space-x-6">
            {/* Logo VB - com brilho muito aumentado */}
            <Link to="/" className="flex items-center mr-3">
              <img 
                src="/lovable-uploads/18f2c9f2-1632-4bf2-b0aa-70a38d4e33b6.png"
                alt="VB Logo"
                className="h-12 w-auto" // aumentei de h-8 para h-12
                style={{ filter: 'brightness(2.5) contrast(1.5) saturate(1.2)' }}
              />
            </Link>

            {/* Menu Items */}
            {mainMenuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-full text-white hover:bg-white/20 hover:text-blue-200 ${
                  location.pathname === item.href ? 'bg-white/20 text-blue-200' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleServicesDropdown}
                className="text-white font-medium transition-all duration-300 px-3 py-2 rounded-full hover:bg-white/20 hover:text-blue-200 flex items-center gap-2"
              >
                Serviços
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-black border border-white/20 rounded-xl shadow-lg py-2 min-w-48 z-50 backdrop-blur-sm">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeDropdown}
                      className="block px-4 py-3 text-white hover:bg-white/20 hover:text-blue-200 transition-colors duration-200 border-b border-white/10 last:border-b-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Schedule Button */}
            <a
              href="http://wa.me/5541997772066"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-5 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agende uma Reunião
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default CentralNavbar;
