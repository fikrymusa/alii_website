import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimateHeading = ({ 
  text, 
  animationType = "fadeUp",
  className = "",
  delay = 0 
}) => {
  const headingRef = useRef(null);
  const charsRef = useRef([]);

  const animationEffects = {
    fadeUp: (chars, trigger) => {
      return gsap.fromTo(chars,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.03,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trigger,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    },

    fadeLeft: (chars, trigger) => {
      return gsap.fromTo(chars,
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.04,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trigger,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    },

    scale: (chars, trigger) => {
      return gsap.fromTo(chars,
        {
          scale: 0,
          opacity: 0,
          rotation: 180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.02,
          delay: delay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: trigger,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    },

    typewriter: (chars, trigger) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      chars.forEach((char, index) => {
        tl.to(char, {
          opacity: 1,
          duration: 0.1,
          delay: 0.05,
          ease: "none"
        }, index * 0.1 + delay);
      });

      return tl;
    },

    blur: (chars, trigger) => {
      return gsap.fromTo(chars,
        {
          opacity: 0,
          filter: "blur(20px)"
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.02,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trigger,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  };

  useEffect(() => {
    const chars = charsRef.current;
    const trigger = headingRef.current;

    if (chars.length > 0 && trigger) {
      const animation = animationEffects[animationType];
      if (animation) {
        animation(chars, trigger);
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationType, delay]);

  const chars = text.split('').map((char, index) => 
    char === ' ' ? '\u00A0' : char
  );

  return (
    <h1 
      ref={headingRef} 
      className={`text-4xl md:text-6xl font-bold text-gray-800 ${className}`}
    >
      {chars.map((char, index) => (
        <span
          key={index}
          ref={el => charsRef.current[index] = el}
          className="inline-block opacity-0"
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimateHeading;