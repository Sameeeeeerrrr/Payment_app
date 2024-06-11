const express = require("express")
const userRouter = require("./userRoutes")
const transaction = require("../services/transaction")
const balance = require("../services/balance")
const bulk = require("../services/bulk")
const {Auth,me} = require("../middlewares/authentication")

const router = express.Router()

router.use("/users",userRouter)

router.get("/me",me)

router.post("/transaction",transaction)
router.get("/balance",Auth,balance)
router.get("/bulk",Auth,bulk)



module.exports = router