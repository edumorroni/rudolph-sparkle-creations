import { Lightbulb, Leaf, Shield, Settings, Sparkles, Users } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Sparkles,
      title: "Projetos Personalizados",
      description: "Cada projeto é exclusivo e totalmente adaptado às necessidades e identidade do seu espaço.",
    },
    {
      icon: Lightbulb,
      title: "Iluminação LED Premium",
      description: "Tecnologia LED de alta eficiência que garante brilho intenso com economia de energia.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Materiais sustentáveis e práticas conscientes para preservar o meio ambiente.",
    },
    {
      icon: Users,
      title: "Atendimento Consultivo",
      description: "Equipe dedicada e flexível, focada em entender e atender suas necessidades específicas.",
    },
    {
      icon: Shield,
      title: "Instalação Segura",
      description: "Profissionais qualificados seguindo rigorosos padrões de segurança em todas as instalações.",
    },
    {
      icon: Settings,
      title: "Manutenção Completa",
      description: "Suporte e manutenção durante toda a temporada, incluindo armazenamento dos itens.",
    },
  ];

  const values = [
    {
      title: "Paixão e Comprometimento",
      description: "Nos dedicamos com entusiasmo e profissionalismo em cada projeto.",
    },
    {
      title: "Criatividade e Inovação",
      description: "Buscamos soluções únicas e modernas que encantem e surpreendam.",
    },
    {
      title: "Qualidade e Segurança",
      description: "Trabalhamos com materiais confiáveis e práticas que priorizam a segurança.",
    },
    {
      title: "Respeito e Colaboração",
      description: "Construímos relações transparentes baseadas na confiança.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Differentials Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Nossos <span className="text-gradient-primary">Diferenciais</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O que nos torna únicos no mercado de decoração natalina
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 hover-lift shadow-sm border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Nossos <span className="text-gradient-gold">Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-primary text-white rounded-xl p-6 hover-lift"
              >
                <div className="w-8 h-1 bg-secondary mb-4 rounded-full"></div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
