import React, { Component } from 'react'
import {subscribedToChat, receivedMessage} from '../../server'
import ChatForm from './ChatForm'

class ChatList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }

        subscribedToChat((err, user) => this.setState({
            messages: [...this.state.messages, `${user.username} conectou-se ao grupo.`]
        }))
        receivedMessage((err, message) => this.setState({
            messages: [...this.state.messages, message]
        }))
    }

    render() {
        console.log(this.state.messages)
        return (
            <div>
                <ChatForm />
                {
                    this.state.messages.map((message, index) => {
                        return (
                            <p key={index}>{message}</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default ChatList
