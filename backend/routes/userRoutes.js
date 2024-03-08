import express from "express"

import { authUser, getUserProfile, registerUser, updateUserProfile } from "../controllers/userController.js"

import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(registerUser).get(protect, getUserProfile).put(protect, updateUserProfile)

router.post("/login", authUser)

// router.route('/').

export default router