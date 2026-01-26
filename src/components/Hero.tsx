import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Desenvolvedor Full Stack
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up-delay-1">
          Olá, eu sou{" "}
          <span className="gradient-text">Douglas</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2 text-balance">
          Transformando ideias em experiências digitais incríveis através de código limpo e design moderno.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up-delay-3">
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover-lift inline-flex items-center gap-2"
          >
            Ver Projetos
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl gradient-border font-medium hover-lift"
          >
            Entre em Contato
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12 animate-fade-up-delay-3">
          <a
            href="https://github.com/Fera-programador"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover-lift"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover-lift"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:dsdouglas13@gmail.com"
            className="p-3 rounded-xl glass-card hover-lift"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
