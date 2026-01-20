import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GsapTextPop = ({
  text,
  className = "",
  delay = 0,
  direction = "up", // "up" → pop-up, "down" → pop-down
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: direction === "up" ? 20 : -20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        delay,
        stagger: 0.03,
        ease: "back.out(1.7)",
      }
    );
  }, [text, direction, delay]);

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block whitespace-pre">
          {char}
        </span>
      ))}
    </span>
  );
};

export default GsapTextPop;
