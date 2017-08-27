const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/compute.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/v2/', router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})
