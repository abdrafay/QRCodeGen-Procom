import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            accountNo: user.accountNo,
            phoneNo: user.phoneNo,
            role: user.role,
            token: generateToken(user._id),
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = async (req, res) => {
    const { username, email, password, role, phoneNo, accountNo } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({ username, email, password, role, phoneNo, accountNo })

    if (user) {
        res.status(201)
            .json({
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                accountNo: user.accountNo,
                phoneNo: user.phoneNo,
                token: generateToken(user._id),
            })
    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }
}

// @desc    Get user profile
// @route   GET /api/users/:id
// @access  Private

const getUserProfile = async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            accountNo: user.accountNo,
            phoneNo: user.phoneNo,
        })
    }
    else {
        res.status(404)
        throw new Error('User not found')
    }
}

// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private

const updateUserProfile = async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        user.accountNo = req.body.accountNo || user.accountNo
        user.phoneNo = req.body.phoneNo || user.phoneNo
    

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            role: updatedUser.role,
            accountNo: updatedUser.accountNo,
            phoneNo: updatedUser.phoneNo,
            token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
}

// @desc    Get merchant's customers
// @route   GET /api/users/merchant/:id
// @access  Private

const getMerchantCustomers = async (req, res) => {
    const users = await User.find({ merchant: req.params.id })

    if (users) {
        res.json(users)
    } else {
        res.status(404)
        throw new Error('Users not found')
    }
}

export { authUser, getUserProfile, registerUser, updateUserProfile, getMerchantCustomers }
