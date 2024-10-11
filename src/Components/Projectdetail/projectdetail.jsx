import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'; // Icône de flèche
import './projectdetail.scss';

const ProjectDetail = ({ title, fullDescription, image, link }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="project-detail">
      <div className="back-arrow" onClick={handleGoBack}>
        <AiOutlineArrowLeft size={30} />
        <span>Retour</span>
      </div>

      <h2>{title}</h2>
      <p className="project-description">{fullDescription}</p>
      <img src={image} alt={title} className="project-image" />
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-link"
      >
        <AiOutlineArrowLeft size={30} />
        Voir sur GitHub
      </a>
    </div>
  );
};

export default ProjectDetail;
