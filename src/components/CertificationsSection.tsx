import { motion } from "framer-motion";

const certifications = [
  { title: "Supervised Learning with scikit-learn", issuer: "DataCamp" },
  { title: "Introduction to Databases for Back-End Development", issuer: "Meta" },
  { title: "Mastering Executive Presentations", issuer: "LinkedIn Learning" },
  { title: "Introduction to Databases", issuer: "Meta" },
  { title: "Programming for Everybody (Getting Started with Python)", issuer: "University of Michigan" },
  { title: "Programming Foundations with JavaScript, HTML and CSS", issuer: "Duke University" },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">
        <span className="gradient-text">Certifications</span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card-glow rounded-xl p-6 cursor-none"
          >
            <span className="text-3xl block mb-3">📜</span>
            <h3 className="font-bold text-foreground mb-1 text-sm leading-snug">{cert.title}</h3>
            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
