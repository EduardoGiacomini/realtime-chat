import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setUser} from '../../commons/store/actions'
import {joinChat, receiveClientId} from '../../commons/server'
import Input from '../../components/Input'
import Button from '../../components/Button'

class Subscriber extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
        
        receiveClientId((err, id) => {
            this.props.setUser({id, username: this.state.username})
            this.redirectUser('/chat')
        })
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.redirectUser = this.redirectUser.bind(this)
    }

    handleChange(event) {
        this.setState({username: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        joinChat(this.state.username)
    }

    redirectUser(path) {
        this.props.history.push(path)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    id="username"
                    name="username"
                    value={this.state.username}
                    placeholder="Nome de usuário"
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

const mapDispatchToProps = (dispatch) => bindActionCreators({setUser}, dispatch)
export default connect(null, mapDispatchToProps)(Subscriber)
