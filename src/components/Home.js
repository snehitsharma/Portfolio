import React, { useState } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import img02 from "../assets/_593e6c5f-5a71-4634-80e2-7416c5b5d7a9.jpeg";
import main_image from "../assets/programmer-1653351_1920.png";
import clgimage from "../assets/UMass Boston image_0.jpg";
import img05 from "../assets/_593e6c5f-5a71-4634-80e2-7416c5b5d7a9.jpeg";
import ugimg from "../assets/srm-institute-science-technology.png"


import "./Home.css";
import Portfolio from './Portfolio';

function App() {
  return (
    <div>
      <div className='main'>
      <img className="mainImage" src={main_image} alt='portfolio'/>
      <h1 className='mainTitle'>Snehit Sharma</h1>
      </div>
      <Slider
        Imagesrc={img02}
        Title={"Full stack web developer"}
        Subtitle={"React.js, MongoDB, Express.js, Node.js"}
        Subjects={"CI/CD Pipelines, Docker, Kubernetes"}
        
      />
       <Slider
        Imagesrc={clgimage}
        Title={"TATA Consultancy Services"}
        Subtitle={"Systems Developer"}
        Subjects={""}
        flipped={true}
      />
      <Portfolio/>
      <Slider
        Imagesrc={clgimage}
        Title={"University of Massachusetts"}
        Subtitle={"Information Technology"}
        Subjects={"System Analysis, Business Intelligence, DBMS"}
        
      />
      <Slider
        Imagesrc={ugimg}
        Title={"SRM Institute of Science and Technology"}
        Subtitle={"Computer Science Engineer"}
        Subjects={"Theory of computation, Compiler Design, Object Oriented Programming"}
        flipped={true}
      />
    </div>
  )
}

export default App;
