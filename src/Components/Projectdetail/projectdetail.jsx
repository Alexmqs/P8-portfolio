import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import './projectdetail.scss';

const ProjectDetail = ({ title, fullDescription, image, link, intitule, problematique, technologies }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  // Fonction pour récupérer l'icône en fonction de la technologie
  const getTechnologyIcon = (tech) => {
    switch (tech) {
      case 'HTML':
      case 'HTML 5':
        return <FaHtml5 size={30} />;
      case 'CSS':
      case 'CSS 3':
        return <FaCss3Alt size={30} />;
      case 'JavaScript':
        return <FaJs size={30} />;
      case 'React':
        return <FaReact size={30} />;
      case 'Node.js':
      case 'API':
        return <FaNodeJs size={30} />;
      case 'SQL':
      case 'Database':
        return <FaDatabase size={30} />;
      default:
        return null; // Pas d'icône pour les autres technologies
    }
  };

  return (
    <div className="project-detail">
      <div className="back-arrow" onClick={handleGoBack}>
        <AiOutlineArrowLeft size={30} />
        <span>Retour</span>
      </div>

      <h2>{title}</h2>
      <strong>{intitule}</strong>
      <p className="project-description">{fullDescription}</p>
      <h3>Problématiques rencontrées :</h3>
      <p className="project-problematique">{problematique}</p>
      <img src={image} alt={title} className="project-image" />

      {/* Affichage des technologies */}
      <div className="project-technologies">
        <h3>Technologies travailler dans le projet :</h3>
        <div className="technologies-cards">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-card">
              {getTechnologyIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lien vers GitHub */}
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
