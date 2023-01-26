import React from 'react'
import './habilities.scss' 

const Habilities = ({habilities}) => {
  return (
    <div className='c-habilities'>
    <h3>Habilities</h3>
    {habilities.map ((hab) => {

        return <h4 key={hab}>{hab}</h4>
    })}
    </div>
  )
}

export default Habilities