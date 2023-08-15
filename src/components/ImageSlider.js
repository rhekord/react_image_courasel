 import React,{useState} from 'react'
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa' 


const ImageSlider = ({slides}) => {
const [current, setCurrent]= useState(0)
const length = slides.length;

const nextslide = () => {
    setCurrent(current === length -1 ? 0: current + 1)
};

const prevslide = () => {
    setCurrent(current === 0 ? length -1: current -1)
};


if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}


   

return (
     <section className='slider'>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevslide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextslide}/>
      {SliderData.map((slide, index) => {
        return(
            <div className={index === current? 'slide active': 'slide'} key = {index}>
            {index === current && (<img src={slide.image} alt="slideImage" className='image'/>)}
            
            </div>
        ) 
        })}
     </section>
   );
 };
 
 export default ImageSlider;