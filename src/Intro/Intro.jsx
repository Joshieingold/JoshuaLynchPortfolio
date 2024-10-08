import React from "react";
import { Link } from "react-scroll";
import bg from "../assets/JoshImage.png";
import Network from "../Network/network.jsx";
import "./intro.css";

const Intro = () => {
    return (
        <section id="intro">
            <Network />
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Josh</span><br />Full Stack Developer
                </span>
                <p className="introPara">
                    I am a full stack developer specializing in Python, and website development.
                </p>
                <Link to="contact" smooth={true} duration={500} offset={ 20 }>
                    <button className="btn">Hire Me</button>
                </Link>
            </div>

            <img src={bg} alt="" className="bg" />
        </section>
    );
};

export default Intro;
