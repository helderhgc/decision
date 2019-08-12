const converter = require('../utils/transformCsvToJson')
const axios = require('axios')
module.exports ={
    async store(req,res){
        const jsonArray = await converter('/home/leonardo/Documents/Projetos/decision/csv/completo.csv')
        for(i=0;i<jsonArray.length;i++)
        {
            await axios.post('http://localhost:3333/pais',{
                Name:jsonArray[i].Name,
                Sufficient_Food:jsonArray[i].Sufficient_Food,
                Sufficient_to_Drink:jsonArray[i].Sufficient_to_Drink,
                Safe_Sanitation:jsonArray[i].Safe_Sanitation,
                Education:jsonArray[i].Education,
                Healthy_Life:jsonArray[i].Healthy_Life,
                Gender_Equality:jsonArray[i].Gender_Equality,
                Income_Distribution:jsonArray[i].Income_Distribution,
                Population_Growth:jsonArray[i].Population_Growth,
                Good_Governance:jsonArray[i].Good_Governance,
                Biodiversity:jsonArray[i].Biodiversity,
                Renewable_Water_Resources:jsonArray[i].Renewable_Water_Resources,
                Consumption:jsonArray[i].Consumption,
                Energy_Use:jsonArray[i].Energy_Use,
                Energy_Savings:jsonArray[i].Energy_Savings,
                Greenhouse_Gases:jsonArray[i].Greenhouse_Gases,
                Renewable_Energy:jsonArray[i].Renewable_Energy,
                Organic_Farming:jsonArray[i].Organic_Farming,
                Genuine_Savings:jsonArray[i].Genuine_Savings,
                GDP:jsonArray[i].GDP,
                Employment:jsonArray[i].Employment,
                Public_Debt:jsonArray[i].Public_Debt,
            })
        }
        return res.json({ok:"true"})
    }
}