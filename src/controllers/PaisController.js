

module.exports={
    index(require,respose){
        console.log(json(require.body))
        return respons.json({ok:"true"})
    }
}