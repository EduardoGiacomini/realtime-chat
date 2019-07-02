import React, { Component } from 'react'
import {subscribeToChat} from '../../server'
import Input from '../../components/Input'
import Button from '../../components/Button'

class SubscriberForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({username: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()

        subscribeToChat(this.state.username)
        this.props.history.push('/chat')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    id="username"
                    name="username"
                    value={this.state.username}
                    placeholder="Insira seu nome de usuário"
                    autoFocus={true}
                    required={true}
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    value="Iniciar"
                />
            </form>
        )
    }
}

export default SubscriberForm
