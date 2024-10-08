import './home.scss';
import Navbar from "../../Components/NavBar/navbar"
import About from "../../Components/About/about"
import Header from "../../Components/Header/header"

function Home() {
  return (
    <section id="home">
      <Navbar />
      <Header />
      <About />
      <div>
        <h1>Accueil</h1>
      </div>
    </section>
  );
}

export default Home;
