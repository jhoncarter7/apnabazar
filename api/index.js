import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import AuthRouter from './routes/auth.routes.js'
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
app.use('/api/auth/', AuthRouter)