import { Building2, ShoppingBag, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import residentialImage from "@/assets/service-residential-new.png";
import corporateImage from "@/assets/service-corporate-new.jpg";
import shoppingImage from "@/assets/service-shopping-new.png";

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Shoppings e Outlets",
      description: "Projetos personalizados que encantam e geram experiências memoráveis, atraindo o público e fortalecendo campanhas sazonais para impulsionar as vendas.",
      image: shoppingImage,
      features: ["Fachadas", "Decorações aéreas", "Corredores e Pórticos de Acesso", "Praças de Evento e Áreas Externas"],
    },
    {
      icon: Building2,
      title: "Empresas e Corporativos",
      description: "Espaços acolhedores e festivos para colaboradores e clientes, traduzindo a identidade da sua empresa ou comércio em uma atmosfera mágica e encantadora.",
      image: corporateImage,
      features: ["Fachadas e Acessos", "Recepções", "Escritórios", "Vitrines"],
    },
    {
      icon: Home,
      title: "Condomínios Residenciais",
      description: "Transforme áreas comuns em espaços mágicos que encantam moradores e visitantes. Decorações elegantes que valorizam o empreendimento, com a segurança e excelência de uma instalação profissional e planejada.",
      image: residentialImage,
      features: ["Portarias", "Hall de entrada", "Vegetação e Paisagismo", "Áreas comuns"],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em decoração temática para diferentes segmentos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover-lift border-0 shadow-elegant">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
