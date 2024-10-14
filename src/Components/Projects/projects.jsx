import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';
import projectsData from '../../projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]); 
  const [activeFilter, setActiveFilter] = useState('All'); 

  useEffect(() => {
    setProjects(projectsData); 
  }, []);

  const technologies = ['All', 'SEO', 'HTML/CSS', 'JavaScript', 'React'];

  // Filtrage des projets
  const handleFilterClick = (tech) => {
    setActiveFilter(tech);

    if (tech === 'All') {
      setProjects(projectsData); 
    } else {
      const filteredProjects = projectsData.filter((project) =>
        project.technologies.includes(tech)
      );
      setProjects(filteredProjects); 
    }
  };

  return (
    <section id="services" className="projects-section">
      <h2 className="projects-title">Mes Projets</h2>

      <div className="projects-filters">
        {technologies.map((tech) => (
          <button
            key={tech}
            className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
            onClick={() => handleFilterClick(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <Link to={`/projets/${project.id}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <p>{project.shortDescription}</p>
                </div>
              </div>
              <h3>{project.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
