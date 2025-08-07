import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-navbar')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:hidden mobile-navbar">
      <div className="px-4">
        <nav className="bg-black/20 border border-white/20 rounded-full shadow-lg px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            {/* Logo VB */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/18f2c9f2-1632-4bf2-b0aa-70a38d4e33b6.png"
                alt="VB Logo"
                className="h-8 w-auto"
                style={{ filter: 'brightness(2.5) contrast(1.5) saturate(1.2)' }}
              />
            </Link>

            {/* Links principais - sempre visíveis */}
            <div className="flex items-center space-x-3">
              <Link
                to="/sobre"
                className={`text-xs font-medium transition-all duration-300 px-2 py-1 rounded-full text-white hover:bg-white/20 hover:text-blue-200 ${
                  location.pathname === '/sobre' ? 'bg-white/20 text-blue-200' : ''
                }`}
              >
                Sobre Nós
              </Link>
              <Link
                to="/contato"
                className={`text-xs font-medium transition-all duration-300 px-2 py-1 rounded-full text-white hover:bg-white/20 hover:text-blue-200 ${
                  location.pathname === '/contato' ? 'bg-white/20 text-blue-200' : ''
                }`}
              >
                Contato
              </Link>
            </div>

            {/* Botão do menu hambúrguer */}
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Menu mobile expandido */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Header do menu */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/18f2c9f2-1632-4bf2-b0aa-70a38d4e33b6.png"
                  alt="VB Logo"
                  className="h-8 w-auto mr-3"
                  style={{ filter: 'brightness(2.5) contrast(1.5) saturate(1.2)' }}
                />
                <span className="text-white font-semibold">Menu</span>
              </div>
              <button
                onClick={toggleMenu}
                className="text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links do menu */}
            <div className="flex-1 px-4 py-6 space-y-4">
              {/* Links principais */}
              <div className="space-y-2">
                <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                  Navegação
                </h3>
                {mainMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === item.href 
                        ? 'bg-white/20 text-blue-200 border border-white/30' 
                        : 'text-white hover:bg-white/10 hover:text-blue-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Links de serviços */}
              <div className="space-y-2">
                <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                  Serviços
                </h3>
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === item.href 
                        ? 'bg-white/20 text-blue-200 border border-white/30' 
                        : 'text-white hover:bg-white/10 hover:text-blue-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Botão de agendamento */}
            <div className="p-4 border-t border-white/20">
              <a
                href="http://wa.me/5541997772066"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-md transition-all duration-300 flex items-center justify-center gap-3 w-full"
              >
                <Calendar className="w-5 h-5" />
                Agende uma Reunião
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MobileNavbar;
