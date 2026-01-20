import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ROADMAP_IMG = './assets/images/roadmap.png';
gsap.registerPlugin(ScrollTrigger);

export default function RoadMap() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const yearsRef = useRef([]);

  const steps = [
    {
      year: '2025',
      title: 'Fondasi Literasi & Etika',
      bullets: [
        'Penerapan Kebijakan AI',
        'Islamic NLP Beta',
        'Program dasar AI untuk kampus',
      ],
      color: 'bg-rose-500',
    },
    {
      year: '2026',
      title: 'Penguatan Riset & Ekosistem',
      bullets: [
        'Islamic Indonesia NLP V1',
        'Islamic Indonesia NLP V2',
        'Integrasi pembelajaran AI',
      ],
      color: 'bg-emerald-500',
    },
    {
      year: '2027',
      title: 'Ekspansi Inovasi & Publikasi',
      bullets: ['AI Journal & paten inovasi', 'Kemitraan industri & negeri'],
      color: 'bg-sky-500',
    },
    {
      year: '2028',
      title: 'Pusat Keunggulan AI Islami',
      bullets: ['Center of Excellence', 'Global Islamic AI Network'],
      color: 'bg-indigo-600',
    },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // ❌ NONAKTIFKAN PARALLAX DI MOBILE
      if (!isMobile) {
        gsap.to(imageRef.current, {
          y: "-25%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }

      yearsRef.current.forEach((el, i) => {
        if (!el) return;

        const card = el.querySelector(".card");
        const line = el.querySelector(".line");
        const marker = el.querySelector(".marker");

        // Animasi Card — LEBIH RINGAN DI MOBILE
        gsap.fromTo(
          card,
          {
            x: isMobile ? 0 : i % 2 === 0 ? 200 : -200,
            opacity: 0,
            scale: isMobile ? 1 : 0.95,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: isMobile ? 0.4 : 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );

        // Animasi garis — MOBILE DIPERKOKOH
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: isMobile ? 1 : 0 },
            {
              scaleX: 1,
              duration: 0.9,
              ease: "power2.out",
              transformOrigin: "left center",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
              },
            }
          );
        }

        // Marker pop
        gsap.fromTo(
          marker,
          { opacity: 0, scale: isMobile ? 1 : 0.7 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="section-container w-full min-h-screen bg-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <h2 className="text-header text-center text-slate-800 mb-4 text-center">
          Evolusi Pengembangan AI Berbasis Nilai Islam <br />(2025–2028)
        </h2>
        <p className="text-slate-600 mb-12 text-center">
          Roadmap strategis ALII — fokus per tahun dan target unggulan.
        </p>

        {/* Mobile Image (Center) */}
        <div className="block lg:hidden mb-10">
          <img
            src={ROADMAP_IMG}
            alt="roadmap"
            className="w-3/4 mx-auto opacity-90"
          />
        </div>

        <div className="relative flex flex-col lg:flex-row items-start">
          
          {/* Desktop Left Image - Parallax */}
          <div className="hidden lg:block w-1/2 pr-8">
            <div className="sticky top-24 flex justify-center h-screen">
              <img
                ref={imageRef}
                src={ROADMAP_IMG}
                alt="roadmap"
                className="w-full h-auto select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-6">
            <div className="flex flex-col gap-20">
              {steps.map((s, i) => (
                <div
                  key={s.year}
                  ref={(el) => (yearsRef.current[i] = el)}
                  className="relative flex items-start gap-4 lg:gap-8"
                >
                  {/* Marker + Line */}
                  <div className="connector relative flex items-center">
                    <div className="marker w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                      <div className={`w-9 h-9 rounded-full ${s.color} flex items-center justify-center text-white font-bold`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Line — shorter on mobile */}
                    <svg
                      className="absolute left-14 top-1/2 -translate-y-1/2 hidden md:block"
                      width={200}
                      height={4}
                    >
                      <rect className="line w-full h-1 bg-slate-300" width="200" height="4" rx="2" fill="#CBD5E1" />
                    </svg>
                  </div>

                  {/* Card */}
                  <div className="card bg-white p-5 md:p-6 rounded-2xl shadow-lg flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xs text-slate-500">Tahun</div>
                        <div className="text-2xl font-bold text-slate-800">
                          {s.year}
                        </div>
                      </div>
                      <div className="text-xs text-slate-400">Fokus Utama</div>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-2">
                      {s.title}
                    </h3>
                    <ul className="text-slate-600 list-disc list-inside space-y-1">
                      {s.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
