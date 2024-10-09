import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Alexandre Marques</p>
        <a 
          href="https://github.com/ton_github_username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
