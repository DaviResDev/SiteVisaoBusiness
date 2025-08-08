import React, { useEffect } from 'react';
import CentralNavbar from '../components/CentralNavbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Target, Users, Zap, Award, Heart, Eye, Rocket, Code, BarChart3, MessageSquare, Mail, User, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

const AboutPage = () => {
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

  const purposeCards = [
    {
      title: "Automatizar",
      subtitle: "para aproximar",
      description: "Transformamos processos manuais em sistemas inteligentes que conectam pessoas e otimizam relacionamentos, criando mais tempo para o que realmente importa na empresa."
    },
    {
      title: "Inovar", 
      subtitle: "para simplificar",
      description: "Desenvolvemos soluções tecnológicas que tornam o complexo simples, eliminando burocracias desnecessárias e criando experiências fluidas e intuitivas para empresas."
    },
    {
      title: "Criar",
      subtitle: "para transformar", 
      description: "Construímos ferramentas que não apenas resolvem problemas atuais, mas revolucionam a forma como as empresas operam, gerando impacto positivo e crescimento."
    }
  ];

  const team = [
    {
      name: "Leonardo Sena",
      role: "CEO & Fundador",
      area: "Estratégia e Negócios",
      email: "visaobusinesstech@gmail.com",
      image: "https://i.imgur.com/x9SBGuR.jpeg",
      description: "CEO focado em estratégia empresarial e desenvolvimento de negócios."
    },
    {
      name: "Davi Resende",
      role: "CTO & Desenvolvedor", 
      area: "Desenvolvimento e Automações",
      email: "visaobusinesstech@gmail.com",
      icon: <Code className="w-16 h-16" />,
      image: "https://i.postimg.cc/tT8ggqB2/55555.png",
      description: "Especialista em tecnologia e automação, responsável por transformar ideias."
    },
    {
      name: "Nicolas Fragoso",
      role: "Head de Dados",
      area: "Análise de Dados e BI",
      email: "visaobusinesstech@gmail.com", 
      icon: <BarChart3 className="w-16 h-16" />,
      image: "https://i.imgur.com/Dod39Is.jpeg",
      description: "Analista de dados que transforma números em insights estratégicos.",
    }
  ];

  return (
    <div className="min-h-screen w-full relative">
      {/* First section background with original image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/86c40c51-1d9b-4ac3-a5ec-85f767a5f986.png')`,
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-blue-950/50 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10">
        <CentralNavbar />
        
        <main className="pt-20 sm:pt-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section with Title and Enhanced Image */}
            <div className="mb-16 sm:mb-32 animate-fade-in py-12 sm:py-20">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight font-satoshi">
                    Sobre Nós
                  </h1>
                  
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 leading-relaxed font-satoshi">
                    Mais que{' '}
                    <span className="text-blue-400 font-bold drop-shadow-lg">
                      tecnologia
                    </span>
                    : uma visão de{' '}
                    <span className="text-white font-bold drop-shadow-lg">
                      futuro
                    </span>
                    {' '}com{' '}
                    <span className="text-blue-300 font-bold drop-shadow-lg">
                      propósito humano
                    </span>
                  </h2>
                  
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-satoshi">
                    A Visão Business nasceu da inquietação de transformar rotinas empresariais cansativas 
                    em experiências inteligentes e automáticas. Mais do que uma empresa de tecnologia, 
                    somos movidos por uma crença: o tempo das pessoas deve ser usado com propósito.
                  </p>
                </div>
                
                <div className="flex justify-center order-last md:order-last">
                  <div className="w-full max-w-sm sm:max-w-md md:w-[28rem] h-48 sm:h-64 md:h-80 rounded-2xl sm:rounded-3xl border-2 border-blue-400/30 overflow-hidden shadow-2xl">
                    <img 
                      src="https://i.imgur.com/1ezmc9I.jpeg" 
                      alt="Nossos Fundadores - Leonardo, Davi & Nicolas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Redesigned Purpose Section with Text-based Cards */}
            <div className="mb-16 sm:mb-32 scroll-animation pt-12 sm:pt-20">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-satoshi">
                  Nosso Propósito
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-satoshi px-4">
                  Nossa motivação vai além de métricas e números. Queremos que cada negócio que atendemos 
                  ganhe algo essencial: mais tempo para pensar, para crescer e para cuidar do que realmente importa.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="group relative bg-transparent border border-blue-400/30 rounded-2xl p-6 sm:p-8 hover:bg-blue-400/5 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 animate-slide-up cursor-pointer">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                  </div>
                  
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-blue-400 mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  
                  <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300 text-center font-satoshi">
                    Automatizar
                  </div>
                  
                  <p className="text-blue-300 text-base sm:text-lg font-medium mb-3 sm:mb-4 font-satoshi text-center">para aproximar</p>
                  
                  <p className="text-gray-200 leading-relaxed font-satoshi text-center text-sm sm:text-base">
                    Transformamos processos manuais em sistemas inteligentes que conectam pessoas e otimizam relacionamentos, 
                    criando mais tempo para o que realmente importa na empresa.
                  </p>
                </div>

                <div className="group relative bg-transparent border border-blue-400/30 rounded-2xl p-6 sm:p-8 hover:bg-blue-400/5 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 animate-slide-up cursor-pointer" style={{ animationDelay: '0.2s' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                  </div>
                  
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-blue-400 mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
                    <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  
                  <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300 text-center font-satoshi">
                    Inovar
                  </div>
                  
                  <p className="text-blue-300 text-base sm:text-lg font-medium mb-3 sm:mb-4 font-satoshi text-center">para simplificar</p>
                  
                  <p className="text-gray-200 leading-relaxed font-satoshi text-center text-sm sm:text-base">
                    Desenvolvemos soluções tecnológicas que tornam o complexo simples, eliminando burocracias 
                    desnecessárias e criando experiências fluidas e intuitivas para empresas.
                  </p>
                </div>

                <div className="group relative bg-transparent border border-blue-400/30 rounded-2xl p-6 sm:p-8 hover:bg-blue-400/5 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 animate-slide-up cursor-pointer" style={{ animationDelay: '0.4s' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                  </div>
                  
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-blue-400 mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
                    <Target className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  
                  <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300 text-center font-satoshi">
                    Criar
                  </div>
                  
                  <p className="text-blue-300 text-base sm:text-lg font-medium mb-3 sm:mb-4 font-satoshi text-center">para transformar</p>
                  
                  <p className="text-gray-200 leading-relaxed font-satoshi text-center text-sm sm:text-base">
                    Construímos ferramentas que não apenas resolvem problemas atuais, mas revolucionam a forma 
                    como as empresas operam, gerando impacto positivo e crescimento.
                  </p>
                </div>
              </div>
            </div>



            {/* Team Section with Carousel - Updated with compact design */}
            <div className="mb-12 sm:mb-20 scroll-animation">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12 font-satoshi">
                Nossa Equipe
              </h2>
              
              <div className="relative max-w-3xl mx-auto px-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {team.map((member, index) => (
                      <CarouselItem key={index}>
                        <div className="bg-gradient-to-br from-blue-950/60 to-blue-900/40 border border-blue-400/30 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-950/80 hover:to-blue-900/60 transition-all duration-500 shadow-2xl flex items-center justify-center min-h-[16rem] sm:min-h-[20rem] w-full max-w-3xl mx-auto">
                          <div className="flex flex-col items-center text-center w-full">
                            {member.image ? (
                              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-blue-400/40 mb-4 sm:mb-6 shadow-lg flex items-center justify-center bg-blue-900/30">
                                <img 
                                  src={member.image} 
                                  alt={member.name}
                                  className="w-full h-full object-cover blur-[0.3px]"
                                />
                              </div>
                            ) : (
                              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-500/30 to-blue-600/20 border-2 border-blue-400/40 rounded-full flex items-center justify-center text-blue-300 mb-4 sm:mb-6 shadow-lg">
                                {member.icon}
                              </div>
                            )}
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-satoshi">{member.name}</h3>
                            <p className="text-blue-300 font-semibold text-base sm:text-lg mb-1 font-satoshi">{member.role}</p>
                            <p className="text-gray-200 text-sm sm:text-base mb-3 sm:mb-4 font-satoshi">{member.area}</p>
                            <p className="text-gray-200 leading-relaxed text-center mb-3 sm:mb-4 text-xs sm:text-sm max-w-lg font-satoshi flex-1">
                              {member.description}
                            </p>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-xs font-satoshi">{member.email}</span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-blue-500/20 border-blue-400/40 text-blue-300 hover:bg-blue-500/30 hover:text-white -left-8 sm:-left-12" />
                  <CarouselNext className="bg-blue-500/20 border-blue-400/40 text-blue-300 hover:bg-blue-500/30 hover:text-white -right-8 sm:-right-12" />
                </Carousel>
              </div>
            </div>

            {/* Final Motivational Section */}
            <div className="text-center mb-12 sm:mb-20 scroll-animation px-4">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8 font-satoshi">
                Acreditamos que o futuro do trabalho é inteligente, automatizado e humano.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-6 font-satoshi">
                E você? Está pronto para ver o seu negócio com outros olhos?
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-300 font-satoshi">
                Vem com a Visão Business.
              </p>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default AboutPage;
