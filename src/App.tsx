import React from 'react';
import BannerInfo from './BannerInfo'; // Adjust the path as needed
import AboutMe from './AboutMe';
import OverView from './OverView';
import Projects from './Projects';
import './App.css'; // Import any global CSS if necessary
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';

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
