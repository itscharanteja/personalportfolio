import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../../assets/images/profile.png';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation configs
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
  hover: { scale: 1.08, boxShadow: '0 8px 32px 0 rgba(80, 200, 255, 0.25)', background: 'linear-gradient(90deg,#38bdf8,#a78bfa,#f472b6)' },
  tap: { scale: 0.97 },
};

const scrollIndicatorVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.7, type: 'spring' } },
  hover: { y: 8 },
};

const gradientBgVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export default function Hero() {
  // Intersection observer for scroll-triggered animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  // Prefers-reduced-motion support
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      ref={ref}
      aria-label="Hero section"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        variants={gradientBgVariants}
        animate="animate"
        style={{
          background: 'linear-gradient(120deg, #38bdf8 0%, #a78bfa 50%, #f472b6 100%)',
          backgroundSize: '200% 200%',
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={prefersReducedMotion ? 'visible' : controls}
        >
          <motion.div
            className="relative inline-block"
            data-aos="zoom-in"
            variants={textVariants}
          >
            <motion.img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto mb-8 border-4 border-white dark:border-slate-800 shadow-lg object-cover"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1, transition: { delay: 0.1, type: 'spring', stiffness: 90 } }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.04, rotate: 2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98, rotate: -2 }}
            />
          </motion.div>
          <motion.h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
            data-aos="fade-down"
            variants={textVariants}
          >
            Charan Sri Teja Burra
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 mb-8"
            data-aos="fade-up"
            variants={textVariants}
          >
            Full Stack Developer | Generative AI | Open Source Contributor
          </motion.p>
          <motion.p
            className="text-lg text-slate-700 dark:text-slate-400 max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
            variants={textVariants}
          >
            I’m a passionate Full Stack Developer with expertise in React.js, React Native, Python, and Tailwind CSS. I have experience building dynamic web and mobile applications, including AI-powered projects. My work includes developing custom AI copilots, blog management systems, and Chrome extensions using the latest technologies.
          </motion.p>
          {/* Floating CTA Button */}
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 text-white shadow-lg hover:shadow-2xl transition-all duration-300 mb-10"
            variants={ctaVariants}
            initial="hidden"
            animate={prefersReducedMotion ? 'visible' : controls}
            whileHover={prefersReducedMotion ? {} : "hover"}
            whileTap={prefersReducedMotion ? {} : "tap"}
            tabIndex={0}
          >
            Let’s Connect
          </motion.a>
          {/* Social links with micro-interactions */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            data-aos="fade-up"
            variants={textVariants}
          >
            <motion.a
              href="https://github.com/itscharanteja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
              whileHover={prefersReducedMotion ? {} : { scale: 1.18, rotate: -8 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95, rotate: 0 }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/charan-sri-teja-burra-a386a5225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
              whileHover={prefersReducedMotion ? {} : { scale: 1.18, rotate: 8 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95, rotate: 0 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:itscharanteja@gmail.com"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
              whileHover={prefersReducedMotion ? {} : { scale: 1.18, rotate: 0 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95, rotate: 0 }}
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          {/* Scroll indicator */}
          <AnimatePresence>
            <motion.div
              className="flex flex-col items-center justify-center mt-2"
              variants={scrollIndicatorVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              whileHover={prefersReducedMotion ? {} : "hover"}
              aria-hidden="true"
            >
              <span className="block w-1.5 h-8 rounded-full bg-gradient-to-b from-teal-400 via-indigo-400 to-purple-400 opacity-80 mb-1" />
              <svg width="24" height="24" fill="none" className="animate-bounce" aria-hidden="true">
                <path d="M12 5v14M12 19l-5-5m5 5l5-5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Scroll</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
