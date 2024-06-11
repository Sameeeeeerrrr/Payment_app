require("dotenv").config()
const express = require("express")
const cors = require("cors")
const router = require("./Routes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1",router)

app.use((err,req,res,next)=>{
    res.json({message:"Server error / try again"})
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`This server is running on port ${PORT}`)
})
