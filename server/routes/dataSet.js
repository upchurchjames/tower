const express = require('express');
const BuDataSet = require('../business/dataSet');

const router = express.Router();

router.get('/User/:id_User', (req, res) => {
    console.log(req);
    let id_User = req.params.id_User;

    console.log('Hit this endpoint with user ID: ' + id_User);

    let data = BuDataSet.GetDataSets(id_User);

    res.json(data);
})

router.get('/:id', (req, res) => {
    let id_DataSet = parseInt(req.params.id);

    console.log('Hit this end point with ' + req.params.id);

    let data = BuDataSet.GetDataSet(id_DataSet);

    res.json(data);

});

module.exports = router;