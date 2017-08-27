const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/keystone.json')
const middlewares = jsonServer.defaults()
const fs = require('fs')
const read = require('read-all-stream')

let stream = fs.createReadStream('./data/keystone.json');

read(stream).then(function (data) {
  server.post('/auth/tokens', (req, res) =>{
    res.send(data)
  })

  server.use(middlewares)
  server.use('/v3/', router)
  server.listen(3000, () => {
    console.log('JSON Server is running')
  })


})
