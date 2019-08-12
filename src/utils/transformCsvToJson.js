const csv=require('csvtojson')

 async function convert(csvFilePath){
    const jsonArray=await csv({delimiter:","}).fromFile(csvFilePath);
    return jsonArray
}
 module.exports = convert