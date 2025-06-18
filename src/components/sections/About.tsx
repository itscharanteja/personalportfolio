import React from "react";
import { User, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const timeline = [
  {
    year: "2024",
    title: "BTH, Sweden",
    description: "Started Bachelors in Computer Science and Engineering at Blekinge Institute of Technology.",
  },
  {
    year: "2021",
    title: "JNTU, India",
    description: "Completed Bachelors in Computer Science at JNTU Kakinada.",
  },
  {
    year: "2019",
    title: "High School",
    description: "Graduated with distinction, developed a passion for technology and problem-solving.",
  },
];

const personality = [
  { label: "Team Player", icon: "🤝" },
  { label: "Lifelong Learner", icon: "📚" },
  { label: "Creative Thinker", icon: "💡" },
  { label: "Problem Solver", icon: "🧩" },
];

export default function About() {
  const [ref, controls] = useScrollAnimation(0.2, true);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-indigo-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-950 dark:to-teal-950"
      ref={ref}
      aria-label="About section"
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
          About Me
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Timeline */}
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { type: "spring" } },
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <User className="text-teal-500" size={28} />
              My Journey
            </h3>
            <ol className="relative border-l-2 border-teal-300 dark:border-teal-700">
              {timeline.map((item, idx) => (
                <li key={idx} className="mb-8 ml-6">
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-teal-400 rounded-full ring-8 ring-white dark:ring-slate-900 text-white font-bold">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                </li>
              ))}
            </ol>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 text-white font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300"
              aria-label="Download Resume"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
          {/* Personality & Details */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { type: "spring" } },
            }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I’m a passionate developer with a love for building impactful products and learning new technologies. I thrive in collaborative environments and enjoy solving real-world problems with code.
            </p>
            <div className="flex flex-wrap gap-4">
              {personality.map((p, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-base font-medium shadow-sm"
                  aria-label={p.label}
                >
                  <span className="text-xl">{p.icon}</span>
                  {p.label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
