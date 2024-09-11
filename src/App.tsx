import React from 'react';
import BannerInfo from './BannerInfo'; // Adjust the path as needed
import AboutMe from './AboutMe';
import OverView from './OverView';
import Projects from './Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import any global CSS if necessary


const App: React.FC = () => {
  return (
    <div className="App">
      <BannerInfo />
      <div className="spacer"></div>
      <AboutMe />  
      <Projects />
      <OverView />
     
    </div>
   
  );
}

export default App;
