import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const circles = [];
    const colors = ['#38BDF8', '#10B981', '#818CF8', '#F472B6'];

    for (let i = 0; i < 8; i++) {
      const circle = document.createElement('div');
      const size = Math.random() * 300 + 100;
      const color = colors[Math.floor(Math.random() * colors.length)];

      circle.style.position = 'absolute';
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.borderRadius = '50%';
      circle.style.background = `radial-gradient(circle, ${color}40 0%, transparent 70%)`;
      circle.style.filter = 'blur(40px)';
      circle.style.opacity = '0.4';
      circle.style.top = `${Math.random() * height}px`;
      circle.style.left = `${Math.random() * width}px`;

      container.appendChild(circle);
      circles.push(circle);

      // FIX: gsap.utils.random() instead of string random()
      gsap.to(circle, {
        x: gsap.utils.random(-200, 200),
        y: gsap.utils.random(-200, 200),
        scale: gsap.utils.random(0.8, 1.3),
        duration: gsap.utils.random(10, 20),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    return () => {
      circles.forEach((c) => c.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
};

export default AnimatedBackground;
