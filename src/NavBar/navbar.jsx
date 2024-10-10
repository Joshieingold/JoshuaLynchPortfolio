import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button className="logoButton" onClick={reloadPage}>
        <img src={logo} alt="Logo" className="logo" />
      </button>


      <div className="desktop-menu">
        <Link
          to="intro"
          smooth={true}
          duration={500}
          offset={-window.innerHeight}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-50}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="works"
          smooth={true}
          duration={500}
          offset={-50}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
      </div>

      <button onClick={() => scrollToSection("contact")} className="desktopMenuBtn">
        Contact Me
      </button>

      <button className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </button>


      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>

        <Link
          to="intro"
          smooth={true}
          duration={500}
          offset={-window.innerHeight}
          className="mobileMenuItem"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-50}
          className="mobileMenuItem"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="works"
          smooth={true}
          duration={500}
          offset={-50}
          className="mobileMenuItem"
          onClick={closeMenu}
        >
          Portfolio
        </Link>
        <button onClick={() => {scrollToSection("contact"); closeMenu();}} className="mobileMenuBtn">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 50,
      behavior: "smooth",
    });
  }
};

const reloadPage = () => {
  window.scrollTo(0, 0);
  window.location.reload();
};
