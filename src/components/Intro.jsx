import React from 'react'

import superHero from '../images/Superhero-cuate 1.svg'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-left'></div>
      <img src={superHero} alt='' />
      <div className='intro-right'>
        <h1>We Are the <br /> Superhero of the <br /> Digital Add World</h1>
        <p>we create innovtive marketing solutions for <br />
          cost concious marketers who doesn't
          <br /> compromise on results!</p>
      </div>
    </div>
  )
}

export default Intro