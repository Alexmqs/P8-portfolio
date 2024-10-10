import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './index.scss'; 
import Home from './Pages/Home/home'; 
import ProjectDetails from './Pages/Project/project'; 
import ParticlesComponent from './Components/Particles/particles.jsx'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesComponent id="particles" />
    <div className="content-wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
