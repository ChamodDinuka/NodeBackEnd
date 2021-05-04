const mongoose=require('mongoose')

const testSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Pleace enter name'],
    },
    description:{
        type:String,
        minlength:[10,'length is not enough']
    }
})
module.exports = mongoose.model('test',testSchema)