const express = require('express');
const server = express();

const cors = require('cors')
server.use(cors())
server.use(express.json())

const availableController = require('./Controller/availableController.js')
server.use('/available', availableController)

function startServer(conn){
    const db = require('../src/Database/availableDatabase.js')
    db.injectDB(conn)

    server.listen(
        process.env.PORT,
        () => console.log(`...:API has been started in port ${process.env.PORT}`)
    )
}

const MongoDB = require('mongodb').MongoClient;

MongoDB
    .connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net', { useUnifiedTopology: true })
    .then(startServer)
    .catch(e => {
        console.log(e)
        process.exit(-1)
})
