const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        unique : true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    }
});


const userModel = mongoose.model("User" , UserSchema);

module.exports = userModel;