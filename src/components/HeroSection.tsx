
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
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-gradient-to-b from-[#1a2332] via-[#0f1521] to-[#1a2332]">
      
      {/* Braço robótico metálico à direita - EXATO da segunda imagem */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 lg:w-2/5 z-10 flex items-center justify-end pointer-events-none">
        <img 
          src="https://i.imgur.com/VFtnuiu_d.webp?maxwidth=760&fidelity=grand"
          alt="Braço robótico metálico"
          className="w-full h-auto max-h-full object-contain object-center-right opacity-90"
          draggable="false"
        />
      </div>

      {/* Content Container - EXATO da segunda imagem */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center min-h-[80vh]">
          
          {/* Coluna de conteúdo à esquerda - EXATO da segunda imagem */}
          <div className="w-full lg:w-1/2 max-w-lg">
            
            {/* Título principal - EXATO da segunda imagem */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-8 font-satoshi">
              <div className="text-white">Automatize.</div>
              <div>
                <span className="text-gray-400">Escale. </span>
                <span className="text-[#4F8EF7]">Inove.</span>
              </div>
            </h1>
            
            {/* Texto descritivo - EXATO da segunda imagem */}
            <div className="text-gray-200 text-lg lg:text-xl leading-relaxed mb-10 font-satoshi space-y-2">
              <p>Dê o próximo passo rumo ao futuro.</p>
              <p>Automatize com <span className="text-white font-medium">inteligência</span>, escale com <span className="text-white font-medium">segurança</span>.</p>
            </div>

            {/* Botões verticais - EXATO da segunda imagem */}
            <div className="space-y-4">
              {/* Botão azul principal */}
              <button 
                onClick={handleScheduleDemo}
                className="w-full max-w-[280px] bg-[#4F8EF7] hover:bg-[#3b82f6] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg font-satoshi"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                <span>Agendar Demonstração</span>
              </button>
              
              {/* Botão secondary transparente */}
              <button 
                onClick={() => scrollToSection('servicos')}
                className="w-full max-w-[280px] bg-transparent border border-gray-500/50 hover:border-gray-400/70 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm font-satoshi"
              >
                <span>Conhecer Soluções</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
