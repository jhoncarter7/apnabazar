import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import AuthRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import productRoute from './routes/product.routes.js'
dotenv.config()

import cors from 'cors'

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err)
})

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

app.listen(3000, ()=>{
    console.log('server is running om port 3000')
})
app.use('/api/auth/', AuthRouter)
app.use('/api/', productRoute)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})