import { Building2, ShoppingBag, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import residentialImage from "@/assets/service-residential.jpg";
import corporateImage from "@/assets/service-corporate.jpg";
import shoppingImage from "@/assets/service-shopping.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Condomínios Residenciais",
      description: "Transforme áreas comuns em espaços mágicos que encantam moradores e visitantes. Decorações elegantes que valorizam o empreendimento.",
      image: residentialImage,
      features: ["Áreas comuns", "Halls de entrada", "Salões de festa", "Fachadas"],
    },
    {
      icon: Building2,
      title: "Empresas e Corporativo",
      description: "Crie um ambiente acolhedor e festivo para colaboradores e clientes. Decorações que refletem a identidade da sua empresa.",
      image: corporateImage,
      features: ["Recepções", "Escritórios", "Eventos corporativos", "Fachadas"],
    },
    {
      icon: ShoppingBag,
      title: "Shoppings e Comércio",
      description: "Projetos de grande porte que atraem público e geram experiências memoráveis. Instalações espetaculares que impulsionam vendas.",
      image: shoppingImage,
      features: ["Praças centrais", "Corredores", "Vitrines", "Fachadas"],
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
            Soluções completas em decoração natalina para diferentes segmentos
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
