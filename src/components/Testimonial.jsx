import React from 'react'
import album from '../images/album.png'
const Testimonial = () => {
  return (
    <div className='testimonial'>
         <img className='grid' src={album} alt='album1'/>
         <div className='content'>
             <h1 className='content-header'>Online Experiences</h1>
             <p className='content-body'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
         </div>
     
    
    </div>
  )
}

export default Testimonial