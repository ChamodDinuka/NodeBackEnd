const test = require('../models/testmodel')
//GET /
exports.getClass=(req,res,next)=>{
    res.status(200).json({status:true})
}

//PUT /:id
exports.updateClass=(req,res,next)=>{
    res.status(200).json({id:`${req.params.id}`})
}
exports.postClass=async(req,res,next)=>{
    //console.log(req.body)
    const newdata=await test.create(req.body)
    res.status(201).json({
        success:true,
        data:newdata
    })
}