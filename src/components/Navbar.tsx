import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card py-4 px-6 md:px-12 flex items-center justify-between"
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl font-bold gradient-text cursor-none">
        SJ
      </button>
      <div className="hidden md:flex gap-6">
        {links.map((l) => (
          <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-none">
            {l}
          </button>
        ))}
      </div>
      <button onClick={() => setOpen(!open)} className="md:hidden text-foreground cursor-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>}
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 glass-card flex flex-col p-6 gap-4 md:hidden"
          >
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-muted-foreground hover:text-foreground transition-colors text-left cursor-none">
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
