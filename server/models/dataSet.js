const mongoose = require('mongoose');

const DataSet = mongoose.Schema({
    Name: String,
    id_User: mongoose.ObjectId
});

const DataSetModel = mongoose.model('DataSet', DataSet);

module.exports = DataSetModel;