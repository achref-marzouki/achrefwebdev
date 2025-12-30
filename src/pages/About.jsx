import "./About.css";
import aboutImage from "../assets/achref.jpg";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div id="root">
      <title>About Me | achrefwebdev</title>

      <Navbar />

      <main className="about-page">
        <div className="about-container">
          <div className="about-grid">
            {/* Text */}
            <div className="about-text">
              <h1 className="about-title">About</h1>

              <p className="about-paragraph">
                Hello! I'm{" "}
                <strong>
                  <u>Achref</u>
                </strong>
                , and I’m the creator of{" "}
                <strong>
                  <u>achref</u>
                </strong>
                web
                <strong>
                  <u>dev</u>
                </strong>
                .
              </p>

              <p className="about-paragraph">
                I started this platform with one clear goal: to make learning
                software engineering simple, practical, and accessible for
                everyone. I believe that coding can open real opportunities and
                help people build a better future through technology.
              </p>

              <p className="about-paragraph">
                Through clear explanations and hands-on projects, I focus on
                teaching real-world skills that you can actually use. This
                website is a companion to my learning content, designed to guide
                you step by step on your journey into software development.
              </p>
            </div>

            {/* Image */}
            <div className="about-image-wrapper">
              <img
                src={aboutImage}
                alt="A picture representing achrefwebdev"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
