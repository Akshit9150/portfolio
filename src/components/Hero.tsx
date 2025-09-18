import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-amber-50 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-yellow-600 overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Professional headshot" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 tracking-tight">
            John <span className="text-yellow-600">Smith</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
            Up and Coming Software Developer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through clean code and modern technologies. 
            Constantly learning and building projects that make a difference.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
          <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transform hover:scale-105 transition-all duration-300">
            View My Work
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-yellow-600" size={32} />
      </div>
    </section>
  );
};

export default Hero;