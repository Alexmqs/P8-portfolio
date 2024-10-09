import './home.scss';
import Navbar from "../../Components/NavBar/navbar"
import About from "../../Components/About/about"
import Header from "../../Components/Header/header"
import Skills from '../../Components/Skills/skills';

function Home() {
  return (
    <section id="home">
      <Navbar />
      <Header />
      <About />
      <Skills />
    </section>
  );
}

export default Home;
