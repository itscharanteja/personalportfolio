import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Code2 } from "lucide-react";

const skills = [
  { name: "React.js", level: 95, color: "from-teal-400 to-blue-400" },
  { name: "React Native", level: 90, color: "from-indigo-400 to-purple-400" },
  { name: "Python", level: 90, color: "from-yellow-400 to-orange-400" },
  { name: "TypeScript", level: 85, color: "from-blue-400 to-indigo-400" },
  { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-indigo-400" },
  { name: "Node.js", level: 80, color: "from-green-400 to-lime-400" },
  { name: "MongoDB", level: 80, color: "from-green-500 to-emerald-400" },
  { name: "AI/ML", level: 75, color: "from-pink-400 to-purple-400" },
];

export default function Skills() {
  const [ref, controls] = useScrollAnimation(0.2, true);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-teal-50 via-white to-indigo-50 dark:from-teal-950 dark:via-slate-950 dark:to-indigo-950"
      ref={ref}
      aria-label="Skills section"
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
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="mb-6"
              variants={{
                hidden: { opacity: 0, x: idx % 2 === 0 ? -40 : 40 },
                visible: { opacity: 1, x: 0, transition: { type: "spring" } },
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Code2 className="text-teal-500" size={20} />
                  {skill.name}
                </span>
                <span className="text-base text-slate-500 dark:text-slate-300">{skill.level}%</span>
              </div>
              <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-4 rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: 0.2 + idx * 0.1, type: "spring" }}
                  aria-label={`${skill.name} proficiency`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
