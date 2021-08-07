const express = require('express');
const BuUser = require('../business/user')

const router = express.Router();

router.post('/', (req, res) => {
    let data = req.body;

    console.log(data);

    let temp = BuUser.CreateUser(data);

    res.json(temp);
})

router.get('/:name', async (req, res) => {
    let user_name = req.params.name;

    console.log('Hit this endpoint with user ID: ');
    console.log(user_name);

    let data;
    await BuUser.GetUserInfo(user_name).then(results => { data = results; });
    console.log('endpoint: ' + data);

    res.json(data._id);
})

module.exports = router;
