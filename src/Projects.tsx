import React from 'react';
import './style.css';

const Projects = () => {
  return (
  <div className="Project-section">
    <div className="Project-header">
    <h2 className='Project-title'>Projects</h2>
       <p className="Project-p">
        Here are my personal projects that I have been working on. Feel free to click on each one to check it out on my Github Page.
      </p> 
  </div>

<br></br><br></br>
    <div className="projects-container">
      <div className="project-card">
        <h3>
            <a href="https://chromewebstore.google.com/detail/wordle-extension-game/ekadgaocdogebigkompdkplnopgigpel?authuser=0&hl=en" target="_blank" rel="noopener noreferrer">
            WORDLE EXTENSION
            </a>
        </h3>
        <p>I created a fully fleshed out WORDLE extension with English and Spanish functionalities. This extension is available on the Chrome and Edge webstores.</p>
      </div>
      <div className="project-card">
        <h3>
        <a href="https://github.com/CryptoCow0/MultiThreadedFreqAnalysis-java" target="_blank" rel="noopener noreferrer">
       Multi-threaded counter
        </a>
        </h3>
        <p>
        This code uses Atomic Integers for thread safety and simplicity. It generates a random string with a Python script, then analyzes its frequency using project.java. The analysis, detailed in a separate report, uses 4 cores for files over 1 billion characters. See the report on my GitHub.
        </p>
      </div>
      <div className="project-card">
        <h3>
        <a href="https://github.com/CryptoCow0/Keylogging-ethical-Lab" target="_blank" rel="noopener noreferrer">
        Reverse Shell ethical Lab for education
        </a>
        </h3>
        <p>
          I created a Reverse Shell that was used for a demonstration for teachers to show the dangers of phishing and how impactfull it can be.
           
          </p>
      </div>
    </div>
    </div>
  );
};

export default Projects;
