require("dotenv").config()

module.exports = {
    NODE_ENV: process.env.NODE_ENV || "DEVELOPMENT",
    PORT : process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET : process.env.JWT_SECRET || "as4a65s4aas65a4s3as"
}
