

module.exports={
    index(require,response){
        console.log(require.body)
        return response.json({ok:"true"})
    }
}