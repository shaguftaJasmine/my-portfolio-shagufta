import { motion } from "framer-motion";

const timeline = [
  {
    role: "Data Science Intern (Remote)",
    company: "Arch Technologies",
    period: "Mar 2025 – Present",
    desc: "Building ML models and preprocessing data for real-world projects. Collaborating with teams to derive actionable insights using Python and Scikit-learn.",
  },
  {
    role: "Teacher (Math, Computer, English)",
    company: "The Educatore's Campus",
    period: "2021 – 2022",
    desc: "Taught multiple subjects, developed lesson plans, and improved student learning outcomes.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Experience</span>
      </motion.h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
        {timeline.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative flex mb-12 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50 z-10" />
            <div className={`ml-10 md:ml-0 md:w-5/12 glass-card-glow rounded-xl p-6 ${i % 2 === 0 ? "md:mr-auto md:mr-8" : "md:ml-auto md:ml-8"}`}>
              <span className="text-xs text-primary font-mono">{item.period}</span>
              <h3 className="text-lg font-bold text-foreground mt-1">{item.role}</h3>
              <p className="text-sm text-secondary font-medium">{item.company}</p>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
