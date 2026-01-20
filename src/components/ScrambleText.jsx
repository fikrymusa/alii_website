import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const chars = "!<>-_\\/[]{}—=+*^?#________";

const ScrambleText = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const scrambleDuration = 40; 
    const originalText = text;
    let scrambled = "";

    const update = () => {
      scrambled = "";

      for (let i = 0; i < originalText.length; i++) {
        if (i < frame) {
          scrambled += originalText[i];
        } else {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      el.innerHTML = scrambled;

      frame++;

      if (frame <= originalText.length) {
        requestAnimationFrame(update);
      }
    };

    gsap.delayedCall(delay, update);
  }, [text, delay]);

  return <span ref={ref} className={className}></span>;
};

export default ScrambleText;
// 
// CONTOH
{/* <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
>
  <ScrambleText text="Membangun Masa Depan" />
  <br />
  <ScrambleText 
    text="AI yang Etis" 
    className="gradient-text"
    delay={0.4}
  />
</motion.h1> */}
