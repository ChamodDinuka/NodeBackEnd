const ErrorResponse = require("../errorUtil/errorResponse")

const errorHandler=(err,req,res,next)=>{
    let error = {...err}
    error.message= err.message

    //mongoose bad object
    if(err.name === 'CastError'){
        const message =`Not Found With this ID`
        error = new ErrorResponse(message,404)
    }
    //mongoose duplicate
    if(err.code === 11000){
        const message =`Duplicate value`
        error = new ErrorResponse(message,400)
    }
    //validation error
    if(err.name === 'ValidationError'){
        const message =Object.values(err.errors).map(val=>val.message)
        error = new ErrorResponse(message,400)
    }
    res.status(error.statusCode || 500).json({
        success:false,
        error:error.message
    })
}
module.exports=errorHandler