import "./HtmlCssCourse.css";
import Navbar from "../../components/Navbar";

export default function HtmlCssCourse() {
  return (
    <div id="root">
      <title>HTML CSS Course | achrefwebdev</title>

      <Navbar />

      <main className="course-page">
        <div className="course-container">
          <section className="course-section">
            <h2 className="course-section-title">Exercise & Solutions</h2>
            <p className="course-section-text">
              After each section of the course, try the exercises to practice
              what you learned.
            </p>

            <a
              href="https://github.com/achrefwebdev/html-css-course/tree/main/1-exercise-solutions"
              target="_blank"
              rel="noreferrer"
              className="course-link"
            >
              View exercise solutions
            </a>
          </section>

          <section className="course-section">
            <h2 className="course-section-title">Code</h2>
            <p className="course-section-text">
              Here's a copy of the code at the end of each lesson.
            </p>

            <a
              href="https://github.com/achrefwebdev/html-css-course/tree/main/2-copy-of-code"
              target="_blank"
              rel="noreferrer"
              className="course-link"
            >
              View the code
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
