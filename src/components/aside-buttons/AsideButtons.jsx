import React from 'react'

import './aside.scss'

const AsideButtons = ({ person }) => {


    return (
        <div className='aside'>
            <a href={person.gitHub} target="_blank" rel='noreferrer'><button className='github btn-rs'></button></a>
            <a href={person.linkedin} target="_blank" rel='noreferrer'><button className='linkedin btn-rs'></button></a>
            <a href={person.instagram} target="_blank" rel='noreferrer'><button className='instagram btn-rs'></button></a>
            <a href="https://t.me/ednukros" target="_blank" rel='noreferrer'><button className='telegram btn-rs'></button></a>
            <a href="mailto:isanmenarguez@gmail.com" target="_blank" rel='noreferrer'><button className='gmail btn-rs'></button></a>
        </div>
    )
}

export default AsideButtons

