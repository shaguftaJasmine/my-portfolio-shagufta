import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["AI/ML Engineer", "Data Scientist", "NLP Specialist", "Technical Writer", "Vibe Coder", "Python Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Floating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-primary/10 animate-spin-slow" />
        <div className="absolute w-[450px] h-[450px] rounded-full border border-secondary/10 animate-spin-reverse" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-accent/10 animate-spin-slow" style={{ animationDuration: "25s" }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-foreground/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6 leading-tight"
        >
          Shagufta Jasmine
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-6 h-8"
        >
          <span>{text}</span>
          <span className="typing-cursor text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg font-light"
        >
          Turning raw data into compelling stories — one model, one insight, one breakthrough at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button onClick={() => scrollTo("projects")} className="btn-gradient px-8 py-3 rounded-lg font-semibold text-foreground cursor-none">
            View My Work
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-outline-glow px-8 py-3 rounded-lg font-semibold text-foreground cursor-none">
            Hire Me
          </button>
          <a href="/Shagufta_Jasmine_Resume.pdf" download className="btn-outline-glow px-8 py-3 rounded-lg font-semibold text-foreground cursor-none flex items-center gap-2">
            📄 Resume
          </a>
          <a href="https://github.com/shaguftaJasmine/" target="_blank" rel="noopener noreferrer" className="btn-outline-glow px-8 py-3 rounded-lg font-semibold text-foreground cursor-none flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
