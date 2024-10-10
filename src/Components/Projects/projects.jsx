import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';
import projectsData from '../../projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData); 
  }, []);

  return (
    <section id="services" className="projects-section">
      <h2 className="projects-title">Mes Projets</h2>

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
