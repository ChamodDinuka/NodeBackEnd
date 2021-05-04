const http = require('http')
const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const errorHandler=require('./middleware/error')
//middleware
const logger=require('./middleware/logger')

//load env vars
dotenv.config({path:'./config/config.env'})
//connect to db'
connectDB();

//route file
const route=require('./routes/mainroutes')

const app = express();
//body parser
app.use(express.json())

app.use(logger)
//mount routes
app.use('/',route)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT,
    console.log(`${process.env.PORT}`)
);
//Hanle unhandle promise
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
})
//const dataset=
//     {
//         id:1,
//         name:'kalpa',
//         place:'panadura'
//     }
// const server =http.createServer((req,res)=>{
//     const{headers,url,method} =req;
//     res.setHeader('dewaf4','km')
//     res.end(
//         JSON.stringify(
//             {
//                 massage:true,
//                 data:dataset
//             }
//         )
//     )
// })
// const PORT=5000;
// server.listen(PORT,()=>(`server is running`))