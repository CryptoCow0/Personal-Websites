import React from 'react';
import computer from './computer_Overview.png';
import './style.css';

const OverView = () => {
    return (
        <div className="OverView">
            <h2>Overview</h2>
            <div className="overview-content">
                <div className="image-container">
                <a href="./Miguel-Wills-Resume.pdf" download="filename.zip">
                
                <img src={computer} alt="Computer Overview" className="Resume_area"  />
                </a>
                    
                </div>
                <div className="text-container">
                    <p>
                        I am currently a Junior with experience in different areas of computer science from machine learning research, human-robot interactions research, software development with personal projects, and working through cybersecurity projects and education.
                    </p>
                    <p>
                        I have also volunteered in various locations educating small companies about good security practices and given talks to teachers regarding common phishing tactics.
                    </p>
                    <p>
                        I am the Treasurer of the Colorado School of Mines cybersecurity club in which my responsibilities are utilizing the budget well so that we can reach all the competitions that we would like to go to. We regularly host events in which companies can come and give a talk regarding fascinating cybersecurity concepts! Along with this, there are many common CTF events that we go to which has been a truly amazing experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OverView;
