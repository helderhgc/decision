const PaisModel = require('../models/PaisModel')
module.exports={
    async index(require,response){
        const {criteria,order} = require.headers
        const mySort = {[criteria] : order}
        console.log(mySort)
        const returnOfBd = await PaisModel.find().sort(mySort)
        //console.log(returnOfBd)
        return response.json({TodosOsPaises:returnOfBd})    
        return response.json({ok:"true"})    

    },
    async store(require,response){
        const {
                Name,
                Sufficient_Food,
                Sufficient_to_Drink,
                Safe_Sanitation,
                Education,
                Healthy_Life,
                Gender_Equality,
                Income_Distribution,
                Population_Growth,
                Good_Governance,
                Biodiversity,
                Renewable_Water_Resources,
                Consumption,
                Energy_Use,
                Energy_Savings,
                Greenhouse_Gases,
                Renewable_Energy,
                Organic_Farming,
                Genuine_Savings,
                GDP,
                Employment,
                Public_Debt
        } = require.body
        console.log(Name)
        const pais =  await PaisModel.create({
                Name,
                Sufficient_Food,
                Sufficient_to_Drink,
                Safe_Sanitation,
                Education,
                Healthy_Life,
                Gender_Equality,
                Income_Distribution,
                Population_Growth,
                Good_Governance,
                Biodiversity,
                Renewable_Water_Resources,
                Consumption,
                Energy_Use,
                Energy_Savings,
                Greenhouse_Gases,
                Renewable_Energy,
                Organic_Farming,
                Genuine_Savings,
                GDP,
                Employment,
                Public_Debt
        })
        return response.json({ok:`${Name} foi salvo com sucesso`})
    }
}