import React from 'react'

import timer from '../images/timer.png.png'
import seamless from '../images/Asset%203_2x.png.png'
import futureTech from '../images/Asset%202_2x.png.png'
import AIML from '../images/AI_ML.png.png'


const Whowe = () => {
  return (
    <div className='whoWe'>
      <h1>Who we are</h1>
      <div className='who-container'>
      <div className='who-left'>
        <p>we wre the essential tool in the digital marketrs handbag. We are on a mission to create trust, uphold integrity
          drive growth and value across the digital ecosystem. We empower our customer with holistic view
          of the perspective journeys in the digital ecosystem by providing them with acuurate real time data that helps them understand
          in their returns on digital investments</p>
        <button>Contact us</button>
      </div>
      <div className='who-right'>
        <div className='right-top'>
          <div className='common'>
            <img src={AIML} alt='' />
            <h3>Power of AI/ML</h3>
          </div>
          <div className='common'>
            <img src={futureTech} alt='' />
            <h3>Future ready tech</h3>
          </div>
        </div>
        <div className='right-bottom'>
          <div className='common'>
            <img src={timer} alt='' />
            <h3>Real time-tracking</h3>
          </div>
          <div className='common4'>
            <img src={seamless} alt='' />
            <h3>Seamless Integration</h3>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Whowe