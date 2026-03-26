import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Core" | "ML/AI" | "Visualization" | "Tools";

const skills: { name: string; emoji: string; cat: Category }[] = [
  { name: "Python", emoji: "🐍", cat: "Core" },
  { name: "Pandas", emoji: "🐼", cat: "Core" },
  { name: "NumPy", emoji: "🔢", cat: "Core" },
  { name: "SQL", emoji: "🗄️", cat: "Core" },
  { name: "Technical Writing", emoji: "📝", cat: "Core" },
  { name: "Communication", emoji: "🗣️", cat: "Core" },
  { name: "Scikit-learn", emoji: "🤖", cat: "ML/AI" },
  { name: "NLP", emoji: "💬", cat: "ML/AI" },
  { name: "OpenCV", emoji: "👁️", cat: "ML/AI" },
  { name: "Human Behavior Analysis", emoji: "🧠", cat: "ML/AI" },
  { name: "Tableau", emoji: "📊", cat: "Visualization" },
  { name: "Power BI", emoji: "📈", cat: "Visualization" },
  { name: "Streamlit", emoji: "⚡", cat: "Visualization" },
  { name: "Matplotlib", emoji: "📉", cat: "Visualization" },
  { name: "Lovable", emoji: "💜", cat: "Tools" },
  { name: "Bolt AI", emoji: "⚡", cat: "Tools" },
  { name: "Claude Code", emoji: "🤖", cat: "Tools" },
  { name: "AWS", emoji: "☁️", cat: "Tools" },
];

const categories: Category[] = ["All", "Core", "ML/AI", "Visualization", "Tools"];

const SkillsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.cat === active);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-none ${
                active === c ? "btn-gradient text-foreground" : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="flex flex-wrap justify-center gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.div
                key={s.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="glass-card-glow px-5 py-3 rounded-xl flex items-center gap-2 cursor-none"
              >
                <span className="text-lg">{s.emoji}</span>
                <span className="text-sm font-medium text-foreground">{s.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
