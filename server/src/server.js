const io = require('socket.io')()

io.on('connection', (client) => {
    client.on('disconnect', () => {
        console.log('Um usuário desconectou-se do grupo.')
    })
    client.on('subscribeToChat', (username) => {
        console.log(`${username} - ${client.id} conectou-se ao grupo.`)
        io.emit('subscribedToChat', {id: client.id, username})
    })
    client.on('sendMessage', (message) => {
        io.emit('receivedMessage', message)
    })
})

io.listen(process.env.PORT || 8080)
console.info(`Chat Server running on port ${process.env.PORT || 8080}`)
