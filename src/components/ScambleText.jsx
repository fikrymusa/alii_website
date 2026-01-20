import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const ScrambleText = ({ 
  text = "Artificial Intelligence Literacy and Innovation Institute",
  duration = 1.5, 
  delay = 0 
}) => {
  const ref = useRef(null);

  /** Scramble logic */
  const runScramble = useCallback(() => {
    if (!ref.current) return;

    const original = text.split(""); // <-- tetap mempertahankan spasi
    const chars = [...original];
    const timeline = gsap.timeline();

    timeline.to(chars, {
      duration: duration,
      delay: delay,
      ease: "none",
      onUpdate: () => {
        // Setiap frame scramble huruf kecuali spasi
        const output = chars
          .map((ch, i) => {
            if (original[i] === " ") return " "; // <-- pertahankan spasi
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("");

        ref.current.innerText = output;
      },
      onComplete: () => {
        // Kembalikan ke text asli
        ref.current.innerText = text;
      }
    });

  }, [text, duration, delay]); // <-- FIX: dependency array benar

  /** Run animation */
  useEffect(() => {
    runScramble();
  }, [runScramble]);

  return (
    <span ref={ref} className="inline-block">
      {text}
    </span>
  );
};

export default ScrambleText;
