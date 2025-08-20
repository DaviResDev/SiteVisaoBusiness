
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
      
      {/* Background - gradiente azul-escuro exato da imagem */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#050b2a] via-[#0a1a3a] to-[#050b2a] z-0"
      />

      {/* Braço robótico metálico à direita - EXATO da imagem */}
      <div className="absolute top-0 right-0 h-full w-full sm:w-3/4 md:w-2/3 lg:w-1/2 z-10 flex items-center justify-end pointer-events-none">
        <img 
          src="https://i.imgur.com/VFtnuiu_d.webp?maxwidth=760&fidelity=grand"
          alt="Braço robótico metálico"
          className="w-full h-full object-contain object-right"
          style={{maxHeight: '100%', maxWidth: '100%'}}
          draggable="false"
        />
      </div>

      {/* Content - posicionamento EXATO da imagem */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start justify-center h-screen">
          
          {/* Texto principal - EXATO da imagem */}
          <div className="text-left animate-fade-in relative z-20 max-w-md sm:max-w-lg md:max-w-xl">
            {/* Título principal - EXATO da imagem */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-satoshi font-bold leading-tight mb-6 sm:mb-8 text-white">
              <span className="text-white">Automatize.</span>
              <br />
              <span className="text-gray-400">Escale. </span>
              <span className="text-blue-600 font-extrabold">Inove.</span>
            </h1>
            
            {/* Texto descritivo - EXATO da imagem */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-12 leading-relaxed font-satoshi">
              Dê o próximo passo rumo ao{' '}
              <span className="text-blue-300 font-semibold">futuro</span>.
              <br />
              Automatize com <span className="text-white font-semibold">inteligência</span>, 
              escale com <span className="text-gray-200 font-semibold">segurança</span>.
            </p>

            {/* Botões empilhados verticalmente - EXATO da imagem */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Botão azul vibrante - EXATO da imagem */}
              <button 
                onClick={handleScheduleDemo}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-xl border border-blue-500/30 shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40 hover:scale-105 font-satoshi w-full sm:w-auto sm:min-w-[220px] text-base sm:text-lg"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span className="whitespace-nowrap">Agendar Demonstração</span>
              </button>
              
              {/* Botão cinza escuro - EXATO da imagem */}
              <button 
                onClick={() => scrollToSection('servicos')}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/60 border border-gray-600/40 text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group hover:from-gray-900/90 hover:to-gray-800/70 hover:border-gray-500/50 font-satoshi backdrop-blur-sm w-full sm:w-auto sm:min-w-[220px] text-base sm:text-lg"
              >
                <span className="whitespace-nowrap">Conhecer Soluções</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
