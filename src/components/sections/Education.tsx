import React from 'react';
import { GraduationCap } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const education = [
  {
    school: "Blekinge Institute of Technology",
    degree: "Bachelors of Computer Science and Engineering",
    period: "2024 - 2025",
    description: "Pusuing my Bachelors in BTH, Karlskrona, Sweden",
    courses: ["Advanced Algorithms", "Machine Learning", "Python", "Cloud Computing", "Bachelor Thesis", "R&D"]
  },
  {
    school: "Jawaharlal Nehru Technological University Kakinada",
    degree: "Bachelor of Science in Computer Science",
    period: "2021-2024",
    description: "Completed my bachelors in JNTU, Kakinada, India. Experienced in lots of courses like Data Structures, Software Engineering, Database Systems, etc.",
    courses: ["Data Structures", "Software Engineering", "Database Systems", "C", "C++", "Java"]
  }
];

export default function Education() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-slate-50 via-teal-50 to-indigo-50 dark:from-slate-900 dark:via-teal-950 dark:to-indigo-950"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Education
        </h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white/80 dark:bg-slate-800/80 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="absolute -left-3 top-8" data-aos="zoom-in">
                <GraduationCap className="w-6 h-6 text-teal-500" />
              </div>
              <div className="ml-6">
                <h3
                  className="text-2xl font-semibold text-slate-800 dark:text-slate-100"
                  data-aos="fade-right"
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-lg text-teal-600 dark:text-teal-300 mb-2"
                  data-aos="fade-left"
                >
                  {edu.school}
                </p>
                <p
                  className="text-slate-600 dark:text-slate-400 mb-4"
                  data-aos="fade-up"
                >
                  {edu.period}
                </p>
                <p
                  className="text-slate-700 dark:text-slate-300 mb-4"
                  data-aos="fade-up"
                >
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-2" data-aos="fade-up">
                  {edu.courses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm"
                    >
                      {course}
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
