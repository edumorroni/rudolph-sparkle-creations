import logoHero from "@/assets/logo-hero.png";
import antlersSilhouette from "@/assets/antlers-silhouette.png";
import rudolphSparkles from "@/assets/rudolph-sparkles.png";
import badgeProjects from "@/assets/badge-projects.png";
import badgeExperience from "@/assets/badge-experience.png";
import badgeLed from "@/assets/badge-led.png";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import "@fontsource/dancing-script/700.css";

// Particle component for animated lights
const LightParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: 50 + Math.random() * 50, // Concentrate on right side
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.id % 3 === 0 ? '#FFD700' : particle.id % 3 === 1 ? '#FFFFFF' : '#FFA500',
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.id % 3 === 0 ? '#FFD700' : particle.id % 3 === 1 ? '#FFFFFF' : '#FFA500'}`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative">
      {/* First Hero Section - Main Brand (Reference: 1-4.jpg) */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(0,85%,45%)] via-[hsl(0,75%,30%)] to-[hsl(0,65%,18%)]">
        {/* Antler silhouettes in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <img 
            src={antlersSilhouette} 
            alt="" 
            className="w-[200%] md:w-[150%] lg:w-[120%] max-w-none opacity-20 object-contain"
            style={{ filter: 'brightness(0.3)' }}
          />
        </div>

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_80px_rgba(0,0,0,0.6)]"></div>
        
        {/* Subtle sparkle glow bottom right */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-amber-400/20 via-transparent to-transparent"></div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          {/* Logo */}
          <img 
            src={logoHero} 
            alt="Rudolph Shining - Iluminando Sonhos, Transformando Espaços" 
            className="w-[320px] sm:w-[450px] md:w-[580px] lg:w-[700px] xl:w-[850px] drop-shadow-2xl"
          />
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <a 
            href="#hero-section-2" 
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
      </div>

      {/* Second Hero Section - With Mascot and Badges (Reference: 2-4.jpg) */}
      <div id="hero-section-2" className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[hsl(0,65%,18%)] via-[hsl(0,70%,25%)] to-[hsl(0,65%,18%)]">
        {/* Light Particles on right side */}
        <LightParticles />

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_60px_rgba(0,0,0,0.5)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen lg:min-h-0">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 text-center lg:text-left pt-8 lg:pt-0">
              <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
                Especialistas em transformar ambientes com projetos decorativos personalizados que encantam e geram valor.
              </p>
              
              {/* Badges Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8">
                <img 
                  src={badgeProjects} 
                  alt="Projetos Personalizados Exclusivos" 
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
                />
                <img 
                  src={badgeExperience} 
                  alt="15+ Anos de Experiência" 
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
                />
                <img 
                  src={badgeLed} 
                  alt="LED Sustentável Alta Eficiência" 
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
                />
              </div>
            </div>
            
            {/* Right Content - Rudolph Mascot */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img 
            src={rudolphSparkles} 
            alt="Rudolph Mascot" 
            className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[50vw] xl:w-[50vw] max-w-none drop-shadow-2xl"
          />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator to next section */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <a 
            href="#sobre" 
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;