const io = require("socket.io")();

// Multiplayer sync handler
io.on('connection', (socket) => {
    console.log('A player connected');

    socket.on('playerMove', (data) => {
        // Sync player movement across clients
        socket.broadcast.emit('updatePlayer', data);
    });
    
    socket.on('playerShoot', (data) => {
        // Sync shooting events across clients
        socket.broadcast.emit('playerShoot', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A player disconnected');
    });
});

module.exports = io;