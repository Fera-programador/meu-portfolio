import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Início", to: "/" },
  { name: "Sobre", to: "/sobre" },
  { name: "Habilidades", to: "/habilidades" },
  { name: "Projetos", to: "/projetos" },
  { name: "Contato", to: "/contato" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-6xl mx-auto glass-card px-6 py-3 flex items-center justify-between">
        <Link
                to="/"
               className="font-display font-bold text-xl gradient-text"
     >
         {"<Douglas Souza/>"}
        </Link>

        {/* Navegação para Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Botão do Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl glass-card"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Navegação Mobile */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-4 glass-card p-4 rounded-2xl animate-fade-up">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
