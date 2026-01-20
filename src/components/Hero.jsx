// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import HeroImage from "./HeroImage";

// Variasi animasi untuk container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anak-anak elemen akan muncul satu per satu
      delayChildren: 0.3,
    },
  },
};

// Variasi animasi untuk item (teks, gambar)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      className="pb-16 sm:pt-32 sm:pb-24 md:pt-32 lg:pt-48 bg-abu_soft lg:min-h-screen flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-screen-2xl mt-12 md:mt-4 mx-auto px-4 text-center ">
        {/* Judul Utama */}
        <motion.h1
          variants={itemVariants}
          dir="rtl"
          className="text-header-arabic font-bold tracking-tight text-gray-900 max-w-5xl mx-auto noto-kufi leading-relaxed text-center"
        >
          {/* Recruiting system that helps you hire better talent{" "}
          <span className="text-gray-600">faster.</span> */}
          أَنَا مَدِينَةُ الْعِلْمِ وَعَلِيٌّ بَابُهَا،
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          dir="rtl"
          className="text-h1 font-bold  tracking-tight text-biru_jelas max-w-5xl mx-auto noto-kufi leading-relaxed"
        >
          {/* Recruiting system that helps you hire better talent{" "}
          <span className="text-gray-600">faster.</span> */}
          فَمَنْ أَرَادَ الْعِلْمَ فَلْيَأْتِ الْبَابَ
        </motion.h2>

        {/* Sub-judul */}
        <motion.p
          variants={itemVariants}
          className="text-md md:text-lg text-gray-600 max-w-lg mx-auto"
        >
          Artificial Intelligence Literacy and Innovation Institute (ALII) Institut
          Literasi & Inovasi Kecerdasan Buatan
        </motion.p>

        <HeroImage />
      </div>
    </motion.section>
  );
};

export default Hero;
