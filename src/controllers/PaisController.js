

module.exports={
    index(require,response){
        console.log(require.body)
        return response.json({ok:"abc"})
    },
    store(require,response){
        console.log(require.body)
        return response.json({ok:"ok"})
    }
}