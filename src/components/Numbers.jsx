import React from 'react'

import numImage from '../images/Credit assesment-pana 1.svg'

const Numbers = () => {
  return (
    <div className='numbers'>
      <h1>Numbers speaks<br/> about us!</h1>
      <div className='num-container'>
        <div className='num-left'>
          <div className='num-common'>
            <h3>1000+</h3>
            <div className='botom-line'></div>
            <p>ecommerce website tracked</p>
          </div>
          <div className='num-common'>
            <h3>1000+</h3>
            <div className='botom-line'> </div>
            <p>ecommerce website tracked</p>
          </div>
          <div className='num-common'>
            <h3>1000+</h3>
            <div className='botom-line'> </div>
            <p>ecommerce website tracked</p>
          </div>
          <div className='num-common'>
            <h3>1000+</h3>
            <div className='botom-line'></div>
            <p>ecommerce website tracked</p>
          </div>
          <div className='num-common'>
            <h3>1000+</h3>
            <div className='botom-line'></div>
            <p>ecommerce website tracked</p>
          </div>
          <div className='num-common'>
            <h3>1000+</h3>
            <div className='botom-line'></div>
            <p>ecommerce website tracked</p>
          </div>
        </div>
        <div className='num-right'>
        <img src={numImage} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Numbers