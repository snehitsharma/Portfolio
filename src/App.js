import React from 'react';
import './App.css';
import Main from './components/Main';
import img01 from "./assets/_99b2484d-7168-4400-aff6-a42b52aa8532.jpeg";
import img02 from "./assets/_593e6c5f-5a71-4634-80e2-7416c5b5d7a9.jpeg";
import main_image from "./assets/programmer-1653351_1920.png"
import clgimage from "./assets/UMass Boston image_0.jpg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Slider from './components/Slider'

const App = () => {
  const navbarLinks = [
    {url: "#", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/contact", title: "Contact"}
  ];

    return (
      <Router>
      <div>
        <Navbar navbarLinks={navbarLinks}/>
        <Main imageSrc={main_image} />
        <Slider Imagesrc= {img02} Title={"Full stack web developer"} Subtitle={"React.js, MongoDB, Express.js, Node.js"}/>
        <Slider Imagesrc={clgimage} Title={"University of Massachusetts"} Subtitle={"System Analysis, Business Intelligence, DBMS"} flipped={true}/>
        
        <Routes>
          <Route path='/about' element={<About imagesrc={img01} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <About imagesrc={img01}/>
      </div>
    </Router>
  );
};

export default App;
