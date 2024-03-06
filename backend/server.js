import express from 'express'
// initialize express
const app = express()

import dotenv from 'dotenv'
import Database from './config/db'
import {notFound, errorHandler} from './middleware/errorMiddleware'

// Load environment variables
dotenv.config()

// Connect to database
new Database()

// Middlewares
app.use(express.json())

// Routes
app.use('/api/payment', require('./routes/paymentRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})