import React, { useState } from 'react'

import vilgrin from '../images/vilrginn.png.png'
import pidilite from '../images/pidilite.png.png'
import starzplay from '../images/stazplay.png.png'
import careem from '../images/careem.png.png'

const Testimonials = () => {

  const [view, setView] = useState(false)


  return (
    <div className='testimonials'>
      <div className='test-top'>
        <div className='top-left'>
          <h1>Tesimonials</h1>
        </div>
        <div className='top-right'>
          <h3>What Reqruiters Have to<br /> say About mFilterIt</h3>
        </div>
      </div>
      <div className='test-bottom'>
        <div className='test-card'>
          <div className='card-top'>
            <img src={vilgrin} alt='' />
            <p>name</p>
          </div>
          <div className='card-bottom'>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
        <div className='test-card'>
          <div className='card-top'>
            <img src={careem} alt='' />
            <p>name</p>
          </div>
          <div className='card-bottom'>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
        <div className='test-card'>
          <div className='card-top'>
            <img src={pidilite} alt='' />
            <p>name</p>
          </div>
          <div className='card-bottom'>
            <h1></h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
        <div className='test-card'>
          <div className='card-top'>
            <img src={starzplay} alt='' />
            <p>name</p>
          </div>
          <div className='card-bottom'>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
      </div>
      {view && <div className='test-bottom'>
        <div className='test-card'>
          <div className='card-top'>
            <img src={vilgrin} alt='' />
            <p>name</p>
          </div>
          <div className='card-bottom'>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
        <div className='test-card'>
          <div className='card-top'>
            <img src={careem} alt='' />
            <p>name</p>
          </div>
          <div className='card-bottom'>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
        <div className='test-card'>
          <div className='card-top'>
            <img src={pidilite} alt='' />
            <p>name</p>
          </div>
          <div className='card-bottom'>
            <h1></h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
        <div className='test-card'>
          <div className='card-top'>
            <img src={starzplay} alt='' />
            <p>name</p>
          </div>
          <div className='card-bottom'>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>
      </div>}
      <button onClick={()=> setView(!view)}>View More</button>
    </div>
  )
}

export default Testimonials