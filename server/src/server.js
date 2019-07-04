const io = require('socket.io')()
const {JOIN_CHAT, SEND_USER_CONFIRMATION, LEAVE_CHAT, SEND_MESSAGE} = require('./constants')
const {joinChat, leaveChat} = require('./phrases')

io.on('connection', (socket) => {
    socket.on(JOIN_CHAT, (username) => {
        const user = {id: socket.id, name: username}
        socket.emit(SEND_USER_CONFIRMATION, user)

        const phrasePosition = generateRandomPosition(joinChat.length)
        const joinChatMessage = `${username} ${joinChat[phrasePosition]}`
        const message = {user: user, value: joinChatMessage}
        io.emit(JOIN_CHAT, message)
    })
    socket.on(LEAVE_CHAT, (username) => {
        const user = {id: socket.id, name: username}
        const phrasePosition = generateRandomPosition(leaveChat.length)
        const leaveChatMessage = `${username} ${leaveChat[phrasePosition]}`
        const message = {user: user, value: leaveChatMessage}
        io.emit(LEAVE_CHAT, message)
    })
    socket.on(SEND_MESSAGE, (message) => {
        io.emit(SEND_MESSAGE, message)
    })
})

function generateRandomPosition(exclusiveMaximunValue) {
    return Math.floor(Math.random() * exclusiveMaximunValue)
}

io.listen(process.env.PORT || 8080)
console.info(`Chat Server running on port ${process.env.PORT || 8080}`)
