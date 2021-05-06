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
exports.login=async (req,res,next)=>{
    try{
        const {name,password}=req.body
        const user = await User.findOne({name}).select('+password')
        
        if(!user){
            res.status(400).json({
                success:false
            })
        }
        //check password valid user
        const isMathed = await user.match(password)
        if(!isMathed){
            res.status(401).json({
                success:false,
                message:'No user'
            })
        }
        //create token
        sendToken(user,200,res);
        
    }catch(err){
        next(err)
    }
}
// Get token from model and set cookie
const sendToken = (user,statusCode,res) => {
    const token=user.getSignedJwtToken()
    const option = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 1000*60),
        httpOnly:true
    }
    res
        .status(statusCode)
        .cookie('token',token,option)
        .json({
            success : true,
            token
        })
}