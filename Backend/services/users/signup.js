const {Users, UserBalance} = require("../../database")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { signupSchema } = require("../../inputValidataion")
const JWT_SECRET = require("../../config")

const signup = async (req, res) => {
    try {
        const userInputs = signupSchema.safeParse(req.body)

        if (userInputs.success) {
            const username = userInputs.data.username
            const password = userInputs.data.password

            const userexists = await Users.findOne({ username: username })

            if (userexists) {
                res.status(411).json({ message : "User already exists / Go to signin page" })

            } else {
                const hashedPassword = await bcrypt.hash(password, 10)

                const addUser = new Users({
                    firstname: userInputs.data.firstname,
                    lastname: userInputs.data.lastname,
                    username: username,
                    password: hashedPassword
                })
                await addUser.save()

                const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)

                const userAcc = new UserBalance({
                    user : username,
                    balance : randomAmount
                })
                await userAcc.save()

                const token = jwt.sign({ username }, JWT_SECRET)

                res.status(200).json({ message : "User created", token , username})
            }
        } else {
            res.status(411).json({ message : "Invalid inputs / try again" })

        }
    } catch (err) {
        res.status(500).json({ message : "Error occured while signup / try again" })
        //console.log(err)

    }
}

module.exports = signup 