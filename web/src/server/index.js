import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8080')

function subscribeToChat(username) {
    socket.emit('subscribeToChat', username)
}

function subscribedToChat(cb) {
    socket.on('subscribedToChat', user => cb(null, user))
}

function sendMessage(message) {
    socket.emit('sendMessage', message)
}

function receivedMessage(cb) {
    socket.on('receivedMessage', message => cb(null, message))
}

export {subscribeToChat, subscribedToChat, sendMessage, receivedMessage}
