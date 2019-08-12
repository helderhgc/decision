const express = ('express')

const server = express()


// conect with database

server.use(cors())
server.use(express.json())
server.use(routes)
server.listen(3333)