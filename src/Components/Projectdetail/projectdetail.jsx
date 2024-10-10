import React from 'react';
import { AiFillGithub } from 'react-icons/ai'; 
import './projectdetail.scss'; 

const ProjectDetail = ({ title, fullDescription, image, link }) => {
  return (
    <div className="project-detail">
      <h2>{title}</h2>
      <p className="project-description">{fullDescription}</p>
      <img src={image} alt={title} className="project-image" />
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-link"
      >
        <AiFillGithub size={30} />
        Voir sur GitHub
      </a>
    </div>
  );
};

export default ProjectDetail;
