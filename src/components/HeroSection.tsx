
import * as React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleDemo = () => {
    const url = 'https://api.whatsapp.com/send/?phone=5541997772066&text&type=phone_number&app_absent=0';
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image - imagem exclusiva da Hero */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/pEjSrlf.png')`,
          backgroundColor: '#050b2a',
        }}
      />

      {/* Imagem ao lado direito do conteúdo */}
      <div className="absolute top-0 right-0 h-full w-1/2 z-10 flex items-center justify-end pointer-events-none">
        <img 
          src="https://i.imgur.com/VFtnuiu_d.webp?maxwidth=760&fidelity=grand"
          alt="Ilustração Hero Direita"
          className="w-full h-full object-contain object-right"
          style={{maxHeight: '100%', maxWidth: '100%'}}
          draggable="false"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto à esquerda */}
          <div className="text-left animate-fade-in relative pl-3 sm:pl-4 md:pl-0 pr-[50vw] md:pr-0">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-satoshi font-bold leading-tight mb-4 sm:mb-8">
              <span className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Automatize. </span>
              <span className="text-gray-400 text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Escale. </span>
              <span className="text-blue-600 font-extrabold text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Inove.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-2xl text-gray-100 mb-6 sm:mb-12 leading-snug sm:leading-relaxed max-w-xl font-satoshi">
              Dê o próximo passo rumo ao{' '}
              <span className="text-blue-300 font-semibold">futuro</span>. 
              <br />
              Automatize com <span className="text-white font-semibold">inteligência</span>, 
              escale com <span className="text-gray-200 font-semibold">segurança</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-12 sm:mt-0">
              <button 
                onClick={handleScheduleDemo}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-xl border border-blue-500/30 shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40 hover:scale-105 font-satoshi min-w-[160px] sm:min-w-[220px] text-xs sm:text-base h-12 sm:h-auto"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Agendar Demonstração
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="bg-gradient-to-r from-gray-800/60 to-blue-900/40 border border-gray-600/40 text-white font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group hover:bg-gradient-to-r hover:from-gray-900/70 hover:to-blue-800/50 hover:border-gray-500/50 font-satoshi backdrop-blur-sm min-w-[160px] sm:min-w-[220px] text-xs sm:text-base h-12 sm:h-auto"
              >
                Conhecer Soluções
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Espaço visual à direita */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
