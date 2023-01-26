import React from 'react'

const Habilities = ({habilities}) => {
  return (
    <div>
    <h3>Habilities</h3>
    {habilities.map ((hab) => {

        return <h4 key={hab}>{hab}</h4>
    })}
    </div>
  )
}

export default Habilities