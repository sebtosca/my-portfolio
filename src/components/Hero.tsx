import React from 'react';
import { ArrowDown, Brain, MessageSquare } from 'lucide-react';
import Typewriter from 'typewriter-effect';

// ✅ Importing image from src/images/
import moiImage from '/images/Moi.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative" id="about">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-emerald-400/20"
          data-aos="fade-up"
        >
          <img 
            src={moiImage}
            alt="Sebastien Toscano"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-300" data-aos="fade-up">
          GenAI | AI Research Assistant | AI for Business Transformation
        </h1>

        <div
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed h-[120px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Typewriter
            options={{
              delay: 30,
              cursor: '|',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`Hi! I'm Sébastien — a hands-on AI developer and master's student turning ideas into impactful, data-driven applications. Check out my latest work on ML, GenAI, and automation.`)
                .start();
            }}
          />
        </div>

        <div className="flex justify-center space-x-6" data-aos="fade-up" data-aos-delay="200">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-white hover:bg-emerald-400 hover:text-white text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Brain className="w-5 h-5" />
            Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-white/20 hover:bg-white/10 hover:border-emerald-400 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <MessageSquare className="w-5 h-5" />
            Contact
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-emerald-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
