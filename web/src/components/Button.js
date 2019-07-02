import React from 'react'

export default function Input(props) {
    const {type, value} = props
    return (
        <button type={type}>{value}</button>
    )
}
