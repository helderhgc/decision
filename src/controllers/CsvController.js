const converter = require('../utils/transformCsvToJson')
const axios = require('axios')
module.exports ={
    async store(req,res){
        const jsonArray = await converter('/home/leonardo/Documents/Projetos/decision/csv/TestePaises.csv')
        for(i=0;i<jsonArray.length;i++)
        {
            await axios.post('http://localhost:3333/pais',{
                Pais:jsonArray[i].Pais,
                Comida:jsonArray[i].Comida,
                Bebida:jsonArray[i].Bebida
            })
        }
        return res.json({ok:"true"})
    }
}