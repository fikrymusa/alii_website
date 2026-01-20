import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimateHTMLContent = ({ 
  children,
  animationType = "fadeUp",
  className = "",
  as: Component = "div",
  delay = 0,
  stagger = 0.03
}) => {
  const containerRef = useRef(null);
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
          stagger: stagger,
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
          stagger: stagger,
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
          stagger: stagger,
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
          stagger: stagger,
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

  const wrapCharactersInSpans = useCallback((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      const fragment = document.createDocumentFragment();
      
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'inline-block opacity-0 animate-char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        fragment.appendChild(span);
      });
      
      node.parentNode.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
      node.childNodes.forEach(child => wrapCharactersInSpans(child));
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Wrap semua karakter dengan span
    const container = containerRef.current;
    wrapCharactersInSpans(container);

    // Kumpulkan semua span karakter
    const charSpans = container.querySelectorAll('.animate-char');
    charsRef.current = Array.from(charSpans);

    const trigger = container;

    if (charsRef.current.length > 0 && trigger) {
      const animation = animationEffects[animationType];
      if (animation) {
        animation(charsRef.current, trigger);
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children, animationType, delay, stagger, wrapCharactersInSpans]);

  return (
    <Component 
      ref={containerRef} 
      className={className}
    >
      {children}
    </Component>
  );
};

export default AnimateHTMLContent;