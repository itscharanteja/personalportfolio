import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Code, Smartphone, Brain, Globe2 } from "lucide-react";

const services = [
  {
    icon: <Code size={32} className="text-teal-500" />,
    title: "Web Development",
    description: "Modern, responsive, and performant web apps using React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: <Smartphone size={32} className="text-indigo-500" />,
    title: "Mobile Apps",
    description: "Cross-platform mobile apps with React Native, delivering seamless user experiences.",
  },
  {
    icon: <Brain size={32} className="text-purple-500" />,
    title: "AI & Automation",
    description: "Custom AI copilots, chatbots, and workflow automation using Python and generative AI.",
  },
  {
    icon: <Globe2 size={32} className="text-blue-500" />,
    title: "Open Source & Community",
    description: "Active contributor to open source, building tools and sharing knowledge with the dev community.",
  },
];

export default function Services() {
  const [ref, controls] = useScrollAnimation(0.2, true);

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-indigo-50 via-white to-teal-50 dark:from-indigo-950 dark:via-slate-950 dark:to-teal-950"
      ref={ref}
      aria-label="Services section"
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
          What I Do
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring" } },
              }}
              tabIndex={0}
              aria-label={service.title}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
