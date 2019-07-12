import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props) {
    const {type, icon} = props
    return (
        <button className='btn' type={type}>
            <FontAwesomeIcon className='btn--icon' icon={icon} />
        </button>
    )
}
