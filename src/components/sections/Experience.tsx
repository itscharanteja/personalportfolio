import React from 'react';
import { Briefcase } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const experiences = [
  {
    company: "Outlier",
    position: "Generative AI Engineer",
    period: "Mar 2024 - Aug 2024",
    description: "Trained AI models with complex prompts, selecting best responses, and increasing model performance.",
    technologies: ["Artificial Intelligence", "Prompt Engineering", "Generative AI", "Python"]
  },
  {
    company: "Main Flow Services and Technologies",
    position: "Full Stack Web Developer Intern",
    period: "May 2024 - Jun 2024",
    description: "Developed responsive web applications and improved site performance by 40%.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", 'HTML', 'CSS', 'JavaScript']
  }
];

export default function Experience() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-50 via-teal-50 to-indigo-50 dark:from-slate-900 dark:via-teal-950 dark:to-indigo-950"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white/80 dark:bg-slate-800/80 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="absolute -left-3 top-8" data-aos="zoom-in">
                <Briefcase className="w-6 h-6 text-teal-500" />
              </div>
              <div className="ml-6">
                <h3
                  className="text-2xl font-semibold text-slate-800 dark:text-slate-100"
                  data-aos="fade-right"
                >
                  {exp.position}
                </h3>
                <p
                  className="text-lg text-teal-600 dark:text-teal-300 mb-2"
                  data-aos="fade-left"
                >
                  {exp.company}
                </p>
                <p
                  className="text-slate-600 dark:text-slate-400 mb-4"
                  data-aos="fade-up"
                >
                  {exp.period}
                </p>
                <p
                  className="text-slate-700 dark:text-slate-300 mb-4"
                  data-aos="fade-up"
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2" data-aos="fade-up">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
