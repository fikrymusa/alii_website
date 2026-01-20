import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const contentRefs = useRef([]);
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const slides = [
    {
      id: 1,
      title: "Petualangan Baru",
      description: "Temukan pengalaman tak terlupakan dalam setiap perjalanan",
      backgroundImage:
        "https://images.unsplash.com/photo-1682687220945-922198770e60?auto=format&fit=crop&w=2070&q=80",
      color: "from-blue-500/30 to-purple-600/30",
    },
    {
      id: 2,
      title: "Teknologi Masa Depan",
      description: "Inovasi terbaru yang mengubah cara kita hidup",
      backgroundImage:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2068&q=80",
      color: "from-green-500/30 to-blue-600/30",
    },
    {
      id: 3,
      title: "Seni & Kreativitas",
      description: "Ekspresikan imajinasi tanpa batas",
      backgroundImage:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=2058&q=80",
      color: "from-pink-500/30 to-red-600/30",
    },
  ];

  // -------------------------
  // Content animation (title/desc/button)
  // -------------------------
  const animateContent = (index) => {
    const content = contentRefs.current[index];
    if (!content) return;

    // Cari children yang relevan (h2, p, button)
    const title = content.querySelector("h2");
    const desc = content.querySelector("p");
    const btn = content.querySelector("button");

    // Set initial state
    gsap.set([title, desc, btn], { y: 30, opacity: 0, scale: 1 });

    const tl = gsap.timeline();
    tl.to(title, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" })
      .to(desc, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.45")
      .to(btn, { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.6)" }, "-=0.35");
  };

  // -------------------------
  // Background / slide transition
  // -------------------------
  const animateBackgroundTransition = (fromIndex, toIndex, onComplete) => {
    if (!sliderRef.current) return;
    if (isAnimatingRef.current) return;

    const slidesEl = sliderRef.current.children;
    const fromEl = slidesEl[fromIndex];
    const toEl = slidesEl[toIndex];

    if (!fromEl || !toEl) return;

    isAnimatingRef.current = true;

    // Ensure toEl above fromEl
    gsap.set(toEl, { zIndex: 30, pointerEvents: "none" });
    gsap.set(fromEl, { zIndex: 20 });
    gsap.set(toEl, { opacity: 0, scale: 0.98 });

    const tl = gsap.timeline({
      defaults: { duration: 0.9, ease: "power3.out" },
      onComplete: () => {
        // after animation: make toEl the "visible" base
        gsap.set(toEl, { opacity: 1, scale: 1, zIndex: 10, pointerEvents: "auto" });
        gsap.set(fromEl, { opacity: 0, scale: 1, zIndex: 0, pointerEvents: "none" });

        isAnimatingRef.current = false;
        if (onComplete) onComplete();
      },
    });

    // cross-fade with subtle scale
    tl.to(fromEl, { opacity: 0, scale: 1.05 }, 0)
      .to(toEl, { opacity: 1, scale: 1 }, 0.12);
  };

  // -------------------------
  // Navigation helpers
  // -------------------------
  const goToSlide = (index) => {
    if (index === currentSlide) return;
    if (isAnimatingRef.current) return;

    const prev = currentSlide;
    animateBackgroundTransition(prev, index, () => {
      setCurrentSlide(index);
      // animate content of new slide (slightly delayed so DOM ready)
      requestAnimationFrame(() => animateContent(index));
    });
  };

  const nextSlide = () => {
    if (isAnimatingRef.current) return;
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    if (isAnimatingRef.current) return;
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  };

  // -------------------------
  // Auto slide
  // -------------------------
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // -------------------------
  // Initialize styles on mount
  // -------------------------
  useEffect(() => {
    // Set initial styles for all slide elements so gsap always has consistent baseline
    if (!sliderRef.current) return;

    const slidesEl = sliderRef.current.children;
    for (let i = 0; i < slidesEl.length; i++) {
      const el = slidesEl[i];
      gsap.set(el, {
        position: "absolute",
        inset: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: i === currentSlide ? 1 : 0,
        scale: 1,
        zIndex: i === currentSlide ? 10 : 0,
        pointerEvents: i === currentSlide ? "auto" : "none",
      });
    }

    // Animate initial content
    animateContent(currentSlide);

    // start auto slide
    startAutoSlide();

    return () => {
      stopAutoSlide();
      // clear any gsap tweens if component unmounts
      gsap.killTweensOf("*");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // reset auto slide when user navigates manually
  const handleNext = () => {
    nextSlide();
    startAutoSlide();
  };
  const handlePrev = () => {
    prevSlide();
    startAutoSlide();
  };
  const handleDot = (i) => {
    goToSlide(i);
    startAutoSlide();
  };

  // -------------------------
  // Render
  // -------------------------
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => stopAutoSlide()}
      onMouseLeave={() => startAutoSlide()}
    >
      {/* Slides Container */}
      <div ref={sliderRef} className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            // note: visual layout done via GSAP set; keep classNames for fallback styling
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`} />

            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="text-center max-w-4xl px-6"
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-4 rounded-full z-40 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-4 rounded-full z-40 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white ${
              i === currentSlide ? "bg-white scale-125" : "bg-transparent hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 right-8 text-white z-50 bg-black bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm">
        <span className="font-mono text-lg">
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Auto state (debug) */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black bg-opacity-30 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          Auto: {intervalRef.current ? "ON" : "OFF"}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
