import React, { useRef } from "react";
// import { ALII_PROGRAMS } from './constants';
// import ProgramCard from './components/ProgramCard';
// import AnimatedBackground from './components/AnimatedBackground';
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowDown,
  BookOpen,
  Microscope,
  Scale,
  Users,
  Rocket,
} from "lucide-react";
import ProgramCard from "../../components/web/program/ProgramCard";
import AnimatedBackground from "../../components/web/program/AnimatedBackground";
import ScrambleText from "../../components/ScrambleText";
import GsapTextPop from "../../components/GsapTextPop";
import JoinUs from "../../components/web/program/JoinUs";
import MitraKerjasama from "../../components/web/MitraKerjasama";
import AnimatedText from "../../components/AnimatedText";
import { BUTTON_LINK } from "../../components/ButtonComp";
import ChatBot from "../../components/web/ChatBot";

const ProgramPage = () => {
  const ALII_PROGRAMS = [
    {
      id: "p1",
      title: "AI Literacy Academy",
      description:
        "Pelatihan dan sertifikasi penggunaan AI etis untuk pembelajaran dan riset.",
      icon: BookOpen,
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: "p2",
      title: "Research & Innovation Hub",
      description:
        "Kolaborasi riset lintas fakultas berbasis AI untuk solusi masa depan.",
      icon: Microscope,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "p3",
      title: "Ethical AI Policy Implementation",
      description:
        "Pendampingan penerapan kebijakan penggunaan LLM di kampus secara bertanggung jawab.",
      icon: Scale,
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "p4",
      title: "Community Engagement & Digital Dakwah",
      description:
        "Edukasi publik tentang AI untuk kebermanfaatan umat dan syiar digital.",
      icon: Users,
      color: "from-amber-400 to-orange-500",
    },
    {
      id: "p5",
      title: "Startup & Creativity Lab",
      description:
        "Inkubasi ide dan karya inovasi mahasiswa berbasis teknologi cerdas.",
      icon: Rocket,
      color: "from-rose-400 to-red-500",
    },
  ];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToPrograms = () => {
    const element = document.getElementById("programs-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-50 font-sans bg-slate-100 selection:text-slate-900">
      {/* <AnimatedBackground /> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10">
        <motion.div style={{ y }} className="text-center max-w-4xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent tracking-wide">
              ALII INSTITUTE
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl text-slate-800 font-bold tracking-tight mb-8"
          >
            <AnimatedText
              text="Membangun Masa Depan AI yang Etis "
              className="gradient-text"
              delay={0.9}
            />
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            <ScrambleText className="gradient-text" delay={0.9} />
            <AnimatedText 
            text="Artificial Intelligence Literacy & Integrity Institute (ALII)"
            />
            <br/>
            <AnimatedText 
            text="hadir  untuk menjembatani inovasi teknologi dengan nilai-nilai etika dan kebermanfaatan umat."
            />

          </motion.p>
{/* 
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onClick={scrollToPrograms}
            className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Lihat Program Unggulan
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button> */}
          <div className="flex items-center justify-center">
          <BUTTON_LINK />

          </div>
        </motion.div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-30 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

<MitraKerjasama />


      <section
        id="programs-section"
        className="relative py-32 px-6 md:px-12 z-10 max-w-screen-2xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-header text-center mb-6 text-slate-700">
                <ScrambleText
              text="Program Utama"
              className="gradient-text"
              delay={0.9}
            />
          </h2>
          {/* <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div> */}
          <p className="mt-6 text-slate-700 max-w-2xl mx-auto text-lg">
            Inisiatif strategis kami untuk mendorong literasi, inovasi, dan
            penerapan AI yang bertanggung jawab.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALII_PROGRAMS.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </section>

      <JoinUs />
      <ChatBot />
    </div>
  );
};

export default ProgramPage;
