import openSocket from 'socket.io-client'
import constants from '../constants'
const {JOIN_CHAT, SEND_USER_CONFIRMATION, LEAVE_CHAT, SEND_MESSAGE} = constants

// TODO
const socket = openSocket('http://localhost:8080')

function joinChat(username) {
    socket.emit(JOIN_CHAT, username)
}

function joinedChat(callback) {
    socket.on(JOIN_CHAT, message => callback(null, message))
}

function receiveClient(callback) {
    socket.on(SEND_USER_CONFIRMATION, user => callback(null, user))
}

function leavedChat(callback) {
    socket.on(LEAVE_CHAT, message => callback(null, message))
}

function sendMessage(message) {
    socket.emit(SEND_MESSAGE, message)
}

function receiveMessage(callback) {
    socket.on(SEND_MESSAGE, message => callback(null, message))
}

export {joinChat, joinedChat, receiveClient, leavedChat, sendMessage, receiveMessage}
