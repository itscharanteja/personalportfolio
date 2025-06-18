import React, { useRef } from 'react';
import { Github, ExternalLink, Star, BadgeCheck, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

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

const SLIDES_TO_SHOW = 1; // Show 1 project at a time on mobile, more on desktop via CSS

export default function Projects() {
  const [current, setCurrent] = React.useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  // Responsive: show more slides on desktop
  const getSlidesToShow = () => {
    if (typeof window === "undefined") return SLIDES_TO_SHOW;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [slidesToShow, setSlidesToShow] = React.useState(getSlidesToShow());

  React.useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = projects.length;

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  // Calculate which projects to show
  const getVisibleProjects = () => {
    if (slidesToShow >= total) return projects;
    let visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(projects[(current + i) % total]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 via-teal-50 to-indigo-50 dark:from-slate-900 dark:via-teal-950 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          <span className="inline-flex items-center gap-2">
            <Code2 className="inline-block text-teal-500 dark:text-teal-300" size={36} />
            Featured Projects
          </span>
        </h2>
        <div className="relative">
          {/* Slider Controls */}
          <button
            onClick={goToPrev}
            aria-label="Previous projects"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-md p-2 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors duration-200"
            style={{ display: total > slidesToShow ? 'block' : 'none' }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next projects"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-md p-2 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors duration-200"
            style={{ display: total > slidesToShow ? 'block' : 'none' }}
          >
            <ChevronRight size={28} />
          </button>
          {/* Slider List */}
          <div
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${visibleProjects.length * 100}%`,
                transform: `translateX(0%)`
              }}
            >
              {visibleProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                  style={{ minWidth: 0 }}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div className="relative group bg-white/80 dark:bg-slate-800/80 rounded-2xl overflow-hidden shadow-xl border border-transparent hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300 hover:scale-[1.03]">
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gradient-to-r from-teal-400 to-purple-300 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
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
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                        {project.title}
                        <BadgeCheck className="text-teal-500" size={18} />
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-teal-400 dark:bg-teal-300 rounded-full" />
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300 group/link"
                          title="View source code on GitHub"
                        >
                          <Github size={20} className="mr-1" />
                          <span className="underline decoration-dotted underline-offset-2 group-hover/link:decoration-solid">Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-slate-700 dark:text-slate-200 hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-300 group/link"
                          title="View live demo"
                        >
                          <ExternalLink size={20} className="mr-1" />
                          <span className="underline decoration-dotted underline-offset-2 group-hover/link:decoration-solid">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: total }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-teal-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
