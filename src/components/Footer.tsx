import { Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-500/95 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <img src={logo} alt="Rudolph Shining" className="h-14 w-auto" />

          {/* Social Links */}
          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/rudolphshining"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://www.facebook.com/people/Rudolph-Shining/61581549396234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/rudolphshining"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-6 pt-6">
          <p className="text-center text-sm text-white/60">
            © {currentYear} Rudolph Shining. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
