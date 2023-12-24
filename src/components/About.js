// About.js
import React from 'react';
import "./About.css";

const About = ({ imagesrc }) => {
  return (
    <div className="content">
      <img className="image" src={imagesrc} alt="portfolio"/>
      <div className="words">
        <h1 className="name">I'm Snehit Sharma</h1>
        <h2 className="sub-heading">Web developer</h2>
        <h1 className="about-desc">
          heeloooo
        </h1>
        <button className="btn">Contact</button>
      </div>
    </div>
  );
};

export default About;
