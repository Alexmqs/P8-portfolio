import './home.scss';
import Navbar from "../../Components/NavBar/navbar"
import About from "../../Components/About/about"
import Header from "../../Components/Header/header"
import Skills from '../../Components/Skills/skills';
import Projects from '../../Components/Projects/projects';
import Contact from '../../Components/Contact/contact';

function Home() {
  return (
    <section id="home">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects /> 
      <Contact />
    </section>
  );
}

export default Home;
