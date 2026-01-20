import React from "react";
import { motion, useInView } from "framer-motion";
import {
  BadgeCheck,
  Shield,
  Users,
  HeartHandshake,
  FileCheck
} from "lucide-react";

const Principles = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variasi animasi untuk kontainer
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variasi animasi untuk item yang akan muncul (fade in dari bawah)
  const fadeInUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variasi animasi untuk kartu (dengan efek skala)
  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275], // 'back.out' setara di GSAP
      },
    },
  };

  const items = [
    {
      title: "Kejujuran",
      principle: "Transparansi penggunaan AI",
      implication: "Sitasi & verifikasi data",
      icon: <BadgeCheck size={42} strokeWidth={2.2} className="text-white" />,
      color: "bg-purple-500",
    },
    {
      title: "Amanah",
      principle: "Tanggung jawab ilmiah",
      implication: "Akurasi & kepercayaan",
      icon: <Shield size={42} strokeWidth={2.2} className="text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Keadilan",
      principle: "Inklusivitas akses",
      implication: "AI untuk seluruh disiplin ilmu",
      icon: <Users size={42} strokeWidth={2.2} className="text-white" />,
      color: "bg-emerald-500",
    },
    {
      title: "Kemaslahatan",
      principle: "Inovasi bermanfaat",
      implication: "Solusi untuk publik",
      icon: (
        <HeartHandshake size={42} strokeWidth={2.2} className="text-white" />
      ),
      color: "bg-orange-500",
    },
    {
      title: "Integritas Akademik",
      principle: "Anti plagiasi & manipulasi",
      implication: "Tata kelola AI yang benar",
      icon: <FileCheck size={42} strokeWidth={2.2} className="text-white" />,
      color: "bg-red-500",
    },
  ];

  return (
    <motion.section 
      ref={ref} 
      className="bg-abu_soft section-container w-full overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-screen-2xl min-h-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 w-full">
        
        {/* Title & Subtitle */}
        <motion.div variants={containerVariants}>
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-header text-center font-bold text-slate-700 mb-4 sm:mb-6"
          >
            Nilai dan Prinsip Kami
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="text-base sm:text-lg text-slate-600 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed"
          >
            ALII menempatkan nilai Islam sebagai fondasi dalam setiap pengembangan teknologi:
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7 justify-items-center"
          variants={containerVariants}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${item.color} rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl text-white min-h-[220px] sm:min-h-[240px] flex flex-col gap-3 sm:gap-4 justify-between
              transform transition-all duration-300 hover:shadow-2xl w-full`}
            >
              {/* Icon */}
              <div className="p-2 sm:p-3 bg-white/25 w-fit rounded-xl sm:rounded-2xl">
                {React.cloneElement(item.icon, {
                  size: window.innerWidth < 640 ? 32 : 42,
                  className: "text-white",
                })}
              </div>

              {/* Text content */}
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-extrabold mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm opacity-90">• {item.principle}</p>
                <p className="text-xs sm:text-sm opacity-90">• {item.implication}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.p 
          variants={fadeInUpVariants}
          className="text-lg sm:text-xl md:text-2xl text-slate-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-32 font-semibold italic"
        >
          "AI bukan sekadar kemajuan teknologi, tetapi amanah peradaban."
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Principles;