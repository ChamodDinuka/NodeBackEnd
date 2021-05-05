const User = require('../models/usermodel')

exports.register=async (req,res,next)=>{
    try{
        const newuser=await User.create(req.body)
        //create token
        const token=newuser.getSignedJwtToken()
        res.status(201).json({
            success:true,
            data:newuser,
            token:token
        })
    }catch(err){
        next(err)
    }
}