import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import profileImg from "@/assets/shagufta-profile.jpeg";

const stats = [
  { num: 5, suffix: "+", label: "Projects" },
  { num: 99, suffix: "%", label: "Best Accuracy" },
  { num: 80, suffix: "+", label: "Students Mentored" },
  { num: 10, suffix: "+", label: "Events Led" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref} className="text-3xl font-bold gradient-text">{count}{suffix}</div>;
};

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex justify-center"
      >
        <div className="relative">
          {/* Rotating ring */}
          <div className="absolute -inset-4 rounded-full animate-spin-slow" style={{
            background: "conic-gradient(from 0deg, hsl(263 90% 66%), hsl(187 82% 53%), hsl(330 82% 58%), hsl(263 90% 66%))",
            padding: "3px",
            borderRadius: "50%",
          }}>
            <div className="w-full h-full rounded-full bg-background" />
          </div>
          {/* Orbiting dots */}
          <div className="absolute -inset-6 animate-spin-slow" style={{ animationDuration: "8s" }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-lg shadow-primary/50" />
          </div>
          <div className="absolute -inset-6 animate-spin-reverse" style={{ animationDuration: "10s" }}>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
          </div>
          <img
            src={profileImg}
            alt="Shagufta Jasmine"
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover z-10"
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold mb-2">
          Who <span className="gradient-text">I Am</span>
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          I fell in love with coding when I realized data could tell stories no one else was hearing. What started as curiosity about Python scripts quickly grew into a passion for building intelligent systems that solve real problems — from detecting misinformation with 99.36% accuracy to predicting personality from handwriting.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          As a BS Computer Science student at Sukkur IBA University, I've led 80+ students as a Microsoft Learn Student Ambassador and organized 10+ tech events. I thrive at the intersection of machine learning and human insight, and I'm actively seeking opportunities where I can apply my AI/ML skills to create meaningful impact. My goal? To build AI solutions that make complex data accessible and actionable for everyone.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-glow rounded-xl p-4 text-center"
            >
              <CountUp target={s.num} suffix={s.suffix} />
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
