import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="logoButton">
        <img src={logo} alt="Logo" className="logo" />
      </button>
      <div className="desktop-menu">
        <Link to="intro" smooth={true} duration={500} offset={-window.innerHeight} className="desktopMenuListItem">Home</Link>
        <Link to="skills" smooth={true} duration={500} offset={-50} className="desktopMenuListItem">About</Link>
        <Link to="works" smooth={true} duration={500} offset={-50} className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button onClick={() => scrollToSection('contact')} className="desktopMenuBtn">
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;


const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50, // Adjust for header height if necessary
            behavior: 'smooth', // Smooth scrolling
        });
    }
};

const reloadPage = () => {
    window.scrollTo(0, 0);
    window.location.reload(); // Reload the current webpage
};