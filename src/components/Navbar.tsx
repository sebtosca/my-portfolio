import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Name aligned left with some left padding (px-6) */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent whitespace-nowrap">
          Sebastien Toscano
        </h1>

        {/* Nav links right-aligned */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.id}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-emerald-400 transition-colors relative group"
              >
                {section.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
