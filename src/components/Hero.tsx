import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import rudolphMascot from "@/assets/rudolph-mascot-new.png";
import logoHero from "@/assets/logo-hero.png";
import { useEffect, useState } from "react";

// Particle component for animated lights
const LightParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 4,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-fall"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.id % 3 === 0 ? '#FFD700' : particle.id % 3 === 1 ? '#FFFFFF' : '#FFA500',
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.id % 3 === 0 ? '#FFD700' : particle.id % 3 === 1 ? '#FFFFFF' : '#FFA500'}`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Decoração Natalina Premium"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,75%,25%)] via-[hsl(0,70%,30%)] to-[hsl(0,65%,20%)]"></div>
        {/* Vinheta escura nas bordas */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_60px_rgba(0,0,0,0.5)]"></div>
      </div>

      {/* Animated Light Particles */}
      <LightParticles />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          {/* Text Content - 1/3 */}
          <div className="text-center lg:w-1/3">
            <div className="mb-6 animate-fade-in">
              <img
                src={logoHero}
                alt="Rudolph Shining - Iluminando Sonhos, Transformando Espaços"
                className="w-full max-w-md mx-auto"
              />
            </div>

            <p className="text-base md:text-lg text-white/90 mb-6 max-w-md mx-auto animate-fade-in">
              Especialistas em transformar ambientes com projetos decorativos personalizados que encantam e geram valor, para condomínios, empresas e shoppings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-8"
              >
                <a href="#servicos">Nossos Serviços</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-md mx-auto animate-fade-in">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">15+</div>
                <div className="text-xs text-white/80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">100%</div>
                <div className="text-xs text-white/80">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">LED</div>
                <div className="text-xs text-white/80">Sustentável</div>
              </div>
            </div>
          </div>

          {/* Mascot Image - 1/3 */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in lg:w-1/3">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full animate-pulse-glow"></div>
              
              {/* Mascot static with nose glow */}
              <div className="relative">
                <img
                  src={rudolphMascot}
                  alt="Brilhus - Mascote Rudolph Shining"
                  className="relative w-full max-w-md drop-shadow-2xl scale-x-[-1] transition-transform duration-300 group-hover:scale-x-[-1.05] group-hover:scale-y-105"
                />
                {/* Nose glow effect - posição corrigida */}
                <div className="absolute top-[52%] right-[38%] w-6 h-6 bg-red-500 rounded-full blur-md animate-nose-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
