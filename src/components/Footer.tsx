import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  const services = [
    "Condomínios Residenciais",
    "Empresas e Corporativo",
    "Shoppings e Comércio",
    "Projetos Personalizados",
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Rudolph Shining" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-accent-foreground/80 mb-4">
              Iluminando Sonhos, Transformando Espaços
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rudolphshining"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground/60 hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@rudolphshining.com.br"
                className="text-accent-foreground/60 hover:text-secondary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+5511999999999"
                className="text-accent-foreground/60 hover:text-secondary transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-accent-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-accent-foreground/80">
              <li>
                <strong className="text-accent-foreground">Email:</strong>
                <br />
                contato@rudolphshining.com.br
              </li>
              <li>
                <strong className="text-accent-foreground">Telefone:</strong>
                <br />
                (11) 99999-9999
              </li>
              <li>
                <strong className="text-accent-foreground">Instagram:</strong>
                <br />
                @rudolphshining
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-foreground/60">
            <p>© {currentYear} Rudolph Shining. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ para transformar o seu Natal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
