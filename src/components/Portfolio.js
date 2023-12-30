import React from 'react';
import "./Portflio.css";

import weather from "../assets/weather.png";
import tictactoe from "../assets/tictactoe.png"
import todolist from "../assets/todoist.png"
import quotes from "../assets/Quotes.png"
import Movies from "../assets/Movies.png"
import lightsout from "../assets/Lightsout.jpg"


const Portfolio = () => {
  return (
    <div className='port-container'>
    <h2>My projects</h2>
    
    <div className='projects'>
        <div className='project'>
            <img src={weather} alt = "port"/>
            <h3 className='project-title'>Weather predictor</h3>
            <div className='details'>deettaaillsss</div>
            <a href='https://github.com/snehitsharma/weatherApp' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={tictactoe} alt = "port"/>
            <h3 className='project-title'>Connect 3</h3>
            <div className='details'>deettaaillsss</div>
            <a href='https://github.com/snehitsharma/Tic-tac-toe' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={todolist} alt = "port"/>
            <h3 className='project-title'>To Do List</h3>
            <div className='details'>deettaaillsss</div>
            <a href='https://github.com/snehitsharma/todo' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={quotes} alt = "port"/>
            <h3 className='project-title'>Quotes Generator</h3>
            <div className='details'>deettaaillsss</div>
            <a href='https://github.com/snehitsharma/Quote-generator' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={Movies} alt = "port"/>
            <h3 className='project-title'>Movies App</h3>
            <div className='details'>deettaaillsss</div>
            <a href='https://github.com/snehitsharma/Movies-app' className='details-btn'>more details</a>
        </div>
        <div className='project'>
            <img src={lightsout} alt = "port"/>
            <h3 className='project-title'>Lights Out</h3>
            <div className='details'>deettaaillsss</div>
            <a href='https://github.com/snehitsharma/lightsOut' className='details-btn'>more details</a>
        </div>
    </div>
    </div>
  )
}

export default Portfolio

