import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-display font-bold text-xl gradient-text">
          {"<Douglas Souza/>"}
        </a>
        
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          © {currentYear} - Feito com{" "}
          <Heart className="h-4 w-4 text-red-500 fill-red-500" /> por Douglas
        </p>
      </div>
    </footer>
  );
};
