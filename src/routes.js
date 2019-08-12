const express = require('express')
const PaisController = require('./controllers/PaisController')
const baseUrl =' http://localhost.com:3333'

const routes = express.Router()

routes.get('/pais',PaisController.index)


module.exports= routes