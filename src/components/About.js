// About.js
import React from 'react';
import "./About.css";
import aboutImg from "../assets/travel-01.jpg"
import { useNavigate } from 'react-router-dom';




const About = ({ imagesrc }) => {
  const navigate = useNavigate(); 
  return (
    <div className="content">
      <img className="image" src={aboutImg} alt="portfolio"/>
      <div className="words">
        <h1 className="name">I'm Snehit Sharma</h1>
        <h2 className="sub-heading">Web developer</h2>
        <h1 className="about-desc">
          heeloooo
        </h1>
        <div className='button'>
                    <input type='button' value='Contact Me' onClick={() => navigate("/contact")}/>
                </div>
      </div>
    </div>
  );
};

export default About;
