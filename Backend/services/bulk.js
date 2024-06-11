const { Users } = require("../database")

const bulk = async (req,res)=>{
    const loggedinUser = req.query.user
    const filter = req.query.filter || "";
    //console.log(filter)

    const users = await Users.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })
    const FilteredUsers = []
    for(let i = 0; i < users.length ; i++){
        if(users[i].username !== loggedinUser){
            FilteredUsers.push({User : users[i].username,Name : `${users[i].firstname} ${users[i].lastname}`})

        }
    }

    res.json({FilteredUsers})
}

module.exports = bulk