const { text } = require('body-parser')
const test = require('../models/testmodel')
//GET /
exports.getClass=async (req,res,next)=>{
    try{
    const data= await test.find()
    res.status(200).json({success:true,data:data})
    }catch{
        res.status(400).json({success:false})
    }
}

//PUT /:id
exports.updateClass=async(req,res,next)=>{
    try{
    const data=await test.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!data){
       return res.status(400).json({success:false}) 
    }
    res.status(200).json({success:true,data:data})
    }catch(err){
    next(err)
    }
}
exports.postClass=async(req,res,next)=>{
    //console.log(req.body)
    const newdata=await test.create(req.body)
    res.status(201).json({
        success:true,
        data:newdata
    })
}
exports.deleteClass=async(req,res,next)=>{
    try{
    const deletedata= await test.findByIdAndDelete(req.params.id)
    if(!deletedata){
        return res.status(400).json({success:false})
    }
    res.status(200).json({success:true,data:deletedata})
    }catch(err){
    //res.status(400).json({success:false})
    next(err)
    }
}