import React from 'react';
import './about.scss'; 
import imgAlex from '../../Assets/imgAlex.jpg';


const About = () => {
  return (
    <section id='about' className="about-section">
      <div className="about-content">
        <div className="about-left">
          <img src= {imgAlex} alt="Alexandre Marques" className="profile-photo" />
        </div>
        
        <div className="about-right">
          <h2>Apprendre à me connaître</h2>
          <p>
            Bonjour, je suis Alexandre MARQUES, un développeur passionné par le web. 
            À travers ce portfolio, vous découvrirez mes compétences, mes projets, 
            et mon parcours professionnel. Je suis toujours à la recherche de nouveaux 
            défis pour approfondir mes connaissances et apporter des solutions innovantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
