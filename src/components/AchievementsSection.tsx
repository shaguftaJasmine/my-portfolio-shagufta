import { motion } from "framer-motion";

const achievements = [
  { emoji: "🏆", title: "99.36% Model Accuracy", desc: "NLP fake news detection using TF-IDF & Logistic Regression" },
  { emoji: "🎤", title: "Session Lead & Mentor", desc: "D-Tech junior sessions on AI/ML for student communities" },
  { emoji: "🎪", title: "Event Organizer", desc: "Business Summit, Tech Connect 2024 at Sukkur IBA" },
  { emoji: "🏅", title: "Book Review Winner", desc: "Won Book Review Competition at Sukkur IBA University" },
  { emoji: "🔬", title: "Novel Research", desc: "Handwriting personality prediction via custom feature extraction" },
  { emoji: "🎓", title: "BS Computer Science", desc: "Sukkur IBA University (2022 – 2026)" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">
        <span className="gradient-text">Achievements</span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card-glow rounded-xl p-6 text-center cursor-none"
          >
            <span className="text-4xl block mb-3">{a.emoji}</span>
            <h3 className="font-bold text-foreground mb-1">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
