import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  num: string; title: string; emoji: string; badge: string; desc: string; tags: string[]; link: string; featured?: boolean;
}

const projects: Project[] = [
  {
    num: "01", title: "Fake News Detector", emoji: "🔍", badge: "⚡ 99.36% Accuracy", featured: true,
    desc: "Built NLP pipeline classifying 68K+ articles with 99.36% accuracy using TF-IDF & Logistic Regression. Deployed as a live Streamlit web app for real-time misinformation detection.",
    tags: ["Python", "Scikit-learn", "Streamlit", "NLP"],
    link: "https://fake-news-detection-by-shagufta.netlify.app/",
  },
  {
    num: "02", title: "Netflix Content Analysis Dashboard", emoji: "🎬", badge: "🔥 EDA",
    desc: "Analyzed 8,000+ titles revealing 69% movies dominance, top genre, and peak addition month through rich data visualizations.",
    tags: ["Python", "Pandas", "Data Visualization"],
    link: "https://github.com/shaguftaJasmine/",
  },
  {
    num: "03", title: "Handwriting Personality Predictor", emoji: "✍️", badge: "🧬 Novel Research",
    desc: "Built real-time app predicting Big Five personality traits via custom feature extraction algorithms using pen pressure, slant, and letter spacing analysis.",
    tags: ["Python", "Streamlit", "OpenCV", "Scikit-learn"],
    link: "https://fake-news-detecor-4wbwj4bcdr5xarqpzlwuw8.streamlit.app/",
  },
  {
    num: "04", title: "Sales & Marketing Analytics Dashboard", emoji: "📊", badge: "💼 BI",
    desc: "Analyzed 5,000+ transactions, identified revenue drivers, and projected 12% sales growth through comprehensive data visualization and predictive modeling.",
    tags: ["Python", "Pandas", "Scikit-learn", "Data Visualization"],
    link: "https://github.com/shaguftaJasmine/sales-marketing-analysis",
  },
  {
    num: "05", title: "AI Study Planner", emoji: "🤖📚", badge: "✨ Smart Learning",
    desc: "Intelligent study companion that generates personalized learning schedules, tracks progress, and uses AI to optimize revision intervals based on your goals and availability.",
    tags: ["React", "AI Scheduler", "Productivity", "Tailwind"],
    link: "https://study-buddy-ai-540.lovable.app",
  },
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    onClick={onClick}
    className={`glass-card-glow rounded-2xl p-6 md:p-8 cursor-none group ${project.featured ? "md:col-span-2" : ""}`}
  >
    <div className="flex items-start justify-between mb-4">
      <span className="text-4xl">{project.emoji}</span>
      <span className="glass-card px-3 py-1 rounded-full text-xs font-medium text-foreground/80">{project.badge}</span>
    </div>
    {!project.featured && <span className="text-xs text-muted-foreground font-mono">{project.num}</span>}
    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-3 group-hover:gradient-text transition-all">{project.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map((t) => (
        <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
      ))}
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="glass-card-glow rounded-2xl p-8 max-w-lg w-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-5xl">{project.emoji}</span>
        <span className="glass-card px-3 py-1 rounded-full text-xs">{project.badge}</span>
      </div>
      <h3 className="text-2xl font-bold gradient-text mb-4">{project.title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-gradient px-6 py-2 rounded-lg text-sm font-semibold text-foreground cursor-none">
          View Project →
        </a>
        <button onClick={onClose} className="btn-outline-glow px-6 py-2 rounded-lg text-sm text-foreground cursor-none">
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.num} project={p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
