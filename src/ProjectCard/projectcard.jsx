import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, githubLink }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCard = () => {
        setIsExpanded(!isExpanded);

        if (!isExpanded) {
            setTimeout(() => {
                document.getElementById(title).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }, 300);
        }
    };

    return (
        <div id={title} className={`project-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleCard}>
            <h2 className="card-title">{title}</h2>
            <div className="card-content">
                <div className="card-details">
                    <p>{description}</p>
                </div>
                <div className="card-image">
                    <img src={image} alt={title} />
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;