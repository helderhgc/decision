const Pais = require('../models/Pais')

module.exports={
    index(require,response){
        console.log(require.body)
        return response.json({ok:"abc"})
    },
    async store(require,response){
        const {name,comida,bebida} = require.body
        const pais =  await Pais.create({
            name,
            bebida,
            comida,
        })
        console.log(pais)
        return response.json({ok:`${name} foi salvo com sucesso`})
    }
}