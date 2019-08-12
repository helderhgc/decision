const express = require('express')
const PaisController = require('./controllers/PaisController')
const CsvController = require('./controllers/CsvController')
const baseUrl =' http://localhost.com:3333'

const routes = express.Router()

routes.get('/pais',PaisController.index)
routes.post('/pais',PaisController.store)
//routes.delete('/csv',CsvController.delete)
routes.post('/csv',CsvController.store)


module.exports= routes