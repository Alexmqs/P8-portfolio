import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'; 
import Home from './Pages/Home/home.js'; 
import ParticlesComponent from './Components/Particles/particles.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesComponent id="particles" />
    <Home />  
  </React.StrictMode>
);