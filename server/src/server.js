const io = require('socket.io')()
const {JOIN_CHAT, SEND_USER_CONFIRMATION, DISCONNECT, LEAVE_CHAT, SEND_MESSAGE} = require('./commons/constants')
const {joinChat, leaveChat} = require('./commons/phrases')

io.on('connection', (socket) => {
    socket.on(JOIN_CHAT, (username) => {
        const user = {id: socket.id, name: username}
        socket.emit(SEND_USER_CONFIRMATION, user)

        const phrasePosition = generateRandomPosition(joinChat.length)
        const joinChatMessage = `${user.name} ${joinChat[phrasePosition]}`
        const message = {user: user, value: joinChatMessage, isSpecial: true}
        io.emit(JOIN_CHAT, message)
    })
    socket.on(DISCONNECT, () => {
        const phrasePosition = generateRandomPosition(leaveChat.length)
        const leaveChatMessage = `Um usuário ${leaveChat[phrasePosition]}`
        const message = {user: {id: '', name: ''}, value: leaveChatMessage, isSpecial: true}
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
