import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sendMessage} from '../../commons/server'
import Input from '../../components/Input'
import Button from '../../components/Button'

class ChatForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        sendMessage({user: this.props.user, value: this.state.value, isSpecial: false})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    id="value"
                    name="value"
                    value={this.state.value}
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

const mapStateToProps = state => ({user: state.user})
export default connect(mapStateToProps, null)(ChatForm)
