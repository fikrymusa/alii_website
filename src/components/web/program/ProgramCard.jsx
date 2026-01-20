import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProgramCard = ({ program, index }) => {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-full w-full"
    >
      {/* Glow Effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${program.color} opacity-20 blur group-hover:opacity-60 transition duration-500 rounded-2xl`}
      ></div>

      {/* Card Content */}
      <div className="relative h-full bg-slate-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col hover:border-white/20 transition-colors duration-300">
        
        {/* Icon Container */}
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} p-0.5 mb-6 shadow-lg shadow-white/5`}
        >
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
          {program.title}
        </h3>

        <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
          {program.description}
        </p>

        <div className="flex items-center text-sm font-medium text-slate-300 group-hover:text-white transition-colors cursor-pointer">
          <span className="mr-2">Pelajari Lebih Lanjut</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
