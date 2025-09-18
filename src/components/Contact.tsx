import React from 'react';
import { Mail, Linkedin, Github, Code, Download, Phone } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      value: "vermaakshit@outlook.com",
      href: "mailto:vermaakshit@outlook.com",
      icon: Mail,
      color: "hover:text-blue-600 hover:bg-blue-50"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/akshitverma9150",
      href: "https://www.linkedin.com/in/akshitverma9150/",
      icon: Linkedin,
      color: "hover:text-blue-700 hover:bg-blue-50"
    },
    {
      name: "GitHub",
      value: "github.com/Akshit9150",
      href: "https://github.com/Akshit9150",
      icon: Github,
      color: "hover:text-gray-800 hover:bg-gray-50"
    },
    {
      name: "LeetCode",
      value: "leetcode.com/Akshit9150",
      href: "https://leetcode.com/u/Akshit9150/",
      icon: Code,
      color: "hover:text-orange-600 hover:bg-orange-50"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let's <span className="text-yellow-600">Connect</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start the next chapter of my career. Let's discuss opportunities and build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-yellow-600 ${contact.color} group hover-cursor`}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                  <contact.icon className="text-yellow-600" size={32} />
                </div>
                <h3 className="font-bold text-black mb-2">{contact.name}</h3>
                <p className="text-gray-600 text-sm break-all">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block border-2 border-yellow-600 hover-cursor">
            <h3 className="text-2xl font-bold text-black mb-4">Ready to Download My Resume?</h3>
            <p className="text-gray-600 mb-6">Get a comprehensive overview of my skills, experience, and projects.</p>
            <button className="bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto">
              <Download size={20} />
              Download Resume PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;