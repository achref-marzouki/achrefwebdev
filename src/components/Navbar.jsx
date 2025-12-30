import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="logo" />
          <span>achrefwebdev</span>
        </NavLink>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <div className="left">
            <NavLink to="/courses" onClick={() => setOpen(false)}>
              Learn
            </NavLink>
            <NavLink to="/certificates" onClick={() => setOpen(false)}>
              Certificates
            </NavLink>
          </div>

          <div className="right">
            <NavLink to="/donate" onClick={() => setOpen(false)}>
              Donate
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
