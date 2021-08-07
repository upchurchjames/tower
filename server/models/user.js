const mongoose = require('mongoose');

const User = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String
});

const UserModel = mongoose.model('User', User);

module.exports = UserModel;