import express from 'express'
import dotenv from 'dotenv'
import Database from './config/db'

const app = express()

// Load environment variables
dotenv.config()

// Connect to database
new Database()

// Middlewares
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})