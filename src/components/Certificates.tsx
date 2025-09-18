import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "December 2023",
      logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "November 2023",
      logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "October 2023",
      logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      title: "Professional Web Development",
      issuer: "LinkedIn Learning",
      date: "September 2023",
      logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            <span className="text-yellow-600">Certificates</span> & Achievements
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional certifications and courses completed to enhance my skills and stay current with industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-yellow-600 hover-cursor">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <Award className="text-yellow-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{cert.title}</h3>
                  <p className="text-gray-700 font-medium mb-3">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
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

export default Certificates;