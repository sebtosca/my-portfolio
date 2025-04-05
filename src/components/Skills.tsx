import React from 'react';
import GlowCard from './glowCard';

// ✅ Import LangChain image locally from /src/images
import langchainLogo from '/images/langchain3.webp';

const skills = [
  {
    name: 'LangChain',
    logo: langchainLogo,
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
