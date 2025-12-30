import "./Certificates.css";
import { certificatesData } from "../data/certificates";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Certificates() {
  return (
    <div id="root">
      <title>Certificates | achrefwebdev</title>

      <Navbar />

      <main className="certificates-page">
        <header className="certificates-header">
          <h1>Certificates</h1>
          <p>Get verified certificates for premium courses.</p>
        </header>

        <section className="certificates-grid">
          {certificatesData.map((cert) => (
            <article key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>

              <div className="certificate-body">
                <h2 className="certificate-title">{cert.title}</h2>
                <p className="certificate-subtitle">({cert.subtitle})</p>

                <ul className="certificate-features">
                  {cert.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="certificate-actions">
                  <a
                    href={cert.enrollLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-enroll"
                  >
                    Enroll Now
                  </a>

                  <Link to={cert.infoLink} className="certificate-info">
                    Certificate Info
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
