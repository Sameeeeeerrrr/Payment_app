const { UserBalance } = require("../database")

const balance = async (req, res) => {
    try {
        const user = req.query.username
        const findUsersAcc = await UserBalance.findOne({ user: user })
        res.json({ user: findUsersAcc.user, balance: findUsersAcc.balance })

    } catch (err) {
        res.json({ message: "Error / try again" })

    }
}

module.exports = balance