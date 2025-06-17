import React from 'react';
import { Github, ExternalLink, Star, BadgeCheck, Code2 } from 'lucide-react';

// Animation on scroll (AOS) library import
import 'aos/dist/aos.css';
import AOS from 'aos';

const projects = [
  {
    title: "Click & Summarize Chrome Extension",
    description: "Reading long articles, research papers, or online resources just got simpler With Click & Summarize",
    image: "https://9to5google.com/wp-content/uploads/sites/4/2023/03/google-chrome-logo-4.jpg?quality=82&strip=all&w=1600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Expense Hive",
    description: "A modern expense tracking and group management app built with React Native.  ExpenseHive is designed to simplify the way you manage your finances and group expenses.",
    image: "https://resources.tallysolutions.com/us/wp-content/uploads/2021/11/cogs-vs-expenses-whats-the-difference.jpg",
    technologies: ["React Native", "Firebase", "CSS"],
    github: "https://github.com/itscharanteja/Expense_Hive",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Covid 19 Simulation",
    description: "An interactive Python-based simulation for modeling the impact of COVID-19 across multiple regions. ",
    image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90",
    technologies: ['Python', 'Pandas', 'Matplotlib', "Numpy", "Streamlit"],
    github: "https://github.com/itscharanteja/Covid19-Simulation-Python",
    live: "https://example.com",
    featured: false,
  }
];

export default function Projects() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 dark:from-gray-800 to-white dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          <span className="inline-flex items-center gap-2">
            <Code2 className="inline-block text-blue-500 dark:text-blue-400" size={36} />
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="relative group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-transparent hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  <Star size={16} className="mr-1" />
                  Featured
                </div>
              )}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                  {project.title}
                  <BadgeCheck className="text-green-500" size={18} />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-300 rounded-full" />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group/link"
                    title="View source code on GitHub"
                  >
                    <Github size={20} className="mr-1" />
                    <span className="underline decoration-dotted underline-offset-2 group-hover/link:decoration-solid">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 group/link"
                    title="View live demo"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span className="underline decoration-dotted underline-offset-2 group-hover/link:decoration-solid">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
