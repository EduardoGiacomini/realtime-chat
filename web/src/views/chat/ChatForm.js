import React, { Component } from 'react'
import {sendMessage} from '../../commons/server'
import Input from '../../components/Input'
import Button from '../../components/Button'

class ChatForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()

        sendMessage(this.state.message)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    id="message"
                    name="message"
                    value={this.state.message}
                    placeholder=""
                    autoFocus={true}
                    required={true}
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    value="Enviar"
                />
            </form>
        )
    }
}

export default ChatForm
