const http = require('http')
const express=require('express')
const dotenv=require('dotenv')
//route file
const route=require('./routes/mainroutes')
//load env vars
dotenv.config({path:'./config/config.env'})

const app = express();

//mount routes
app.use('/',route)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`${process.env.PORT}`)
);
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