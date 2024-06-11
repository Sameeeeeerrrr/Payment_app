const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")

const Auth = (req, res, next) => {
    try {
        const Auth_token = req.headers.token
        const token = Auth_token.split(" ")[1]
        const isValid = jwt.verify(token, JWT_SECRET)
        if (isValid) {
            next()
        } else {
            res.status(400).json({ message: "You are not authorized" })
        }
    } catch (err) {
        res.status(400).json({message:"JWT / ERROR"})
        //console.log(err)
    }
}

const me = (req, res) => {
    try {
        const Auth_token = req.headers.token
        const token = Auth_token.split(" ")[1]
        const isValid = jwt.verify(token, JWT_SECRET)
        if (isValid) {
            res.status(200).json({ message: "Authorized" })
        } else {
            res.status(400).json({ message: "Not authorized" })
        }
    } catch (err) {
        res.status(400).json({ message:"JWT / ERROR" })
        //console.log(err)
    }

}

module.exports = { Auth, me }