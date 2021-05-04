// meddleware call for each an every request
const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.protocol}`)
    next(); //call next meddleware
}

module.exports = logger;