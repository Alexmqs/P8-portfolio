import React from 'react';
import './skills.scss';
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaDatabase, FaReact, FaNodeJs, FaPhp, FaSearch  } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const skills = [
  { name: "HTML 5", icon: <FaHtml5 />, stars: 5 },
  { name: "CSS 3", icon: <FaCss3Alt />, stars: 3.5 },
  { name: "JavaScript", icon: <FaJs />, stars: 4 },
  { name: "Sass", icon: <FaSass />, stars: 5 },
  { name: "SQL", icon: <FaDatabase />, stars: 2.5 },
  { name: "React", icon: <FaReact />, stars: 3.5 },
  { name: "PHP", icon: <FaPhp />, stars: 1.5 },
  { name: "Node.js", icon: <FaNodeJs />, stars: 3.5 },
  { name: "SEO", icon: <FaSearch />, stars: 4.5 },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<BsStarFill key={i} />);
    } else if (i - 0.5 === rating) {
      stars.push(<BsStarHalf key={i} />);
    } else {
      stars.push(<BsStar key={i} />);
    }
  }
  return stars;
};

const Skills = () => {
  return (
    <section id="experience" className="skills-section">
      <h2 className="skills-title">Mes competences</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-stars">{renderStars(skill.stars)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
