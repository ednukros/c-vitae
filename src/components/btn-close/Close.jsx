import React, { useState } from 'react'

const Close = ({active, setActive}) => {

    const [active, setActive] = Menu;
    return (
        <div className='btn-close-div'>
            <button onClick={() => setActive('clear')} className='btn-close'>X</button>

        </div>

        // {state === 'clear' }
    )
}

export default Close