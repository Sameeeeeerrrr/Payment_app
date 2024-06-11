const { signinSchema } = require("../../inputValidataion")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { Users } = require("../../database")
const JWT_SECRET = require("../../config")

const signin = async (req, res) => {
    try {
        const userInputs = signinSchema.safeParse(req.body)

        if (userInputs.success) {
            const username = userInputs.data.username

            const password = userInputs.data.password

            const userExists = await Users.findOne({ username: username })

            if (!userExists) {
                res.status(411).json({ message: "User doesn't exists / go to signup" })

            } else {
                const validPassword = await bcrypt.compare(password, userExists.password)

                if (validPassword) {
                    const token = jwt.sign({ username }, JWT_SECRET)

                    res.status(200).json({ token , username })

                } else {
                    res.status(411).json({ message: "Invalid password / try again" })

                }
            }
        } else {
            res.status(411).json({ message: "Invalid inputs / try again" })

        }

    } catch (err) {
        res.status(500).json({message:"Error occured while signin / try again"})

    }
}

module.exports = signin