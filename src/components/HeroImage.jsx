// src/components/HeroImage.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Data untuk foto dummy
const portraits = [
  { src: "./assets/images/img-03.jpg", rotate: -10 },
  { src: "./assets/images/img-02.jpg", rotate: -5 },
  { src: "./assets/images/img-01.jpg", rotate: 2 },
  { src: "./assets/images/img-04.jpg", rotate: 5 },
  { src: "./assets/images/img-05.jpg", rotate: 10 },
];

// Varian animasi (kita gunakan lagi dari sebelumnya)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroImage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Pemicu lebih awal
  });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-16 sm:py-24" // Latar belakang bg-gray-50 sudah di body
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === 1. Kipas Gambar === */}
     <motion.div
  variants={itemVariants}
  className="
    grid grid-cols-2 gap-3 place-items-center     /* mobile */
    sm:grid-cols-3 sm:gap-4     
    md:grid-cols-3 md:gap-4                  /* tablet */
    lg:flex lg:justify-center lg:items-center     /* desktop */
    lg:-space-x-12
  "
>
  {portraits.map((portrait, index) => (
    <motion.img
  key={index}
  src={portrait.src}
  alt={`Portrait ${index + 1}`}
  className="
    w-24 h-24
    sm:w-32 sm:h-32
    md:w-44 md:h-44
    object-cover rounded-lg shadow-xl 
    border-2 sm:border-4 border-gray-50

    rotate-0             /* mobile */
    sm:rotate-0          /* small – tetap lurus */
    md:rotate-[VAR]      /* desktop: rotasi asli */
  "
  style={{
    // Desktop-only rotation (md+)
    '--tw-rotate': `${portrait.rotate}deg`,
    zIndex: 5 - Math.abs(index - 2),
  }}
  whileHover={{
    y: -10,
    rotate:
      portrait.rotate > 0
        ? portrait.rotate + 2
        : portrait.rotate - 2,
    zIndex: 50,
  }}
  transition={{ type: "spring", stiffness: 300 }}
/>

  ))}
</motion.div>

        {/* === 2. Teks Dua Kolom === */}
        <motion.div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-16 lg:gap-y-0 h-fit">
          {/* Kolom Kiri */}
          <motion.div variants={itemVariants}>
            <h3 className="text-left lg:text-center text-h4 font-bold tracking-tight text-gray-900">
              AI yang Berlandaskan Etika
              <br />
              dan Nilai Islam
            </h3>
            <p className="text-left lg:text-center mt-4 text-md text-gray-900 leading-relaxed">
              Kemajuan kecerdasan buatan membawa perubahan besar dalam pola
              belajar, penelitian, dan interaksi manusia. Namun, kecanggihan
              teknologi harus selalu dikendalikan oleh nilai luhur agar tidak
              menyimpang dari tujuan kemanusiaan. ALII hadir sebagai pelopor di
              UIN Jakarta untuk memastikan pemanfaatan AI berjalan dengan penuh
              integritas, mematuhi prinsip etika, dan selaras dengan nilai‐nilai
              Islam dalam setiap penerapannya.
            </p>
          </motion.div>

          {/* Kolom Kanan (Dengan Garis Tengah) */}
          <motion.div
            variants={itemVariants}
            className="lg:pl-16 lg:border-l lg:border-gray-300" // <-- Ini "garis tengah"
          >
            <h3 className="text-left lg:text-center  text-h4 font-bold tracking-tight text-gray-900">
              Membangun Ekosistem AI yang Inklusif
              <br />
              dan Memberdayakan
            </h3>
            <p className="text-left lg:text-center mt-4 text-md text-gray-900 leading-relaxed">
              ALII mendorong terciptanya lingkungan yang memudahkan seluruh
              civitas akademika untuk berkreasi, meningkatkan literasi digital,
              dan menghasilkan inovasi keilmuan. AI bukanlah pengganti akal
              manusia, melainkan alat yang memperluas kemampuan berpikir dan
              berkarya. Melalui kolaborasi, riset, dan edukasi berkelanjutan,
              ALII menuntun masyarakat menuju masa depan yang maju secara
              teknologi dan luhur secara akhlak.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroImage;
