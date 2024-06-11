const { default: mongoose } = require("mongoose")
const { UserBalance } = require("../database")

const transaction = async (req,res)=>{
    try{
        const session = await mongoose.startSession()
    session.startTransaction()

    const user = req.query.username
    const to = req.query.to
    const amount = parseInt(req.query.amount)
    //console.log(user,to,amount)
    

    const findUser = await UserBalance.findOne({user:user}).session(session)
    //console.log(findUser)

    if(findUser.balance < amount){
        await session.abortTransaction()
        return res.status(400).json({message:"Insufficient amount"})
    }

    const toAccount = await UserBalance.findOne({user:to}).session(session)
    //console.log(toAccount)

    if(!toAccount){
        await session.abortTransaction()
        return res.status(400).json({message:"Invalid account"})
    }

    await UserBalance.updateOne({user:user}, {$inc: {balance : -amount}}).session(session)
    await UserBalance.updateOne({user:to}, {$inc: {balance : +amount}}).session(session)

    session.commitTransaction();
    res.json({message:"Transfer successful"})

    }catch(err){
        res.json({message:"Error / try again"})
        //console.log(err)
    }
        
}

module.exports = transaction