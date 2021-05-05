const mongoose=require('mongoose')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')

const userShema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Pleace enter name'], 
    },
    password:{
        minlength:6,
        required:[true,'Pleace enter password'],
        type:String,
        select:false
    },
    role:{
        type:String,
        enum:['user','publisher'],
        default:'user'
    }
})
//encrypt password before save
userShema.pre('save',async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})
//sign JWT and return
userShema.methods.getSignedJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

module.exports=mongoose.model('User',userShema)