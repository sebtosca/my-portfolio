import React from 'react';
import { ExternalLink } from 'lucide-react';
import GlowCard from './GlowCard';

const experiences = [
  {
    title: "Research Assistant",
    company: "Skema Center for Artificial Intelligence",
    startDate: "Sept 2023",
    endDate: "Present",
    logo: "/images/OIP.jpeg",
    color: "border-blue-400",
    link: "https://skema.edu",
    description: "Designing and developing an AutoGAM package in Python to compete with R-based solutions. Conducting extensive benchmarking against advanced ML models including Neural Networks, Linear Regression, Decision Trees, and Gradient Boosted Trees. Analyzing performance based on model execution speed and accuracy.",
    achievements: [
      "Developed AutoGAM Package through variable interaction automation",
      "Benchmarked against 5+ ML models"
    ],
    tech: ["Python", "R"],
    cta: "Visit SKEMA"
  },
  {
    title: "CXM Campaign Consultant",
    company: "Merkle EMEA (Dentsu)",
    startDate: "Sept 2023",
    endDate: "Apr 2024",
    logo: "/images/Merkle.jpg",
    color: "border-purple-400",
    link: "https://www.merkleinc.com",
    description: "Developed and automated omnichannel marketing workflows targeting UK customers at Currys, leveraging CRM databases to reach millions daily. Oversaw backend CRM email deployments and managed large-scale voucher distributions for leading brands such as Apple, Nvidia, Meta, Samsung, LG, HP, and Dell. Performed rigorous QA testing on campaign builds and data segmentations to ensure quality and accuracy.",
    achievements: [
      "Built automated workflows campaigns reaching 1M+ customers",
      "Built and deployed 3-6 campaigns weekly",
      "QA'd targeted data to ensure accurate sendings"
    ],
    tech: ["Adobe Campaign Classic", "SQL", "JS"],
    cta: "Visit Merkle"
  },
  {
    title: "Digital Marketing Consultant Intern",
    company: "Numberly",
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    logo: "/images/Numberly.webp",
    color: "border-green-400",
    link: "https://numberly.com",
    description: "Designed and implemented automated CRM customer journeys for IPSEN spanning 30+ campaigns and 100+ newsletters. Collaborated with Henkel on business intelligence and data visualization. Led deep dive trainings on campaign automation best practices across 15 countries.",
    achievements: [
      "30+ automated campaigns",
      "100+ newsletters",
      "15 country rollout"
    ],
    tech: ["Adobe Campaign Standard", "GA4", "Excel", "Looker Studio"],
    cta: "Visit Numberly"
  },
  {
    title: "Intern in Sales, Marketing & Revenue",
    company: "Le Royal Monceau (Raffles, Group Accor)",
    startDate: "May 2022",
    endDate: "Aug 2022",
    logo: "/images/RM.png",
    color: "border-red-400",
    link: "https://www.leroyalmonceau.com",
    description: "Grew engagement across 9 social media accounts on LinkedIn, Instagram, and Facebook. Secured high-profile partnership with Nike for Paris Quai 54 - Jordan event. Engineered 2023 revenue forecast and budget allocation strategy.",
    achievements: [
      "Engineered 2023 Revenue Forecast",
      "Nike partnership success",
      "Managed 9 social accounts"
    ],
    tech: ["Social Media Marketing", "Excel Forecasting", "Sales"],
    cta: "Visit Le RM"
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black" data-aos="fade-up">Experience</h2>
        </div>

        <div className="relative h-[80vh] overflow-y-auto snap-y snap-mandatory">
          {/* Timeline line */}
          <div className="absolute left-32 top-0 bottom-0 w-px bg-emerald-200 hidden md:block"></div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative snap-start min-h-[calc(80vh-2rem)] flex items-center" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                {/* Date on the left */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 text-right hidden md:block">
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-emerald-600">{exp.startDate}</div>
                    <div className="text-sm font-medium text-gray-400">{exp.endDate}</div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-32 top-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 hidden md:block"></div>
                
                <div className="w-full md:ml-40">
                  <GlowCard>
                    <div className={`p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${exp.color} border-l-4`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start gap-4">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-16 h-16 object-contain"
                          />
                          <div>
                            <h3 className="text-xl font-semibold text-black mb-1">{exp.title}</h3>
                            <p className="text-emerald-600">{exp.company}</p>
                            <div className="md:hidden mt-2 flex gap-2 text-sm">
                              <span className="text-emerald-600">{exp.startDate}</span>
                              <span className="text-gray-400">—</span>
                              <span className="text-gray-400">{exp.endDate}</span>
                            </div>
                          </div>
                        </div>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                          aria-label={`Visit ${exp.company} website`}
                        >
                          {exp.cta}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      <p className="mt-4 text-gray-600 leading-relaxed">{exp.description}</p>

                      <div className="mt-4 space-y-2">
                        <h4 className="font-medium text-black">Key Achievements:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600">
                              <span className="text-emerald-500">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;