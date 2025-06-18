import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const achievements = [
  {
    title: "Google Code-In Finalist",
    year: "2023",
    description: "Recognized as a top contributor in Google Code-In for open source projects.",
  },
  {
    title: "AI Hackathon Winner",
    year: "2024",
    description: "Led a team to victory in a national AI hackathon, building a real-time language translation app.",
  },
  {
    title: "Certified React Developer",
    year: "2024",
    description: "Completed advanced React certification with distinction.",
  },
];

export default function Achievements() {
  const [ref, controls] = useScrollAnimation(0.2, true);

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-teal-50 via-white to-indigo-50 dark:from-teal-950 dark:via-slate-950 dark:to-indigo-950"
      ref={ref}
      aria-label="Achievements and Certifications section"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { type: "spring", staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { type: "spring" } },
          }}
        >
          Achievements & Certifications
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-start transition-transform duration-300 hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring" } },
              }}
              tabIndex={0}
              aria-label={ach.title}
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-teal-500" size={24} />
                <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">{ach.title}</span>
                <CheckCircle2 className="text-green-500" size={18} />
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">{ach.year}</span>
              <p className="text-slate-600 dark:text-slate-300">{ach.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
