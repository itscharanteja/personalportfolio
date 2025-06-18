import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager, Outlier",
    feedback:
      "Charan is a highly skilled developer who brings creativity and reliability to every project. His work on our AI copilots was outstanding.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "CTO, Main Flow Services",
    feedback:
      "A true professional! Charan's ability to deliver high-quality web apps on tight deadlines is impressive.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    role: "Open Source Maintainer",
    feedback:
      "Charan's open source contributions are top-notch. He is collaborative, proactive, and always eager to help.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  const [ref, controls] = useScrollAnimation(0.2, true);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-indigo-50 via-white to-teal-50 dark:from-indigo-950 dark:via-slate-950 dark:to-teal-950"
      ref={ref}
      aria-label="Testimonials section"
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
          Testimonials
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring" } },
              }}
              tabIndex={0}
              aria-label={`Testimonial from ${t.name}`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-teal-400"
                loading="lazy"
                width={64}
                height={64}
              />
              <Quote className="text-teal-400 mb-2" size={28} />
              <p className="text-lg text-slate-700 dark:text-slate-200 mb-4">"{t.feedback}"</p>
              <span className="font-semibold text-teal-600 dark:text-teal-300">{t.name}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{t.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
