import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and beautiful data visualizations.",
      techStack: ["JavaScript", "API Integration", "Chart.js"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-stone-100 pattern-diagonal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured <span className="text-yellow-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-yellow-600 hover-cursor">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 hover-cursor"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;