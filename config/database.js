const mongoose = require("mongoose");
const env = require("./envConfig")

const connect = async() =>{
    try {
     await  mongoose.connect(env.MONGO_URL || `mongodb+srv://ALI:ali.devs123@cluster0.bhhln.mongodb.net/test`);
     console.log("Database connected");
    } catch (error) {
       console.log(error.message) ;
    }
};

module.exports = connect;
