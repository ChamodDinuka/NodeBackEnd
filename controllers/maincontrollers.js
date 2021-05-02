//GET /
exports.getClass=(req,res,next)=>{
    res.status(200).json({status:true})
}

//PUT /:id
exports.updateClass=(req,res,next)=>{
    res.status(200).json({id:`${req.params.id}`})
}