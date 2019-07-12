import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sendMessage} from '../../commons/server'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class ChatForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        sendMessage({user: this.props.user, value: this.state.value, isSpecial: false})
        this.clearForm()
    }

    clearForm() {
        this.setState({value: ''})
    }

    render() {
        return (
            <form className='chat-form' onSubmit={this.handleSubmit}>
                <Input
                    id='value'
                    name='value'
                    value={this.state.value}
                    placeholder='Digite algo...'
                    autoFocus={true}
                    required={true}
                    onChange={this.handleChange}
                />
                <Button
                    type='submit'
                    icon={faPlay}
                />
            </form>
        )
    }
}

const mapStateToProps = state => ({user: state.user})
export default connect(mapStateToProps, null)(ChatForm)
