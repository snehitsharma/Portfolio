import React, { useState } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import img02 from "../assets/_593e6c5f-5a71-4634-80e2-7416c5b5d7a9.jpeg";
import main_image from "../assets/programmer-1653351_1920.png";
import clgimage from "../assets/UMass Boston image_0.jpg";
import img05 from "../assets/_593e6c5f-5a71-4634-80e2-7416c5b5d7a9.jpeg";


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
      />
      <Portfolio/>
      <Slider
        Imagesrc={clgimage}
        Title={"University of Massachusetts"}
        Subtitle={"System Analysis, Business Intelligence, DBMS"}
        flipped={true}
      />
      <Slider
        Imagesrc={img05}
        Title={"SRM Institute of Science and Technology"}
        Subtitle={"Business Intelligence, DBMS"}
        
      />
    </div>
  )
}

export default App;
