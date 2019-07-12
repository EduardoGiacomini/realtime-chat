import React from 'react'

export default function Input(props) {
    const {id, name, value, placeholder, autoFocus, required, onChange} = props
    return (
        <input
            className='input'
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            autoFocus={autoFocus}
            required={required}
            onChange={(event) => onChange(event)}
        />
    )
}
