import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setHovering(true);
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[10000]">
      <div className="absolute w-2 h-2 rounded-full bg-foreground transition-transform duration-75" style={{ left: pos.x - 4, top: pos.y - 4 }} />
      <div
        className="absolute rounded-full border border-primary/50 transition-all duration-300"
        style={{
          left: pos.x - (hovering ? 24 : 16),
          top: pos.y - (hovering ? 24 : 16),
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
        }}
      />
    </div>
  );
};

export default CustomCursor;
