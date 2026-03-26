import { motion } from "framer-motion";

const achievements = [
  { emoji: "🏆", title: "99% Model Accuracy", desc: "NLP fake news detection via ensemble methods" },
  { emoji: "🎤", title: "Session Mentor", desc: "Technical workshops on AI/ML for student communities" },
  { emoji: "🎪", title: "Lead Organizer", desc: "10+ tech events impacting hundreds of students" },
  { emoji: "🎓", title: "Academic Excellence", desc: "High performance in AI/ML applied research" },
  { emoji: "🔬", title: "Novel Research", desc: "Graphology + computer vision handwriting analysis" },
  { emoji: "⚡", title: "Full-Stack DS", desc: "End-to-end ML deployment to production" },
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
