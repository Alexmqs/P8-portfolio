import Navbar from "../../Components/NavBar/navbar"
import About from "../../Components/About/about"
import Header from "../../Components/Header/header"
import Skills from '../../Components/Skills/skills';
import Projects from '../../Components/Projects/projects';
import Contact from '../../Components/Contact/contact';
import Footer from '../../Components/Footer/footer';

function Home() {
  return (
    <section id="home">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects /> 
      <Contact />
      <Footer />
    </section>
  );
}

export default Home;
