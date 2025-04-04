import React from 'react';
import GlowCard from './GlowCard';

interface SkillItem {
  name: string;
  logo: string;
  darkModeLogo?: string;
}

const skills: SkillItem[] = [
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'R',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg'
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'TensorFlow',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  },
  {
    name: 'PyTorch',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
  },
  {
    name: 'Scikit-Learn',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
  },
  {
    name: 'SciPy',
    logo: 'https://raw.githubusercontent.com/scipy/scipy/main/doc/source/_static/logo.svg'
  },
  {
    name: 'LangChain',
    logo: '/images/langchain3.webp'
  },
  {
    name: 'Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    darkModeLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  {
    name: 'Google Analytics',
    logo: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg'
  },
  {
    name: 'Vertex AI',
    logo: 'https://www.gstatic.com/devrel-devsite/prod/v45f61267c22a27f819f857dba58e1d30bb8b3c973c9564a29e726a6a9c64c3d8/cloud/images/cloud-logo.svg'
  },
  {
    name: 'Looker Studio',
    logo: 'https://www.vectorlogo.zone/logos/looker/looker-icon.svg'
  },
  {
    name: 'Tableau',
    logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg'
  },
  {
    name: 'Altair',
    logo: 'https://altair.com/images/altair-logo-blue.svg',
    darkModeLogo: 'https://altair.com/images/altair-logo-white.svg'
  },
  {
    name: 'Adobe Campaign',
    logo: 'https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg'
  }
];

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">
          Technical Skills
        </h2>

        <div className="relative overflow-hidden" data-aos="fade-up">
          <div className="skill-carousel-mask absolute left-0 w-[100px] h-full bg-gradient-to-r from-black via-black to-transparent z-10" />
          <div className="skill-carousel-mask absolute right-0 w-[100px] h-full bg-gradient-to-l from-black via-black to-transparent z-10" />
          
          <div className="skill-carousel flex gap-8 animate-scroll hover:pause">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-none w-32 h-32"
              >
                <GlowCard>
                  <div className="h-full flex flex-col items-center justify-center gap-3 p-4 hover:bg-white/5 transition-colors group">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{
                          filter: 'brightness(1.1) contrast(1.1)'
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-center whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .skill-carousel {
            animation: scroll 40s linear infinite;
          }

          .skill-carousel:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 640px) {
            .skill-carousel {
              animation-duration: 30s;
            }
          }

          @media (prefers-color-scheme: dark) {
            img {
              filter: brightness(1.2) contrast(1.2);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;