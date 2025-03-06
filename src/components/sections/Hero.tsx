import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../../assets/images/profile.png';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto mb-8 border-4 border-white dark:border-gray-800 shadow-lg object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Charan Sri Teja Burra
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          I’m a passionate Full Stack Developer with expertise in React.js, React Native, Python, and Tailwind CSS. I have experience building dynamic web and mobile applications, including AI-powered projects. My work includes developing custom AI copilots, blog management systems, and Chrome extensions using the latest technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/itscharanteja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/charan-sri-teja-burra-a386a5225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:itscharanteja@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}