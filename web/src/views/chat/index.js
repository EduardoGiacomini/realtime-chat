import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setInitialUser} from '../../commons/store/actions'
import {joinedChat, leavedChat, receiveMessage} from '../../commons/server'
import ChatList from './ChatList'
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
        this.props.setInitialUser()
    }

    checkInvalidUser() {
        if (this.props.user.id === '' || this.props.user.name === '') {
            this.redirectUser('/')
        }
    }

    redirectUser(path) {
        this.props.history.push(path)
    }

    render() {
        return (
            <div>
                <ChatForm />
                <ChatList messages={this.state.messages} user={this.props.user} />
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state.user})
const mapDispatchToProps = (dispatch) => bindActionCreators({setInitialUser}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
