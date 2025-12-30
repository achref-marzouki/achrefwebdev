import "./Courses.css";
import { coursesData } from "../data/courses";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Courses() {
  return (
    <div id="root">
      <title>Courses | achrefwebdev</title>

      <Navbar />

      <main className="courses-page">
        <header className="courses-header">
          <h1>Courses</h1>
          <p>Learn software engineering step by step.</p>
        </header>

        <section className="courses-grid">
          {coursesData.map((course) => (
            <article key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>

              <div className="course-body">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>

                <div className="course-meta">
                  <span>{course.time}</span>
                  <span>{course.sections}</span>
                  {course.exercises && <span>{course.exercises}</span>}
                </div>

                <div className="course-actions">
                  <Link to={course.startLink} className="course-start">
                    Start
                  </Link>
                </div>
              </div>

              {course.certificate && (
                <div className="course-footer">
                  <span className="certificate-text">
                    Certificate available!
                  </span>
                  <a
                    href={course.enrollLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-enroll"
                  >
                    Enroll Now
                  </a>
                </div>
              )}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
