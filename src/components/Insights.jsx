import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sliderData } from './sliderData'

const Insights = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
      className='insights'>
      <h1>Insightful Reads - <span>mFilterIt</span></h1>
      <Slider {...settings}>
      {
        sliderData.map((item) => {
          return <div className='card' key={item.id}>
            <div className='card-top'>
              <img src={item.image} alt='' />
              <p>{item.summary}</p>
              
            </div>
          </div>
        })
      }
      </Slider>
      <div className='insight-seperator'></div>
    </div>
  )
}

export default Insights