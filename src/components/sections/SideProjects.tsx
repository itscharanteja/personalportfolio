import React from "react";
import { Hammer, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const sideProjects = [
  {
    name: "Blogify",
    description: "A markdown-based blog platform with AI-powered summarization and search.",
    url: "https://github.com/itscharanteja/blogify",
    tech: ["React", "Node.js", "OpenAI"],
  },
  {
    name: "PromptHub",
    description: "A prompt engineering toolkit for LLMs, with a community-driven prompt library.",
    url: "https://github.com/itscharanteja/prompthub",
    tech: ["Python", "Streamlit", "LLM"],
  },
  {
    name: "Portfolio Generator",
    description: "CLI tool to generate beautiful developer portfolios from a config file.",
    url: "https://github.com/itscharanteja/portfolio-generator",
    tech: ["Node.js", "CLI", "EJS"],
  },
];

export default function SideProjects() {
  const [ref, controls] = useScrollAnimation(0.2, true);

  return (
    <section
      id="side-projects"
      className="py-20 bg-gradient-to-b from-indigo-50 via-white to-teal-50 dark:from-indigo-950 dark:via-slate-950 dark:to-teal-950"
      ref={ref}
      aria-label="Side Projects section"
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
          Side Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {sideProjects.map((p, idx) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring" } },
              }}
              tabIndex={0}
              aria-label={`View side project: ${p.name}`}
            >
              <Hammer className="text-teal-500 mb-2" size={28} />
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-teal-500 transition-colors">
                {p.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-300 font-medium mt-auto group-hover:underline">
                View on GitHub <ExternalLink size={16} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
