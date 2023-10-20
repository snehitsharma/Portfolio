import React from 'react'
import './Main.css'

const Main = ({imageSrc}) => {
  return (
    <div className='Main'>
      
        <img src={imageSrc} alt='portfolio' className='Main-image'/>
        <h1 className='main-title'>Snehit Sharma</h1>
        
    </div>
  )
}

export default Main