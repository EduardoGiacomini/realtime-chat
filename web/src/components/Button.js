import React from 'react'

export default function Button(props) {
    const {type, icon, alt} = props
    return (
        <button className="btn" type={type}>
            <img className="btn--icon" src={icon} alt={alt}/>
        </button>
    )
}
