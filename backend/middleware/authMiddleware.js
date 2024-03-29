import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
}

const merchant = (req, res, next) => {
    if(req.user && req.user.role === 'merchant') {
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as a merchant')
    }
}

const customer = (req, res, next) => {
    if(req.user && req.user.role === 'customer') {
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as a customer')
    }
}

export { protect, merchant, customer }