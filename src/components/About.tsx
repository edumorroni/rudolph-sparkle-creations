import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Quem <span className="text-gradient-primary">Somos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Rudolph Shining é especialista em transformar ambientes por meio da decoração e iluminação temática.
          </p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-center">
            Nossa equipe é composta por profissionais com mais de <strong>15 anos de experiência</strong> atuando 
            em grandes empreendimentos, shoppings e eventos, garantindo{" "}
            <strong className="text-primary">criatividade, qualidade e segurança</strong> em cada projeto. 
            Unimos inovação e tradição para levar o verdadeiro encantamento a shoppings, prédios e condomínios 
            comerciais e residenciais, empresas, comércios, eventos corporativos, prefeituras e parques em geral.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Levar magia, alegria e excelência para ambientes residenciais, comerciais e corporativos por meio 
              de decorações e iluminações temáticas e personalizadas, criando experiências inesquecíveis e 
              promovendo integração e acolhimento para nossos clientes e suas comunidades.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência nacional em decoração e iluminação temática, reconhecida pela inovação, qualidade e 
              impacto positivo que proporcionamos aos espaços, transformando celebrações em momentos memoráveis 
              e significativos para nossos clientes e suas famílias.
            </p>
          </div>

          {/* Team */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nosso Time</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nosso diferencial está na experiência e dedicação de uma equipe apaixonada por transformar espaços 
              com luz e beleza. Especialistas em decoração sazonal, unimos inovação e emoção para criar projetos 
              que encantam e inspiram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
