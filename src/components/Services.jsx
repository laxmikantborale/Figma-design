import React from 'react'

// import firstImage from '../images/color_x5F_1.png'
import cloud from '../images/07.-Cloud-Services 1.svg'
import secimage from '../images/01.-Advertising 1.svg'

import service from '../images/30_-Hard-Selling 1.svg'



const Services = () => {
  return (
    <div className='services'>
    <h1> Our Services</h1>
      <div className='service-container'>
        <div className='service-card'>
          <img src={service} alt='' />
          <div className='service-common'>
          <h3>Ecommerce competitive Analytics</h3>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print,
           and publishing industries for previewing layouts and visual mockups.<span>Read more..</span></p>
           </div>
          
        </div>
        <div className='service-card'>
          <img src={secimage} alt='' />
          <div className='service-common'>
          <h3>Brand Hygiene protection</h3>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print,
           and publishing industries for previewing layouts and visual mockups.<span>Read more..</span></p>
           </div>         
        </div>
        <div className='service-card'>
          <img src={service} alt='' />
          <div className='service-common'>
          <h3>Mobile Identity solutions</h3>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print,
           and publishing industries for previewing layouts and visual mockups.<span>Read more..</span></p>
           </div>          
        </div>
        <div className='service-card'>
          <img src={cloud} alt='' />
          <div className='service-common'>
          <h3>Add Traffic Validation</h3>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print,
           and publishing industries for previewing layouts and visual mockups.<span>Read more..</span></p>
           </div>         
        </div>
      </div>
    </div>
  )
}

export default Services