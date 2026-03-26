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
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={() => scrollTo("projects")} className="btn-gradient px-8 py-3 rounded-lg font-semibold text-foreground cursor-none">
            View My Work
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-outline-glow px-8 py-3 rounded-lg font-semibold text-foreground cursor-none">
            Hire Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
