const UserModel = require('../models/user')

async function CreateUser(data) {
    let result = await UserModel.create(data);

    console.log('Created User: ' + result);

    return result;
}

async function GetUserInfo(name) {
    let query = UserModel.findOne({ name: name });
    console.log(query.getFilter());
    let result = await query.exec();
    console.log('User: ' + result);

    return result;
}

module.exports = {
    CreateUser,
    GetUserInfo,
}