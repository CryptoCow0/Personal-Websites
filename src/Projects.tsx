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
        <p>This space gives you more room to expound on your message. Remember that writing effectively is an art...</p>
      </div>
      <div className="project-card">
        <h3>
        <a href="https://github.com/CryptoCow0/Keylogging-ethical-Lab" target="_blank" rel="noopener noreferrer">
        Reverse Shell ethical Lab for education
        </a>
        </h3>
        <p>This space gives you more room to expound on your message. Remember that writing effectively is an art...</p>
      </div>
    </div>
    </div>
  );
};

export default Projects;
