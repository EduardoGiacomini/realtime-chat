import openSocket from 'socket.io-client'
import constants from './constants'
const {JOIN_CHAT, LEAVE_CHAT, SEND_MESSAGE} = constants

// TODO
const socket = openSocket('http://localhost:8080')

function joinChat(username) {
    socket.emit(JOIN_CHAT, username)
}

function joinedChat(callback) {
    socket.on(JOIN_CHAT, username => callback(null, username))
}

function leaveChat(username) {
    socket.emit(LEAVE_CHAT, username)
}

function leavedChat(callback) {
    socket.on(LEAVE_CHAT, username => callback(null, username))
}

function sendMessage(message) {
    socket.emit(SEND_MESSAGE, message)
}

function receiveMessage(callback) {
    socket.on(SEND_MESSAGE, message => cb(null, message))
}

export {joinChat, joinedChat, leaveChat, leavedChat, sendMessage, receiveMessage}
