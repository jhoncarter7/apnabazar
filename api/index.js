import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err)
})

const app = express()
app.use(express.json())

app.listen(3000, ()=>{
    console.log('server is running om port 3000')
})