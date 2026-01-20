import React from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, GraduationCap, Sparkles, ShieldCheck } from "lucide-react";
import ScrambleText from "../../ScrambleText";
import AnimatedText from "../../AnimatedText";

const Profile = () => {
  // useInView hook untuk memicu animasi saat elemen masuk ke viewport
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variasi animasi untuk kontainer
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Waktu jeda antar anak
      },
    },
  };

  // Variasi animasi untuk item yang akan muncul (fade in dari bawah)
  const fadeInUpVariants = {
    hidden: { y: 40, opacity: 0 },
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
    hidden: { y: 70, opacity: 0, scale: 0.85 },
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
      text: "Penguatan kecerdasan teknologi",
      icon: <Cpu size={48} strokeWidth={2.2} className="text-white" />,
      color: "bg-purple-500",
    },
    {
      text: "Keunggulan akademik dan riset",
      icon: (
        <GraduationCap size={48} strokeWidth={2.2} className="text-white" />
      ),
      color: "bg-blue-500",
    },
    {
      text: "Nilai-nilai spiritual Islam",
      icon: <Sparkles size={48} strokeWidth={2.2} className="text-white" />,
      color: "bg-emerald-500",
    },
    {
      text: "Etika dan integritas keilmuan",
      icon: (
        <ShieldCheck size={48} strokeWidth={2.2} className="text-white" />
      ),
      color: "bg-orange-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="section-container bg-gray-50 w-full overflow-hidden"
    >
      <div
        className="
          max-w-screen-2xl mx-auto 
          flex flex-col gap-6 sm:gap-8 md:gap-10 
          px-4 sm:px-6 md:px-8 lg:px-12 
          py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32
          min-h-screen
        "
      >
        {/* TEXT HEADER */}
        <motion.div
          className="text-center mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="text-sm sm:text-base md:text-lg text-slate-700 mb-2 sm:mb-3 block"
            variants={fadeInUpVariants}
          >
            Tentang Kami
          </motion.span>

          <motion.h1
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
              font-bold text-slate-700 
              leading-tight 
              max-w-5xl text-center mx-auto
            "
            variants={fadeInUpVariants}
          >
            {/* <ScrambleText
              text="Artificial Intelligence Literacy and Innovation Institute"
              effect="scramble"
            /> */}

                          <AnimatedText text="Artificial Intelligence Literacy" effect="bounce"/>
                          <br />
                          <AnimatedText text="and Innovation Institute" effect="bounce"/>


            <br />

            <span
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                font-extrabold text-biru_jelas
              "
            >
              <AnimatedText text="UIN Syarif Hidayatullah" />
              <br />
              <AnimatedText text="Jakarta" />
            </span>
          </motion.h1>

          <motion.p
            className="
              text-sm sm:text-base md:text-lg 
              text-slate-600 
              max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
              mx-auto mt-4 sm:mt-6 leading-relaxed
            "
            variants={fadeInUpVariants}
          >
            <AnimatedText
              text="Artificial Intelligence Literacy and Innovation Institute (ALII)"
            />
            <br />
            <AnimatedText
              effect="bounce"
              text="adalah pusat pengembangan kecerdasan buatan di UIN Jakarta yang berfokus pada literasi, inovasi, dan tata kelola AI beretika."
            />
            <br />
            <br />
            Seiring berkembangnya teknologi dan transformasi digital, UIN Jakarta
            berkomitmen menjadi pelopor kampus Islam yang mengintegrasikan:
          </motion.p>
        </motion.div>

        {/* FEATURE GRID */}
        <motion.div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 
            md:grid-cols-2 lg:grid-cols-4 
            gap-4 sm:gap-5 md:gap-6 lg:gap-8 
            mt-6 sm:mt-8 md:mt-10
          "
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`
                ${item.color} 
                h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 
                rounded-xl sm:rounded-2xl md:rounded-3xl 
                p-4 sm:p-5 md:p-6 
                shadow-lg sm:shadow-xl 
                flex flex-col justify-between 
                transition-transform 
                hover:scale-[1.04] hover:shadow-2xl
              `}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }} // Efek hover yang lebih halus
            >
              <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl w-fit">
                {React.cloneElement(item.icon, {
                  size: window.innerWidth < 640 ? 24 : window.innerWidth < 1024 ? 32 : 40,
                  className: "text-white",
                })}
              </div>

              <span
                className="
                  text-sm sm:text-base md:text-lg lg:text-xl 
                  font-extrabold text-white 
                  leading-snug
                "
              >
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="
            text-sm sm:text-base md:text-lg 
            text-slate-600 
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
            mx-auto mt-8 sm:mt-10 md:mt-12 text-center 
            leading-relaxed
          "
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Melalui pelatihan, riset, dan inovasi terapan, ALII mendukung civitas
          akademika untuk memanfaatkan AI sebagai alat pemberdayaan ilmu dan
          kemaslahatan umat.
        </motion.p>

        <motion.h2
          className="
            font-inter
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
            font-semibold text-biru_soft tracking-wide sm:tracking-wider 
            text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl mx-auto italic mt-8 sm:mt-10
          "
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          "Teknologi memperluas potensi manusia; etika menjaga arah kemuliaannya"
        </motion.h2>
      </div>
    </section>
  );
};

export default Profile;