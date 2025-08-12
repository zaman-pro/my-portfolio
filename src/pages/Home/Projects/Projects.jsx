import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image">
                <img
                  className="h-full w-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="p-6">
                <h3 className="project-title">{project.title}</h3>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>
                <div className="flex justify-between items-center pt-6">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  <NavLink
                    to={`project-details/${project.id}`}
                    className=" cosmic-button p-0 px-3 py-1"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/zaman-pro"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
