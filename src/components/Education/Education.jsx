import React from 'react'

const Education = ({education}) => {
  return (
    <div>
        <h3>Education</h3>
        {education.map((educ) => {
            return(<div>
                <h4 key={educ.name}>{educ.name}</h4>
                <p key={educ.date}>{educ.date}</p>
                <p key={educ.where}>{educ.where}</p>
               
                </div>);
            
        })}
    </div>
  )
}

export default Education