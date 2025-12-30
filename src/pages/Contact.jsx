import youtubeIcon from "../assets/youtube.svg";
import gmailIcon from "../assets/gmail.svg";
import Navbar from "../components/Navbar";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="root">
      <title>Contact | achrefwebdev</title>

      <Navbar />

      <main className="contact-page">
        <div className="contact-container">
          <h1 className="contact-title">Contact</h1>

          <p className="contact-description">
            Thanks for visiting! Here's where you can find me online:
          </p>

          <div className="contact-links">
            <a
              href="https://www.youtube.com/@AchrefWebDev"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <img src={youtubeIcon} alt="" className="contact-icon" />
              YouTube channel
            </a>

            <a href="mailto:achref.marzuki@gmail.com" className="contact-link">
              <img src={gmailIcon} alt="" className="contact-icon" />
              Email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
