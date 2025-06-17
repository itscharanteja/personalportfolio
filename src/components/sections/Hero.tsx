import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../../assets/images/profile.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Hero() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-50 via-teal-50 to-indigo-50 dark:from-slate-900 dark:via-teal-950 dark:to-indigo-950"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative inline-block" data-aos="zoom-in">
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto mb-8 border-4 border-white dark:border-slate-800 shadow-lg object-cover"
            />
          </div>
          <h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
            data-aos="fade-down"
          >
            Charan Sri Teja Burra
          </h1>
          <p
            className="text-xl text-slate-600 dark:text-slate-300 mb-8"
            data-aos="fade-up"
          >
            Full Stack Developer | Generative AI | Open Source Contributor
          </p>
          <p
            className="text-lg text-slate-700 dark:text-slate-400 max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
          >
            I’m a passionate Full Stack Developer with expertise in React.js, React Native, Python, and Tailwind CSS. I have experience building dynamic web and mobile applications, including AI-powered projects. My work includes developing custom AI copilots, blog management systems, and Chrome extensions using the latest technologies.
          </p>
          <div className="flex justify-center space-x-6" data-aos="fade-up">
            <a
              href="https://github.com/itscharanteja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/charan-sri-teja-burra-a386a5225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:itscharanteja@gmail.com"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
