import React from 'react';
import computer from './computer.png';
import profile from './Profesh.jpeg';

import './style.css';
// import './hero-section.css';

const HeroSection = () => {
    return (
        <div className="BannerInfo">
            <div className="title">Miguel Wills
            <img src={profile} alt="Miguel Wills" className="profile-img" />
            
            <p className="lead">
                Full Stack Developer, Full Time nerd
                {/* <img src={computer} alt="image not found" className="left-img" /> */}
            </p>
            </div>
        </div>
    );
}

export default HeroSection;