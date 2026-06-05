import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "AI/ML" | "Data & Analytics" | "Cloud & MLOps" | "Programming" | "Soft Skills";

const skills: { name: string; emoji: string; cat: Exclude<Category, "All"> }[] = [
  // AI & Machine Learning
  { name: "Scikit-learn", emoji: "🤖", cat: "AI/ML" },
  { name: "ANN", emoji: "🧠", cat: "AI/ML" },
  { name: "CNN", emoji: "🖼️", cat: "AI/ML" },
  { name: "RNN", emoji: "🔁", cat: "AI/ML" },
  { name: "NLP", emoji: "💬", cat: "AI/ML" },
  { name: "LLMs", emoji: "✨", cat: "AI/ML" },
  { name: "EDA", emoji: "🔍", cat: "AI/ML" },
  { name: "Feature Engineering", emoji: "🛠️", cat: "AI/ML" },
  // Data & Analytics
  { name: "MongoDB", emoji: "🍃", cat: "Data & Analytics" },
  { name: "Model Deployment", emoji: "🚀", cat: "Data & Analytics" },
  { name: "REST APIs", emoji: "🌐", cat: "Data & Analytics" },
  { name: "Data Cleaning", emoji: "🧹", cat: "Data & Analytics" },
  { name: "Power BI", emoji: "📈", cat: "Data & Analytics" },
  { name: "Matplotlib", emoji: "📉", cat: "Data & Analytics" },
  { name: "Seaborn", emoji: "📊", cat: "Data & Analytics" },
  { name: "Data-driven Reporting", emoji: "📑", cat: "Data & Analytics" },
  // Cloud & MLOps
  { name: "Microsoft Azure", emoji: "☁️", cat: "Cloud & MLOps" },
  { name: "Azure ML", emoji: "🧪", cat: "Cloud & MLOps" },
  { name: "Azure App Service", emoji: "🖥️", cat: "Cloud & MLOps" },
  { name: "GitHub Actions CI/CD", emoji: "⚙️", cat: "Cloud & MLOps" },
  { name: "Docker", emoji: "🐳", cat: "Cloud & MLOps" },
  { name: "Git/GitHub", emoji: "🐙", cat: "Cloud & MLOps" },
  { name: "Streamlit", emoji: "⚡", cat: "Cloud & MLOps" },
  { name: "FastAPI", emoji: "🚄", cat: "Cloud & MLOps" },
  // Programming
  { name: "Python", emoji: "🐍", cat: "Programming" },
  { name: "SQL", emoji: "🗄️", cat: "Programming" },
  { name: "Java", emoji: "☕", cat: "Programming" },
  { name: "JavaScript", emoji: "📜", cat: "Programming" },
  { name: "HTML/CSS", emoji: "🎨", cat: "Programming" },
  // Soft Skills
  { name: "Communication", emoji: "🗣️", cat: "Soft Skills" },
  { name: "Report Writing", emoji: "📝", cat: "Soft Skills" },
  { name: "Problem Solving", emoji: "🧩", cat: "Soft Skills" },
  { name: "Analytical Thinking", emoji: "🧠", cat: "Soft Skills" },
  { name: "Time Management", emoji: "⏱️", cat: "Soft Skills" },
];

const categories: Category[] = ["All", "AI/ML", "Data & Analytics", "Cloud & MLOps", "Programming", "Soft Skills"];

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
