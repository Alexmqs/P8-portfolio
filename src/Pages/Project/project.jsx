import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../projects.json';
import ProjectDetail from '../../Components/Projectdetail/projectdetail';
import Footer from '../../Components/Footer/footer';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <section>
      <ProjectDetail 
        title={project.title}
        fullDescription={project.fullDescription}
        image={project.image}
        link={project.link}
      />
      <Footer />
    </section>
  );
};

export default ProjectDetails;
