const DataSetModel = require('../models/dataSet')

async function GetDataSets(id_User) {
    let data = await DataSetModel.find({ id_User }).exec();

    console.log(data);
    
    return data;
}

async function GetDataSet(idDataSet) {
    let data = await DataSetModel.findById(idDataSet).exec();

    console.log(data);
    
    return data;
}

module.exports = {
    GetDataSets,
    GetDataSet
}