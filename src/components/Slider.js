import React from 'react'
import './Slider.css'
import { useInView } from 'react-intersection-observer'


const Slider = ({Imagesrc,Title,Subtitle,flipped,Subjects}) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
    });

    const renderContent = () =>{
        if(!flipped){
            return(
            <>
            <img src={Imagesrc} alt="portfolio" className='Slider_image'/>
            <div className='Slider-content'>
                <h1 className='Slider-title'>{Title}</h1>
                <p>{Subtitle}</p>
                <p>{Subjects}</p>
            </div>
            </>
            );
        }
        else{
            return(
            <>
            <div className='Slider-content'>
                <h1 className='Slider-title'>{Title}</h1>
                <p>{Subtitle}</p>
                <p>{Subjects}</p>
                
            </div>
            <img src={Imagesrc} alt="portfolio" className='Slider_image'/>
            </>
            );
        }
    };
  return (
    <div className= {inView ? "Slider slider--zoom" : "Slider"} ref = {ref} > 
   {renderContent()}
   </div>
  );
}

export default Slider