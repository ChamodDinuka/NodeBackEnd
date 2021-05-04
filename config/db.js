const mongoose =require('mongoose')

const connectDB = async () =>{
    const conn=mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    });
    console.log(`DB Connected`)
}
module.exports =connectDB