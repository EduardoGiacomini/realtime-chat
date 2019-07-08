import React from 'react'

export default function Input(props) {
    const {type, value} = props
    return (
        <button className="btn-icon" type={type}>{value}</button>
    )
}
