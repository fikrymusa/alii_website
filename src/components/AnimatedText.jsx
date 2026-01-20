import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useIsomorphicLayoutEffect } from "framer-motion";

const charsScramble = "!<>-_\\/[]{}—=+*^?#________";

const AnimatedText = ({
  text,
  effect = "pop-up",
  delay = 0,
  className = "",
  duration = 0.4,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ============================
    // 1. SCRAMBLE EFFECT (Logika khusus)
    // ============================
    if (effect === "scramble") {
      let frame = 0;
      const original = text;

      const scrambleUpdate = () => {
        let scrambled = "";

        for (let i = 0; i < original.length; i++) {
          if (i < frame) {
            scrambled += original[i];
          } else {
            scrambled += charsScramble[Math.floor(Math.random() * charsScramble.length)];
          }
        }

        // Render ulang, memastikan spasi tidak dibungkus span
        el.innerHTML = scrambled
          .split("")
          .map((c) => (c === " " ? " " : `<span class="inline-block">${c}</span>`))
          .join("");

        frame++;

        if (frame <= original.length) {
          requestAnimationFrame(scrambleUpdate);
        }
      };

      const timer = setTimeout(scrambleUpdate, delay * 1000);
      return () => clearTimeout(timer);
    }

    // ============================
    // 2. EFEK LAINNYA (Menggunakan Framer Motion)
    // ============================
    // Fungsi untuk mendapatkan properti animasi awal dan target
    const getAnimationProps = () => {
      const commonTransition = { duration };
      switch (effect) {
        case "pop-up":
          return {
            initial: { opacity: 0, y: 20, scale: 0.9 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { ...commonTransition, ease: [0.175, 0.885, 0.32, 1.275] },
          };
        case "pop-down":
          return {
            initial: { opacity: 0, y: -20, scale: 0.9 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { ...commonTransition, ease: [0.175, 0.885, 0.32, 1.275] },
          };
        case "bounce":
          return {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { ...commonTransition, ease: [0.68, -0.55, 0.265, 1.55] },
          };
        case "fade":
          return {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { ...commonTransition, ease: "easeOut" },
          };
        case "slide-left":
          return {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { ...commonTransition, ease: [0.25, 0.46, 0.45, 0.94] },
          };
        case "slide-right":
          return {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { ...commonTransition, ease: [0.25, 0.46, 0.45, 0.94] },
          };
        default:
          return { initial: {}, animate: {}, transition: {} };
      }
    };

    const { initial, animate, transition } = getAnimationProps();

    // Terapkan animasi ke setiap karakter
    controls.start((i) => ({
      ...animate,
      transition: {
        ...transition,
        delay: delay + i * (effect === "bounce" ? 0.035 : 0.03),
      },
    }));

  }, [text, effect, delay, duration, controls]);

  // Menentukan status awal untuk setiap efek (kecuali scramble)
  const getInitialProps = () => {
    switch (effect) {
      case "pop-up":
        return { opacity: 0, y: 20, scale: 0.9 };
      case "pop-down":
        return { opacity: 0, y: -20, scale: 0.9 };
      case "bounce":
        return { opacity: 0, y: 20 };
      case "fade":
        return { opacity: 0 };
      case "slide-left":
        return { opacity: 0, x: -20 };
      case "slide-right":
        return { opacity: 0, x: 20 };
      default:
        return {}; // Tidak ada animasi awal untuk 'scramble' atau efek tidak dikenal
    }
  };

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => {
        // Jika ini adalah spasi, render sebagai teks biasa tanpa pembungkus
        if (char === " ") {
          return " ";
        }
        
        // Render karakter lain dengan motion.span
        return (
          <motion.span
            key={i}
            className="inline-block" // <-- PERUBAHAN PENTING: whitespace-pre dihapus
            initial={getInitialProps()}
            animate={controls}
            custom={i} // Indeks untuk stagger
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
};

export default AnimatedText;