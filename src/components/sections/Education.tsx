import React from 'react';
import { GraduationCap } from 'lucide-react';

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
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white dark:from-gray-900 to-blue-50 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -left-3 top-8">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">{edu.school}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.period}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
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