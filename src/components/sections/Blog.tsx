import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const articles = [
  {
    title: "Building a Chrome Extension with React",
    date: "2025-05-10",
    summary: "A step-by-step guide to building a productivity Chrome extension using React and TypeScript.",
    url: "https://dev.to/itscharanteja/building-a-chrome-extension-with-react-1a2b",
  },
  {
    title: "How to Train Your Own AI Copilot",
    date: "2025-04-22",
    summary: "Learn how to create a custom AI copilot using Python and open-source LLMs.",
    url: "https://dev.to/itscharanteja/how-to-train-your-own-ai-copilot-3c4d",
  },
  {
    title: "React Native vs Flutter: A Developer’s Perspective",
    date: "2025-03-15",
    summary: "Comparing React Native and Flutter for cross-platform mobile app development.",
    url: "https://dev.to/itscharanteja/react-native-vs-flutter-5e6f",
  },
];

export default function Blog() {
  const [ref, controls] = useScrollAnimation(0.2, true);

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-teal-50 via-white to-indigo-50 dark:from-teal-950 dark:via-slate-950 dark:to-indigo-950"
      ref={ref}
      aria-label="Blog and Articles section"
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
          Blog & Articles
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {articles.map((a, idx) => (
            <motion.a
              key={a.title}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring" } },
              }}
              tabIndex={0}
              aria-label={`Read article: ${a.title}`}
            >
              <BookOpen className="text-teal-500 mb-2" size={28} />
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-teal-500 transition-colors">
                {a.title}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">{new Date(a.date).toLocaleDateString()}</span>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{a.summary}</p>
              <span className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-300 font-medium mt-auto group-hover:underline">
                Read More <ExternalLink size={16} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
