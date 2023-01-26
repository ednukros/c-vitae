import React from 'react'
import './languages.scss'

const Languages = ({languages}) => {
    return (
        <div className='c-languages'>
            <h3>Languages</h3>
            {languages.map((lang) => {

                return (
                    <div>
                    <h4 key={lang.language}>{lang.language}</h4>
                    <p key={lang.wrlevel}>{lang.wrlevel}</p>
                    <p key={lang.splevel}>{lang.splevel}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Languages