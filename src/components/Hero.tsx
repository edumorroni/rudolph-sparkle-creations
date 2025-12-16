import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section id="inicio" className="relative">
      {/* First Image Section */}
      <div className="relative w-full h-screen">
        <img
          src={heroSlide1}
          alt="Rudolph Shining - Iluminando Sonhos, Transformando Espaços"
          className="w-full h-full object-cover"
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_60px_rgba(0,0,0,0.4)]"></div>
        
        {/* Light Particles on first image */}
        <LightParticles />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <a 
            href="#hero-section-2" 
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Second Image Section */}
      <div id="hero-section-2" className="relative w-full h-screen">
        <img
          src={heroSlide2}
          alt="Rudolph Shining - Projetos Personalizados"
          className="w-full h-full object-cover"
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_60px_rgba(0,0,0,0.4)]"></div>
        
        {/* Scroll Indicator to next section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <a 
            href="#sobre" 
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
