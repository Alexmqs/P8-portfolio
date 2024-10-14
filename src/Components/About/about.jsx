import React from 'react';
import './about.scss'; 
import imgAlex2 from '../../Assets/ImgAlex2.jpg';


const About = () => {
  return (
    <section id='about' className="about-section">
      <h2>Apprendre à me connaître</h2>
      <div className="about-content">
        <div className="about-left">
          <img src= {imgAlex2} alt="Alexandre Marques" className="profile-photo" />
        </div>
        
        <div className="about-right">
          <p>
          Je suis un développeur web passionné, récemment reconverti suite à un parcours professionnel dans un autre domaine. Après avoir découvert ma passion pour le développement web, j'ai décidé de me lancer dans cette nouvelle aventure en suivant une formation intensive chez OpenClassrooms, où j'ai obtenu mon diplôme de développeur web.<br /><br />
          Durant cette formation, j'ai acquis des compétences solides en HTML, CSS, JavaScript, React. Chaque projet que j'ai réalisé m'a permis de consolider mes connaissances et de découvrir de nouvelles technologies, tout en développant des solutions web à la fois innovantes et fonctionnelles.<br /><br />
          Mon portfolio présente une sélection de projets qui illustrent mon parcours et mon évolution en tant que développeur. Que ce soit la création de sites web dynamiques ou le développement d'applications interactives.<br /><br />
          Aujourd'hui, je suis plus motivé que jamais à continuer à apprendre et à me perfectionner. Je suis en quête de nouvelles opportunités pour mettre en pratique mes compétences et collaborer avec d'autres passionnés du web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
