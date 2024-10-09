import React from 'react';
import { useParams } from 'react-router-dom'; // Pour récupérer l'ID depuis l'URL

const ProjectDetails = () => {
  const { id } = useParams(); // Récupère l'ID du projet depuis l'URL

  return (
    <div>
      <h2>Détails du projet avec l'ID : {id}</h2>
      {/* Ici tu peux ajouter plus de détails sur le projet */}
    </div>
  );
};

export default ProjectDetails;
