import React from 'react';
import { Github, ExternalLink, Terminal } from 'lucide-react';
import { NavLinks } from '../types';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id={NavLinks.PROJECTS} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-primary/20 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">
               <span className="text-primary mr-2">./</span>Featured_Projects
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-primary hover:text-white transition-colors font-mono text-sm uppercase">
            [ View_All ] <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-black border border-gray-800 hover:border-primary transition-colors duration-300 flex flex-col relative">
              <div className="absolute top-0 right-0 p-2 z-20">
                 <Terminal className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100" />
              </div>
              
              <div className="h-48 overflow-hidden bg-gray-900 relative border-b border-gray-800 group-hover:border-primary/50">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                {/* Green filter on image */}
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors uppercase tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-xs leading-relaxed flex-grow font-mono border-l border-gray-800 pl-3 group-hover:border-primary/30">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 bg-gray-900 text-primary border border-gray-800 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-800 mt-auto">
                  <a 
                    href={project.githubLink} 
                    className="flex items-center text-xs text-gray-400 hover:text-primary transition-colors uppercase"
                  >
                    <Github className="w-3 h-3 mr-2" /> Source
                  </a>
                  <a 
                    href={project.demoLink} 
                    className="flex items-center text-xs text-gray-400 hover:text-primary transition-colors uppercase"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" /> Deploy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};