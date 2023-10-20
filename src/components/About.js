import "./About.css"


import React from 'react'

const About = ({imagesrc}) => {
  return (
    <div className="content">
        <img className="image" src={imagesrc} alt="portfolio"/>
        <div className="words"><h1 className="name">I'm Snehit Sharma</h1>
        <h2 className="sub-heading"> web developer</h2>
        <h1 className="about-desc">Experienced Software Engineer and Web Developer with a proven track record of over two years at TATA Consultancy Services. 
            Possessing a keen aptitude for robust problem-solving and a fervent commitment to remaining at the forefront of the industry's cutting-edge trends and best practices. In addition, I have independently operated as a freelance web developer
            , delivering premium websites tailored to meet the unique requirements of discerning clients.
        </h1>
        <button className="btn">Contact</button>
        </div>
        
    </div>
  )
}

export default About