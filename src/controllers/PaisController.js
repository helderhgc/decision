const PaisModel = require('../models/PaisModel')
const converter = require('../utils/transformCsvToJson')
module.exports={
    index(require,response){
        console.log(require.body)
        return response.json({ok:"abc"})    
    },
    async store(require,response){
        const {Pais,Comida,Bebida} = require.body
        console.log(Pais,Comida,Bebida)
        const pais =  await PaisModel.create({
            Pais,
            Bebida,
            Comida
        })
        console.log(pais)
        return response.json({ok:`${Pais} foi salvo com sucesso`})
    }
}