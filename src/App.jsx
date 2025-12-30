import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Certificates from "./pages/Certificates";
import HtmlCssCertificate from "./pages/certificates/HtmlCssCertificate";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import HtmlCssCourse from "./pages/courses/HtmlCssCourse";
import Buttons from "./pages/exercises/htmlcssEx/Buttons";
import ComingSoon from "./pages/ComingSoon";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/exercises/buttons/" element={<Buttons />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/*" element={<ComingSoon />} />
      <Route path="/courses/html-css-course" element={<HtmlCssCourse />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/certificates/*" element={<ComingSoon />} />
      <Route path="/certificates/html-css" element={<HtmlCssCertificate />} />
      <Route path="/certificates/html-css/*" element={<ComingSoon />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
