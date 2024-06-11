const { Users, UserBalance } = require("../../database")
const { updateSchema } = require("../../inputValidataion")
const bcrypt = require("bcrypt")

const update = async (req, res) => {
    const user = req.query.username
    const userInputs = updateSchema.safeParse(req.body)

    if (userInputs.success) {

        const findUser = await Users.findOne({ username: user })

        const username = userInputs.data.username || findUser.username
        const password = await bcrypt.hash(userInputs.data.password, 10)
        const hashedPassword = password || findUser.password

        try {
            await Users.updateOne({ username: user }, { username: username, password: hashedPassword})
            await UserBalance.updateOne({user: user}, { user : username})
            res.json({ message: "Updated" })

        } catch (err) {
            res.status(500).json({ message: "Error occured while updating / try again" })
        }

    } else {
        res.status(411).json({ message: "Invalid inputs / try again" })

    }
}

module.exports = update