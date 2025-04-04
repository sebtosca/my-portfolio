import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 pt-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center">
          <p className="text-sm text-white/50">
            Sebastien Toscano
          </p>
          <div className="mt-6 flex space-x-6">
            <a
              href="https://github.com/sebtosca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-emerald-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sebastientoscano07@gmail.com"
              className="text-white/60 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;