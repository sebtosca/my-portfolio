import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play } from 'lucide-react';
import GlowCard from './GlowCard';

const projects = [
  {
    title: 'Google Generative AI Hackathon',
    description: 'We participated in the Google GenAI Hackathon, where we developed MamaAI—an intelligent assistant that identifies items from fridge or receipt images and generates personalized recipes and step-by-step cooking instructions, all tailored to dietary needs and health restrictions.',
    tech: ['Google Cloud', 'Vertex AI', 'Uvicorn', 'LangChain', 'FastAPI'],
    thumbnail: '/public/video/Askmamaisspeakingnow.mp4',
    video: '/public/video/Askmamaisspeakingnow.mp4'
  },
  {
    title: 'CV-Job Matching Chatbot',
    description: 'AI-powered chatbot that matches CVs to job descriptions using advanced NLP and semantic search. Features real-time conversation and explanation capabilities. Utilized agentic AI with API calls to scrape job descriptions from the web.',
    tech: ['LangChain', 'Phi3', 'Python', 'Full-Stack Dev', 'Hugging Face', 'PyTorch', 'TensorFlow'],
    github: 'https://github.com/sebtosca/cv-matcher',
    live: 'https://cv-matcher.example.com',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1676464424606-c1c33a3a68fe'
  },
  {
    title: 'MLOps Classification Pipeline',
    description: 'Production-grade ML pipeline for document classification with automated training, validation, and deployment. Includes monitoring and drift detection.',
    tech: ['Python', 'PyTorch', 'Hugging Face', 'Fine-Tuning', 'Hyperparameter Search', 'LLM', 'ML'],
    github: 'https://github.com/sebtosca/mlops-pipeline',
    live: 'https://mlops-demo.example.com',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1675426513962-63c49c0c6c72'
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setIsPlaying(false);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying && !isPlaying) {
      intervalId = setInterval(nextSlide, 6000);
    }

    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide, isPlaying]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  return (
    <section 
      className="py-16 min-h-[70vh] flex items-center bg-white" 
      id="projects"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Project carousel"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold text-center mb-16 text-black" data-aos="fade-up">
          AI Projects
        </h2>
        
        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
              aria-hidden={index !== currentIndex}
            >
              <GlowCard>
                <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10">
                  {/* Left side: Content */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.github && project.live && (
                      <div className="flex gap-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right side: Video/Thumbnail */}
                  <div className="flex-1 relative">
                    <div className="aspect-video rounded-xl overflow-hidden bg-black shadow-xl border border-white/10">
                      {isPlaying && currentIndex === index ? (
                        <div className="relative w-full h-full">
                          <iframe
                            src={project.video}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="relative h-full group">
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button
                              onClick={() => setIsPlaying(true)}
                              className="transform scale-90 group-hover:scale-100 transition-transform duration-300"
                              aria-label="Play video"
                            >
                              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                <Play className="w-8 h-8 text-black ml-1" />
                              </div>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors text-gray-700"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                    setIsPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors text-gray-700"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;