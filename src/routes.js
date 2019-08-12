const express = require('express')
const PaisController = require('./controllers/PaisController')
const baseUrl =' http://localhost.com:3333'

const routes = express.Router()

routes.get('/pais',PaisController.index)
routes.post('/pais',PaisController.store)


module.exports= routes