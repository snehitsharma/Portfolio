import React,{useState} from 'react';
import './App.css';
import Main from './components/Main';
import img01 from "./assets/_99b2484d-7168-4400-aff6-a42b52aa8532.jpeg"
import img02 from "./assets/_593e6c5f-5a71-4634-80e2-7416c5b5d7a9.jpeg"
import img03 from "./assets/_ef68a21a-2fe7-44ce-a322-a64e0ca8f620.jpg"
import img04 from "./assets/roozbeh-eslami-YlVjrBkfXt8-unsplash.jpg"
import img05 from "./assets/programmer-1653351_1920.png"
import clgimage from "./assets/UMass Boston image_0.jpg"
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

const navbarLinks = [
  {url : "#", title: "Home"},
  {url : "#", title: "About"},
  {url : "#", title: "Contact"}]


function App() {
  return (
    <div className='App'>
      <Navbar navbarLinks={navbarLinks}/>
      <Main imageSrc = {img05} />
      <Slider Imagesrc= {img02} Title={"Full stack web developer"} Subtitle={"React.js, MongoDB, Express.js, Node.js"}/>
      <Slider Imagesrc={clgimage} Title={"University of Massachusetts"} Subtitle={"System Analysis, Business Intelligence, DBMS"} flipped={true}/>
      <About imagesrc = {img01}/>
      <Contact/>
    </div>
    
  )
}

export default App;
