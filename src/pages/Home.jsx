import "./Home.css";
import { Link } from "react-router-dom";
import HandWave from "../assets/hand-wave.png";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div id="root">
      <title>achrefwebdev | Learn Software Engineering</title>

      <Navbar />

      <main className="home">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Become a Software Engineer</h1>

            <p className="hero-text">
              Hey, I'm Achref{" "}
              <img src={HandWave} alt="hand wave" className="wave-icon" />
              <br />I want to make a tech career possible for anyone.
            </p>

            <Link to="/courses" className="hero-button">
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
