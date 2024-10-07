import React, { useState } from 'react';
import './navbar.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="nav">
      <a 
        href="#home" 
        onClick={() => setActiveNav('#')} 
        className={`nav__item ${activeNav === '#' ? 'nav__item--active' : ''}`}
      >
        <AiOutlineHome />
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={`nav__item ${activeNav === '#about' ? 'nav__item--active' : ''}`}
      >
        <AiOutlineUser />
      </a>
      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={`nav__item ${activeNav === '#experience' ? 'nav__item--active' : ''}`}
      >
        <BiBook />
      </a>
      <a 
        href="#services" 
        onClick={() => setActiveNav('#services')} 
        className={`nav__item ${activeNav === '#services' ? 'nav__item--active' : ''}`}
      >
        <RiServiceLine />
      </a>
      <a 
        href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={`nav__item ${activeNav === '#contact' ? 'nav__item--active' : ''}`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
