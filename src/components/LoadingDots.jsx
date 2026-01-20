import { motion } from "framer-motion";

export default function LoadingDots() {
  const colors = ["bg-red-500", "bg-yellow-400", "bg-green-500", "bg-blue-500", "bg-purple-500"];

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-3">
        {colors.map((color, i) => (
          <motion.div
            key={i}
            className={`w-4 h-4 rounded-full ${color}`}
            animate={{ scale: [1, 1.5, 1] }} // pulse effect
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: i * 0.4, // stagger setiap dot
            }}
          />
        ))}
      </div>
    </div>
  );
}
