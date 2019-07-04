import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setInitialUser} from '../../commons/store/actions'
import {joinedChat, leaveChat, leavedChat, receiveMessage} from '../../commons/server'
import ChatForm from './ChatForm'

class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }

        joinedChat((err, message) => this.setState({
            messages: [...this.state.messages, message]
        }))
        leavedChat((err, message) => this.setState({
            messages: [...this.state.messages, message]
        }))
        receiveMessage((err, message) => this.setState({
            messages: [...this.state.messages, message]
        }))
        this.checkInvalidUser = this.checkInvalidUser.bind(this)
        this.redirectUser = this.redirectUser.bind(this)
    }

    componentDidMount() {
        this.checkInvalidUser()
    }

    componentWillUnmount() {
        leaveChat(this.props.user.name)
        this.props.setInitialUser()
    }

    checkInvalidUser() {
        if (this.props.user.id === '' && this.props.user.name === '') {
            this.redirectUser('/')
        }
    }

    redirectUser(path) {
        this.props.history.push(path)
    }

    render() {
        console.log(this.state.messages)
        return (
            <div>
                <ChatForm />
                {
                    this.state.messages.map((message, index) => {
                        return (
                            <p key={index}>{message.value}</p>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state.user})
const mapDispatchToProps = (dispatch) => bindActionCreators({setInitialUser}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
