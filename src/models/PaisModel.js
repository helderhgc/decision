const {Schema,model} = require('mongoose')

const PaisSchema = new Schema({
    Pais:{
        type:String,
        require:true
    },
    Bebida:{
        type:String,
        require:true
    },
    Comida:{
        type:String,
        require:true      
    },
})

module.exports = model('PaisModel',PaisSchema)