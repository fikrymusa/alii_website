import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const AdvancedRandomText = () => {
  const textRef = useRef(null);
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    "Creative Animation",
    "GSAP Magic",
    "Text Effects",
    "Awesome Designs",
    "React + GSAP"
  ];

  const randomEffects = [
    // Effect 1: Falling letters
    (chars, container) => {
      chars.forEach((char, index) => {
        gsap.fromTo(char,
          {
            y: -100,
            opacity: 0,
            rotation: -180
          },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            delay: index * 0.05,
            ease: "bounce.out"
          }
        );
      });
    },
    
    // Effect 2: Typewriter with scramble
    (chars, container) => {
      const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
      
      chars.forEach((char, index) => {
        let scrambleCount = 0;
        const maxScrambles = 8;
        
        const scrambleInterval = setInterval(() => {
          char.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          scrambleCount++;
          
          if (scrambleCount >= maxScrambles) {
            clearInterval(scrambleInterval);
            char.textContent = char.getAttribute('data-char');
            gsap.fromTo(char,
              { opacity: 0, scale: 0 },
              { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
            );
          }
        }, 60);
        
        char.setAttribute('data-char', char.textContent);
      });
    },
    
    // Effect 3: Wave animation
    (chars, container) => {
      chars.forEach((char, index) => {
        gsap.fromTo(char,
          {
            y: 100,
            opacity: 0,
            scale: 0.5
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: Math.abs((index - chars.length / 2)) * 0.05,
            ease: "elastic.out(1, 0.5)"
          }
        );
      });
    },
    
    // Effect 4: Random position
    (chars, container) => {
      chars.forEach((char, index) => {
        const startX = (Math.random() - 0.5) * 500;
        const startY = (Math.random() - 0.5) * 200;
        const startRotation = (Math.random() - 0.5) * 360;
        
        gsap.fromTo(char,
          {
            x: startX,
            y: startY,
            rotation: startRotation,
            opacity: 0,
            scale: 0
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out"
          }
        );
      });
    },
    
    // Effect 5: Spin and grow
    (chars, container) => {
      chars.forEach((char, index) => {
        gsap.fromTo(char,
          {
            rotation: 720,
            scale: 0,
            opacity: 0
          },
          {
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            delay: index * 0.08,
            ease: "back.out(1.7)"
          }
        );
      });
    }
  ];

  const animateText = () => {
    if (!textRef.current) return;

    // Clear previous animation
    gsap.killTweensOf(textRef.current.querySelectorAll('span'));

    const text = texts[currentText];
    const chars = text.split('').map((char, index) => 
      char === ' ' ? '\u00A0' : char
    );

    // Create new spans
    textRef.current.innerHTML = chars.map((char, index) => 
      `<span class="inline-block opacity-0" style="transform-origin: center center;">${char}</span>`
    ).join('');

    const charElements = textRef.current.querySelectorAll('span');
    
    // Pick random effect
    const randomEffect = randomEffects[Math.floor(Math.random() * randomEffects.length)];
    randomEffect(charElements, textRef.current);
  };

  useEffect(() => {
    animateText();
    
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-700 flex flex-col items-center justify-center p-8">
      <h1 
        ref={textRef}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8"
      />
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
        <button 
          onClick={() => setCurrentText(prev => (prev - 1 + texts.length) % texts.length)}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300"
        >
          Previous
        </button>
        
        <button 
          onClick={animateText}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300"
        >
          Random Effect
        </button>
        
        <button 
          onClick={() => setCurrentText(prev => (prev + 1) % texts.length)}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdvancedRandomText;