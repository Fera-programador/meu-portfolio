const skills = [
  { name: "React", level: 95, color: "hsl(var(--primary))" },
  { name: "TypeScript", level: 90, color: "hsl(var(--primary))" },
  { name: "Node.js", level: 85, color: "hsl(var(--accent))" },
  { name: "Next.js", level: 88, color: "hsl(var(--primary))" },
  { name: "Tailwind CSS", level: 92, color: "hsl(var(--accent))" },
  { name: "PostgreSQL", level: 80, color: "hsl(var(--primary))" },
];

const technologies = [
  "JavaScript", "Python", "Git", "Docker", "AWS", "Firebase",
  "GraphQL", "REST APIs", "MongoDB", "Redis", "Prisma", "Figma"
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Habilidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tecnologias que <span className="gradient-text">domino</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sempre aprendendo e evoluindo com as tecnologias mais modernas do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: skill.color,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-semibold mb-6">
              Outras Tecnologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-secondary/50 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
