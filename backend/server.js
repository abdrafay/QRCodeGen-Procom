import express from 'express'
// initialize express
const app = express()

import dotenv from 'dotenv'
import Database from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import paymentRoutes from './routes/paymentRoutes.js'
import userRoutes from './routes/userRoutes.js'

import cors from 'cors'

// Load environment variables
dotenv.config()

// Connect to database
new Database()

// Middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running...')
})

// Routes
app.use('/api/payment', paymentRoutes)
app.use('/api/auth', userRoutes)

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})