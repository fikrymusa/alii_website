import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { BUTTON_LINK } from "./ButtonComp";
import Image from "./Image";

const Features = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(
        Math.max(1 - rect.top / windowHeight, 0),
        1.5
      );

      setProgress(scrollProgress);
      if (videoRef.current) {
        if (scrollProgress > 0.05 && scrollProgress < 1.3) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transformasi saat scroll
  const scale = progress < 1 ? 1 - progress * 0.3 : 0.7;
  const translateY = progress < 1 ? progress * 20 : 20;

  // Video fade out jika lebih dari 90% tinggi viewport
  const hideThreshold = 0.99;
  const opacity =
    progress < hideThreshold
      ? 1
      : Math.max(1 - (progress - hideThreshold) * 2, 0);

  return (
    <section
      ref={sectionRef}
      className="relative w-full lg:min-h-[200vh] bg-white"
    >
      {/* Sticky Video Section - Fullsize */}
      <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden p-0">
        <video
          ref={videoRef}
          src="./assets/videos/alii_main.mp4"
          muted
          loop
          playsInline
          preload="auto"
          className="transition-all duration-500 ease-in-out"
          style={{
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity,
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Konten setelah video */}
      <div className="relative z-10 bg-white -mt-20 px-4 md:px-8 mb-20">
        <div className="flex flex-col max-w-screen-2xl mx-auto gap-6 bg-abu_soft p-8 lg:p-16 rounded-custom">

          <div className="flex flex-col">
            <span className="text-span mb-4">
              AI Bermakna, Masa Depan Berdaya, Mari Berkolaborasi!
            </span>
            <h1 className="text-header
            mb-6 text-black max-w-5xl"
            >
              AI Bermakna, Masa Depan Berdaya, {" "}
              <span className="text-blue-600">
              Mari Berkolaborasi!

              </span>
            </h1>

          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:items-start">
          <div className="lg:w-6/12 flex flex-col justify-center">

            <p className="text-lg mb-4 text-slate-600 max-w-xl">
              Mewujudkan perpaduan revolusioner antara keilmuan Islam dan
              kecerdasan buatan, menjadi pelopor global kecerdasan buatan
              beretika. Berdasar prinsip maslahah dan adab.
            </p>
            {/* <p className="text-lg mb-6 text-slate-500">
              Wone akan membantu menemukan dan menilai talenta terbaik hanya dalam
              satu menit — tanpa perlu menyaring ratusan resume.
            </p> */}
            {/* <button className="bg-sky-700 rounded-xl flex items-center gap-2 w-fit p-4 hover:bg-gray-800 transition">
              <span className="text-slate-700 p-2 rounded-md bg-slate-100">
                <ArrowRight size={14} />
              </span>
              <p className="text-white text-sm">Join Our Innovation</p>
            </button> */}
            <BUTTON_LINK link={`/tentang`} title="Join Our Innovation" />
          </div>

          <div className="lg:w-6/12 flex justify-center items-center">
            <Image src="/assets/images/workshop-alii.avif" alt="AI Berkelanjutan" className="rounded-3xl mb-4 lg:mb-0 shadow-2xl" />
            {/* <img
              src="https://alii.uinjkt.ac.id/assets/images/ai_berkelanjutan.avif"
              alt="AI Berkelanjutan"
              className="rounded-3xl shadow-lg object-cover "
            /> */}
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
