import React from 'react';

const schools = [
  {
    name: "SKEMA Business School",
    logo: "/images/OIP.jpeg",
    location: "Paris, France",
    url: "https://www.skema.edu/"
  },
  {
    name: "ESIEA School of Engineering",
    logo: "/images/ESIEA_logo.png",
    location: "Paris, France",
    url: "https://www.esiea.fr/"
  },
  {
    name: "The George Washington University",
    logo: "/images/GWU.jpg",
    location: "Washington, DC",
    url: "https://www.gwu.edu/"
  }
];

const Education = () => {
  return (
    <section className="py-20" id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white" data-aos="fade-up">Education</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-16" data-aos="fade-up">
          {schools.map((school, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <a
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img
                  src={school.logo}
                  alt={`${school.name} logo`}
                  className="w-44 h-28 object-contain"
                  loading="lazy"
                  style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
                />
              </a>
              <div className="mt-2">
                <h3 className="font-medium text-sm text-white">{school.name}</h3>
                <p className="text-xs text-gray-400">{school.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
