import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      university: "Vellore Institute of Techology",
      location: "Amaravati, Andhra Pradesh",
      period: "2022 - 2026",
      gpa: "7.47/10.0",
      status: "Expected Graduation",
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering"
      ]
    },
    {
      degree: "Central Board of Secondary Education",
      university: "Delhi Public School",
      location: "Bengaluru",
      period: "2020 - 2022",
      gpa: "3.9/4.0",
      status: "Completed",
      coursework: [
        "Computer Science",
        "Physics",
        "Chemistry",
        "Mathematics"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-amber-50 pattern-dots">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            <span className="text-yellow-600">Education</span> & Learning
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning that supports my development career.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-yellow-600 hover-cursor">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-yellow-600" size={36} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-black mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-gray-700 font-semibold mb-2">{edu.university}</h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
                        GPA: {edu.gpa}
                      </span>
                      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-black mb-3">Relevant Coursework:</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span key={courseIndex} className="bg-white text-gray-700 px-3 py-2 rounded-lg text-sm border border-gray-200 hover:border-yellow-600 transition-colors duration-200">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;