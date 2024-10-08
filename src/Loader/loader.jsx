import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "./Animations.jsx"; 
import "./loader.css";

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        preLoaderAnim(setIsLoading); 
    }, []);

    if (!isLoading) return null;

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Learn.</span>
                <span>Code.</span>
                <span>Create.</span>
            </div>
        </div>
    );
};

export default Loader;
