import React from 'react'
import {connect} from 'react-redux'

function ChatList(props) {
    const {messages, user} = props
    console.log(user, messages)
    return (
        <ul className="chat-list">
            {
                messages.map((message, index) => {
                    if (message.isSpecial) {
                        return (
                            <li className="chat-list--item-special" key={index}>{message.value}</li>
                        )
                    } else if (message.user.id === user.id){
                        return (
                            <li className="chat-list--item-user" key={index}><strong>{message.user.name}:</strong> {message.value}</li>
                        )
                    } else {
                        return (
                            <li className="chat-list--item-other-user" key={index}>{message.user.name}: {message.value}</li>
                        )
                    }
                })
            }
        </ul>
    )
}

const mapStateToProps = state => ({user: state.user})
export default connect(mapStateToProps, null)(ChatList)
