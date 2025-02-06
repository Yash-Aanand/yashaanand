import React from 'react';
import { ExternalLink } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectsSectionProps {
  isVisible: boolean;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible, projects }) => {
  return (
    <section
              id="projects"
              className={`section-overlay py-20 px-4 transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-rotation ">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6 ">
                  {projects.map(project => (
                    <div
                      key={project.id}
                      className="group bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 relative z-20 -mt-12">
                        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          View Project <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
  );
};

export default ProjectsSection;