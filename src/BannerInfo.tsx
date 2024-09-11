import React from 'react';
import computer from './computer.png';
import profile from './profile.png';

import './style.css';

const BannerInfo = () => {
    return(
        <header className="bg-lightblue text-center py-5">
        <div className="BannerInfo">
        <div className="title">Miguel Wills</div>
          <img src={profile} alt="Miguel Wills" className="profile-img"></img>
            
          <p className="lead">Researcher, Treasurer, Developer
            <img src={computer} alt="image not found" className="left-img"></img>
          </p>
        </div>
      </header>
    );
}

export default BannerInfo;
