import React from 'react'

const Experience = ({experience}) => {
  return (
    <div>
    <h3>Experience</h3>
    {experience.map((exp) => {
        return(<div>
            <h4 key={exp.name}>{exp.name}</h4>
            <p key={exp.name}>{exp.date}</p>
            <p key={exp.name}>{exp.where}</p>
            </div>);
        
    })}
</div>
  )
}

export default Experience