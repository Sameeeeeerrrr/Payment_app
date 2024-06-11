const express = require("express")
const signup = require("../services/users/signup")
const signin = require("../services/users/signin")
const update = require("../services/users/update")
const Auth = require("../middlewares/authentication")

const userRouter = express.Router()

userRouter.post("/signup",signup)
userRouter.post("/signin",signin)
userRouter.put("/update",update)

module.exports = userRouter