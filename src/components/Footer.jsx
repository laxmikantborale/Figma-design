import React from 'react'

import twitter from '../images/Vector.png'
import facebook from '../images/Vector (2).png'
import yutube from '../images/Vector (3).png'
import likedin from '../images/Vector (4).png'

import logo from '../images/mFilterIt%20PNG.png.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
      <div className='commmon-container'>
        <div className='fl-common'>
          <h3>Our solutions</h3>
          <a href=''>Ad traffic validation</a>
          <a href=''>Brand hygiene protection</a>
          <a href=''>Ecommerce competetive analytics</a>
          <a href=''>mobile identity solution</a>
        </div>
        <div className='fl-common'>
          <h3>Quick links</h3>
          <a href=''>About us</a>
          <a href=''>Contact us</a>
          <a href=''>career</a>
          <a href=''>CSR</a>
          <a href=''>Terms and conditions</a>
          <a href=''>Privacy policy</a>
        </div>
        <div className='fl-common'>
          <h3>Resources</h3>
          <a href=''>Blogs</a>
          <a href=''>Case studies</a>
          <a href=''>Reports</a>
          <a href=''>Newsroom and Media</a>

        </div>
        </div>
        <div className='footer-logo'>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className='footer-right'>
        <div className='fright-top'>
          <img src={twitter} alt='' />
          <img src='https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg' alt='' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' alt='' />
          <img src={yutube} alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='' />

        </div>
        <div className='fright-bottom'>
          <h3>Sign up for our newsletter</h3>
          <form>
            <input type='email' placeholder='Email address' />
            <button type='submit'>subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer