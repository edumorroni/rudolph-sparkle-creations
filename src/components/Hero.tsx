import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import rudolphMascot from "@/assets/rudolph-mascot-new.png";

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
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">15+ Anos de Experiência</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
              Iluminando Sonhos,
              <br />
              <span className="text-gradient-gold">Transformando Espaços</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in">
              Especialistas em decoração natalina premium para condomínios, empresas e shoppings.
              Projetos personalizados que encantam e geram valor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
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
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-xl animate-fade-in">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-white/80">Satisfação</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">LED</div>
                <div className="text-sm text-white/80">Sustentável</div>
              </div>
            </div>
          </div>

          {/* Mascot Image */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
              <img
                src={rudolphMascot}
                alt="Brilhus - Mascote Rudolph Shining"
                className="relative w-full max-w-lg drop-shadow-2xl hover-lift"
              />
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
