import logoHero from "@/assets/logo-hero.png";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import "@fontsource/dancing-script/700.css";

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

// Antler decoration component
const AntlerDecoration = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 300" 
    className={className}
    fill="currentColor"
  >
    <path d="M100 300 C100 250 80 200 60 150 C40 100 20 80 10 50 C5 30 15 10 30 20 C45 30 50 50 55 80 C60 110 70 130 80 160 C85 130 90 100 85 70 C80 40 90 10 110 20 C130 30 120 60 115 90 C110 120 115 150 120 180 C130 140 150 100 160 60 C170 20 190 10 200 30 C210 50 190 80 170 120 C150 160 140 200 100 300Z" />
  </svg>
);

const Hero = () => {
  return (
    <section id="inicio" className="relative">
      {/* First Hero Section - Main Brand */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(0,75%,25%)] via-[hsl(0,70%,20%)] to-[hsl(0,65%,15%)]">
        {/* Background antler decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left antler */}
          <AntlerDecoration className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-[300px] md:w-[400px] lg:w-[500px] h-auto text-[hsl(0,60%,18%)] opacity-60" />
          {/* Right antler */}
          <AntlerDecoration className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[400px] lg:w-[500px] h-auto text-[hsl(0,60%,18%)] opacity-60 scale-x-[-1]" />
        </div>

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_60px_rgba(0,0,0,0.5)]"></div>
        
        {/* Light Particles */}
        <LightParticles />
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          {/* Logo with embedded tagline */}
          <img 
            src={logoHero} 
            alt="Rudolph Shining - Iluminando Sonhos, Transformando Espaços" 
            className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] drop-shadow-2xl"
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

      {/* Second Hero Section - Services Teaser */}
      <div id="hero-section-2" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(0,65%,15%)] via-[hsl(0,60%,12%)] to-[hsl(0,55%,8%)]">
        {/* Sparkle/light effects overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-amber-500/20 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-yellow-300/10 rounded-full blur-3xl"></div>
        </div>

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_60px_rgba(0,0,0,0.5)]"></div>
        
        {/* Light Particles */}
        <LightParticles />
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          {/* Logo smaller */}
          <img 
            src={logoHero} 
            alt="Rudolph Shining Logo" 
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] mb-6 md:mb-10 drop-shadow-2xl"
          />
          
          {/* CTA Text */}
          <p 
            className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide drop-shadow-lg max-w-[90vw] md:max-w-[60vw]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Decoração e iluminação para shoppings, empresas e condomínios
          </p>
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