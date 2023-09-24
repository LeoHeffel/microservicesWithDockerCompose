const server = require('./src/server')

const PORT = 8002

server.listen( PORT, () => {
  console.log('Service films running on port', PORT)
})