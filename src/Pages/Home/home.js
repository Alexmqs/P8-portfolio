import './home.scss';
import Navbar from "../../Components/NavBar/navbar"
import About from "../../Components/About/about"
import Header from "../../Components/Header/header"
import Skills from '../../Components/Skills/skills';
import Projects from '../../Components/Projects/projects';

function Home() {
  return (
    <section id="home">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects /> 
    </section>
  );
}

export default Home;
