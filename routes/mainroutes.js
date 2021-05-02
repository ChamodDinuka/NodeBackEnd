const express=require('express')
const router = express.Router();
router.get('/',(req,res)=>{
    //res.send('hello');
    res.status(200).json({status:true})
})
router.post('/',(req,res)=>{
    res.status(201).json({status:true,data:[]})
})
router.put('/:id',(req,res)=>{
    res.status(200).json({id:`${req.params.id}`})
})
module.exports =router