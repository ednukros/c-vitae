import React from 'react'
import './about-style.scss'

const About = ({ about }) => {

  console.log(about);
  return (
    <div className='c-about'>
      <h3>ABOUT ME</h3>
      {about.map((aboutMe, index) => {

        // return <h4 key={JSON.stringify(aboutMe) + index}>{aboutMe.info}</h4>
        return <h4 key={aboutMe.info}>{aboutMe.info}</h4>

      })}
    </div>
  )
}

export default About