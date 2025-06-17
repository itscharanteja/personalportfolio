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
      className="py-20 bg-gradient-to-b from-white dark:from-gray-900 to-blue-50 dark:to-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="absolute -left-3 top-8" data-aos="zoom-in">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-6">
                <h3
                  className="text-2xl font-semibold text-gray-800 dark:text-white"
                  data-aos="fade-right"
                >
                  {exp.position}
                </h3>
                <p
                  className="text-lg text-blue-600 dark:text-blue-400 mb-2"
                  data-aos="fade-left"
                >
                  {exp.company}
                </p>
                <p
                  className="text-gray-600 dark:text-gray-400 mb-4"
                  data-aos="fade-up"
                >
                  {exp.period}
                </p>
                <p
                  className="text-gray-700 dark:text-gray-300 mb-4"
                  data-aos="fade-up"
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2" data-aos="fade-up">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
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
