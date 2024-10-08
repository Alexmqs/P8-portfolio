import React from 'react';
import './header.scss'; 
import imgAlex from '../../Assets/imgAlex.jpg';


const Header = () => {
    return (
      <header className="header">
        <div className="header-container">
          <h4>Bienvenue sur le portfolio de</h4>
          <h1>Alexandre MARQUES</h1>
          <h3>Web Developer</h3>
  
          <div className="header-buttons">
            <a href="https://github.com/Alexmqs" target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
            </a>
            <a href="#contact" className="btn btn-primary">Me contacter</a>
          </div>
  
          <div className="header-photo">
            <img src={imgAlex} alt="Alexandre Marques" />
          </div>
        </div>
      </header>
    );
  };

export default Header;
