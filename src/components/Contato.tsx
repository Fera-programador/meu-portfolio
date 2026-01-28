import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const contatoInfo = [
  { icon: Mail, label: "Email", value: "dsdouglas13@gmail.com" },
  { icon: Phone, label: "Telefone", value: "+55 (11) 91427-2665" },
  { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Fera-programador" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name: Nome, email: Email, message: Mensagem } = formData;

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        "https://backend-portfolio-gudw.onrender.com/api/mensagem",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Nome, Email, Mensagem }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar a mensagem");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  console.log(formData);


  return  (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Vamos trabalhar <span className="gradient-text">juntos?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contatoInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Sua mensagem..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover-lift inline-flex items-center justify-center gap-2"
            >
              Enviar Mensagem
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};