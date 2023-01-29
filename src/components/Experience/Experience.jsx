import React from 'react'
import './experience-style.scss'


const Experience = ({experience}) => {
  return (
    <div className='c-experience'>
    
    {experience.map((exp) => {
        return(<div className='container'>
            <h3 key={exp.name}>{exp.name}</h3>
            <p key={exp.name}>{exp.date}</p>
            <p key={exp.name}>{exp.where}</p>
            </div>);
        
    })}
</div>
  )
}

export default Experience