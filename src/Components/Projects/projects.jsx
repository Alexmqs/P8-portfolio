import React, { useState } from "react";
import { Link } from "react-router-dom"; // Pour la redirection vers /projets/:id
import "./projects.scss";
import Architect from '../../Assets/Architect.png';
import Booki from '../../Assets/Booki.png';
import Kasa from '../../Assets/Kasa.png';
import MVG from '../../Assets/MVG.png';
import Nina from '../../Assets/Nina.png';


const projectsData = [
  {
    id: 1,
    title: "OC Booki",
    image: Booki, 
    description: "Le projet Booki consiste à développer un site web permettant aux utilisateurs de rechercher des hébergements et des activités dans différentes villes.",
    technologies: ["HTML/CSS"],
  },
  {
    id: 2,
    title: "OC Portfolio architecte",
    image: Architect,
    description: "Le projet consiste à concevoir et développer le portfolio en ligne d'une architecte d'intérieur, en prenant en charge l'intégration front-end de nouvelles fonctionnalités.",
    technologies: ["JavaScript"],
  },
  {
    id: 3,
    title: "OC Nina-Carducci",
    image: Nina,
    description: "Le projet consiste à optimiser les performances et le référencement SEO du site d'une photographe, en améliorant la vitesse de chargement, l'accessibilité, et en mettant en place un référencement local.",
    technologies: ["HTML/CSS", "JavaScript", "SEO"],
  },
  {
    id: 4,
    title: "OC kasa",
    image: Kasa,
    description: "Le projet consiste à refondre le site de Kasa, une plateforme de location d'appartements, en suivant les maquettes et spécifications fournies par l'équipe de design.",
    technologies: ["React", "HTML/CSS", "Javascript"],
  },
  {
    id: 5,
    title: "OC Mon Vieux Grimoire",
    image: MVG,
    description: "Le projet consiste à développer l'API back-end d'un site de notation de livres, 'Mon Vieux Grimoire', en prenant en compte l'optimisation des images envoyées par les utilisateurs.",
    technologies: ["Backend"],
  },
];

const filters = ["All", "SEO", "HTML/CSS", "JavaScript", "React", "Backend"];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = selectedFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.technologies.includes(selectedFilter));

  return (
    <section id="services" className="projects-section">
      <h2 className="projects-title">Mes Projets</h2>

      <div className="projects-filters">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <Link to={`/projets/${project.id}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <p>{project.description}</p>
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
