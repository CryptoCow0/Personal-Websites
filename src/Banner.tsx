import React from 'react';
import 'style.css';
import BannerInfo from './BannerInfo';

const Banner = () =>{
    return(
        <div className='banner'>
           <div className='z-2 position-absolute start-0 w-100 h-100'><BannerInfo /></div>
        </div>
    );
}

export default Banner;