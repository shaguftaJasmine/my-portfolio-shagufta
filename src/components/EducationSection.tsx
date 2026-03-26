import { motion } from "framer-motion";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">
        <span className="gradient-text">Education</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-glow rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
      >
        <span className="text-5xl">🎓</span>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-foreground">Bachelor of Science in Computer Science</h3>
          <p className="text-secondary font-medium mt-1">Sukkur IBA University, Sukkur</p>
          <p className="text-sm text-primary font-mono mt-2">Sept 2022 – May 2026</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
