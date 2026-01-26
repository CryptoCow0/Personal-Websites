import React from 'react';
import './style.css';

const Projects = () => {
  return (
  <div className="Project-section">
    <div className="Project-header text-center">
      <h2>Projects</h2>
    </div>

{/* <br></br><br></br> */}
    <div className="projects-container">
      <div className="project-card">
        <h3>
            <a href="https://chromewebstore.google.com/detail/wordle-extension-game/ekadgaocdogebigkompdkplnopgigpel?authuser=0&hl=en" target="_blank" rel="noopener noreferrer">
            WORDLE EXTENSION
            </a>
        </h3>
           <p>
            I created a fully fleshed out WORDLE extension with English and Spanish functionalities. 
          </p>
          <p>
            This extension is available on the Chrome and Edge webstores.
          </p>
       </div>
      {/* <div className="project-card">
        <h3>
        <a href="https://github.com/CryptoCow0/MultiThreadedFreqAnalysis-java" target="_blank" rel="noopener noreferrer">
       Multi-threaded counter
        </a>
        </h3>
        <p>
        This code uses Atomic Integers for thread safety and simplicity. It generates a random string with a Python script, then analyzes its frequency using project.java. The analysis, detailed in a separate report, uses 4 cores for files over 1 billion characters. See the report on my GitHub.
        </p>
        <p>I created a multi-threaded counter in Java to use Atomic IntegersThis code uses Atomic Integers to ensure Thread safety, avoid Race Conditions, and for simplicity. It uses a python file to generate a random string of a specified size, then you can run the project.java with this to perform frequency analysis</p>
      </div> */ }
      <div className="project-card">
        <h3>
        <a href="https://planlli.com" target="_blank" rel="noopener noreferrer">
        Planlli- Full Stack Web App
        </a>
        </h3>
          <p>
            The One Stop Shop for your scheduling needs!
             
          </p>
      </div>
      <div className="project-card">
        <h3>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            Planlli Mobile Application
            </a>
        </h3>
           <p>
           I used Flutter and levereged existing backend from the previous project to build out the Planlli Mobile Application! 
          </p>
          <p>
            This application is available on both Andrios and IOS.
          </p>
       </div>
    </div>
    </div>
  );
};

export default Projects;
