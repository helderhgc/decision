const {Schema,model} = require('mongoose')

const PaisSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    bebida:{
        type:String,
        require:true
    },
    comida:{
        type:String,
        require:true      
    },
})

module.exports = model('Pais',PaisSchema)