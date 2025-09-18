import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "TechCorp Simulation",
      location: "Remote",
      period: "Jun 2023 - Aug 2023",
      type: "Job Simulation",
      description: "Completed a comprehensive 8-week software engineering simulation focusing on full-stack development, agile methodologies, and collaborative coding practices.",
      highlights: [
        "Built responsive web applications using React and Node.js",
        "Participated in daily standups and sprint planning",
        "Collaborated with a team of 6 developers on multiple projects"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Forage Virtual Experience",
      location: "Virtual",
      period: "Mar 2023 - May 2023",
      type: "Virtual Experience",
      description: "Participated in virtual work experience program focusing on modern web development practices and industry-standard workflows.",
      highlights: [
        "Developed RESTful APIs using Express.js and MongoDB",
        "Implemented user authentication and authorization",
        "Created responsive frontend interfaces with modern CSS"
      ]
    },
    {
      title: "Frontend Developer",
      company: "OpenClassrooms Project",
      location: "Remote",
      period: "Jan 2023 - Mar 2023",
      type: "Project-based",
      description: "Completed intensive frontend development projects as part of structured learning program with real-world applications.",
      highlights: [
        "Built 5+ complete web applications from scratch",
        "Mastered CSS Grid, Flexbox, and responsive design",
        "Integrated third-party APIs and services"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-stone-100 pattern-grid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Professional <span className="text-yellow-600">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Virtual experiences, simulations, and project-based work that have shaped my development journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-yellow-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-yellow-600 hover-cursor">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="text-yellow-600" size={20} />
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-1">{exp.title}</h3>
                      <h4 className="text-xl text-gray-700 font-semibold mb-3">{exp.company}</h4>
                    </div>
                    <div className="text-gray-600 text-right">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;