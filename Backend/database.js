const mongoose = require("mongoose")
const DATABASE = process.env.DATABASE

mongoose.connect(`${DATABASE}`)

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String
})

const balanceSchema = mongoose.Schema({
    user : String,
    balance : Number
})

const Users = mongoose.model("Users", UserSchema)
const UserBalance = mongoose.model("UserBalance", balanceSchema)

module.exports = {Users, UserBalance}