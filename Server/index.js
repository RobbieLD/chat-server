const express = require('express')
const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const io = require('socket.io')(http, { cors: { origin: "*" } })

// Install the cors middleware
app.use(cors())

// Allow express to host static files
app.use(express.static('.'))

// We set the port this way to the environment variable PORT can override the default of 3000
const port = process.env.PORT || 3000

const htmlIndexHandler = (request, response) => {
    // Just sent back the html page
    response.sendFile(__dirname + '/index.html');
}

const chatHandler = (message) => {
    console.log(message)

    // Send the message to all connected clients
    io.emit('chat', message)
}

const connectionHandler = (socket) => {
    console.log(`A client has connected with id: ${socket.id}`)
    socket.on('chat', chatHandler)
}

const serverStartHandler = () => {
    console.log('Server is running')
}

// Hook up the event handler for the express server for the default url
app.get('/', htmlIndexHandler);

// Handle the connection event
io.on('connection', connectionHandler);

// Start the server with 
http.listen(port, serverStartHandler);
