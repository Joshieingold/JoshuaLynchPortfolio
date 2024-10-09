import React from "react";
import gui from "../assets/GUI.png";
import ps from "../assets/ProblemSolving.png";
import IconScroll from "../IconScroll/iconscroll";
import "./skills.css";
const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do </span>
            <span className="skillDescription">I create innovative, reliable solutions across various technologies, specializing in front-end and full-stack development. With a focus on responsive, user-centric applications, I prioritize both functionality and design. My problem-solving approach ensures efficient, effective solutions, whether working independently or in a team, driving projects to success.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={gui} alt="" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>User Interface Development</h2>
                        <p>Experienced in various programs and languages, consistently delivering user-friendly and robust UI designs for diverse projects.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ps} alt="" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Advanced Problem Solving</h2>
                        <p>With a Kattis score exceeding 300 points, I excel in solving complex problems and crafting effective solutions.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <IconScroll />
                    <div className="skillBarText">
                        <h2>Versatile Programming Expertise</h2>
                        <p>Proficient in multiple programming languages, including React, JavaScript, HTML, CSS, Java, C#, and Python, with strong GIT expertise.</p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;