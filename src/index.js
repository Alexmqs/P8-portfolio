import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importer le routing
import './index.scss'; 
import Home from './Pages/Home/home'; // Page d'accueil
import ProjectDetails from './Pages/Project/project'; // Utilise le chemin correct vers project.jsx
import ParticlesComponent from './Components/Particles/particles.jsx'; // Particules pour l'arrière-plan

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesComponent id="particles" />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Page d'accueil */}
        <Route path="/projets/:id" element={<ProjectDetails />} /> {/* Page pour chaque projet */}
      </Routes>
    </Router>
  </React.StrictMode>
);
