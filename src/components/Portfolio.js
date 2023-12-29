import React from 'react';
import "./Portflio.css";

import weather from "../assets/weather.png";

const Portfolio = () => {
  return (
    <div className='port-container'>
    <h2>My projects</h2>
    
    <div className='projects'>
        <div className='project'>
            <img src={weather} alt = "port"/>
            <h3 className='project-title'>Weather predictor</h3>
            <div className='details'>deettaaillsss</div>
            <a href='#' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={weather} alt = "port"/>
            <h3 className='project-title'>Weather predictor</h3>
            <div className='details'>deettaaillsss</div>
            <a href='#' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={weather} alt = "port"/>
            <h3 className='project-title'>Weather predictor</h3>
            <div className='details'>deettaaillsss</div>
            <a href='#' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={weather} alt = "port"/>
            <h3 className='project-title'>Weather predictor</h3>
            <div className='details'>deettaaillsss</div>
            <a href='#' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={weather} alt = "port"/>
            <h3 className='project-title'>Weather predictor</h3>
            <div className='details'>deettaaillsss</div>
            <a href='#' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={weather} alt = "port"/>
            <h3 className='project-title'>Weather predictor</h3>
            <div className='details'>deettaaillsss</div>
            <a href='#' className='details-btn'>more details</a>
        </div>
    </div>
    </div>
  )
}

export default Portfolio

