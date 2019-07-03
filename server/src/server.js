const io = require('socket.io')()
const {JOIN_CHAT, RECEIVE_CLIENT_ID, LEAVE_CHAT, SEND_MESSAGE} = require('./constants')
io.on('connection', (socket) => {
    socket.on(JOIN_CHAT, (username) => {
        socket.emit(RECEIVE_CLIENT_ID, socket.id)
        socket.broadcast.emit(JOIN_CHAT, username)
    })
    socket.on(LEAVE_CHAT, (username) => {
        socket.broadcast.emit(LEAVE_CHAT, username)
    })
    socket.on(SEND_MESSAGE, (message) => {
        socket.broadcast.emit(SEND_MESSAGE, message)
    })
})

io.listen(process.env.PORT || 8080)
console.info(`Chat Server running on port ${process.env.PORT || 8080}`)
