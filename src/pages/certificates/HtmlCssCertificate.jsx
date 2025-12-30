import "./CertificateInfo.css";
import htmlcsscertificate from "../../assets/certificate.png";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";

export default function HtmlCssCertificate() {
  return (
    <div id="root">
      <title>HTML CSS Certificate Info | achrefwebdev</title>

      <Navbar />

      <main className="certificate-info-page">
        <div className="certificate-info-container">
          <img
            src={htmlcsscertificate}
            alt="HTML & CSS Certificate"
            className="certificate-info-image"
          />

          <h1 className="certificate-info-title">
            HTML & CSS Certificate Info
          </h1>

          <p className="certificate-info-text">
            The HTML & CSS course associated with this certificate teaches the
            major skills required to create and style complex websites. The
            course has had over <strong>100 views</strong> in 1 week and
            received more than <strong>20 likes</strong> and{" "}
            <strong>5 comments</strong>.
            <br />
            <a
              href="https://youtu.be/UJ5eKmhdWOE?si=1-2-5L1MrMQOd_7z"
              target="_blank"
              rel="noreferrer"
              className="certificate-info-link"
            >
              Watch course on YouTube
            </a>
          </p>

          <p className="certificate-info-text">
            Going beyond a general overview, the course follows a hands-on
            approach. Students build a real-world project and complete exercises
            after each lesson (over 100 exercises in total), ensuring both
            learning and application.
          </p>

          <h2 className="certificate-info-subtitle">
            Key features learned and applied
          </h2>

          <ul className="certificate-topics">
            <li>HTML Elements and Syntax</li>
            <li>CSS Selectors and Syntax</li>
            <li>Hovers, Transitions, Shadows</li>
            <li>Chrome DevTools & Elements Tab</li>
            <li>CSS Box Model: Margin, Padding, Border</li>
            <li>CSS Text Styles</li>
            <li>HTML Structure</li>
            <li>Images and Text Boxes</li>
            <li>CSS Display Property</li>
            <li>HTML div Element</li>
            <li>Nested Layouts Technique</li>
            <li>CSS Grid</li>
            <li>Flexbox</li>
            <li>CSS Position Property</li>
            <li>Responsive Design</li>
          </ul>

          <h2 className="certificate-info-subtitle">Conclusion</h2>

          <p className="certificate-info-text">
            The course culminates in recreating a real-world website. Students
            who complete the course, pass the final test, and receive this
            certificate demonstrate both foundational knowledge and strong
            practical skills in HTML & CSS.
          </p>

          <NavLink
            to="/certificates/html-css/*"
            className="certificate-enroll-button"
            target="_blank"
            rel="noreferrer"
          >
            Enroll Now
          </NavLink>
        </div>
      </main>
    </div>
  );
}
