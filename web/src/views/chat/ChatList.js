import React from 'react'
import {connect} from 'react-redux'

function ChatList(props) {
    const {messages, user} = props
    return (
        <ul className='chat-list'>
            {
                messages.map((message, index) => {
                    if (message.isSpecial) {
                        return (
                            <li key={index} className='chat-list--item chat-list--item-special'>
                                {message.value}
                            </li>
                        )
                    } else if (message.user.id === user.id){
                        return (
                            <li key={index} className='chat-list--item chat-list--item-user'>
                                {message.value}
                            </li>
                        )
                    } else {
                        return (
                            <li key={index} className='chat-list--item chat-list--item-other-user'>
                                <strong>{message.user.name}:</strong> {message.value}
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}

const mapStateToProps = state => ({user: state.user})
export default connect(mapStateToProps, null)(ChatList)
