import React from 'react'

import logo from '../images/mFilterIt%20PNG.png.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <img src={logo} alt='' />
      </div>
      <div className='nav-right'>
        <a href=''>Our solutions</a>
        <a href=''>Resources</a>
        <a href=''>About Us</a>
        <a href=''>Career</a>
        <button>Contact us</button>
      </div>
    </div>
  )
}

export default Navbar