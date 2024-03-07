import express from "express"

import {
    createPaymentRequest, 
    getCustomerPaymentRequest,
    updatePaymentRequest,
    getMerchantPaymentRequest, 
    getMerchantCustomers
} from "../controllers/paymentController.js"

import { protect, customer, merchant } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(protect, merchant,createPaymentRequest)

router.route("/customer").get(protect, customer, getCustomerPaymentRequest)

router.route("/merchant").get(protect, merchant, getMerchantPaymentRequest)
router.route('/merchant/customers').get(protect, merchant, getMerchantCustomers)

router.route("/:id").put(protect, customer, updatePaymentRequest)
// for the payment request, these 2 routes are same, but for future use, we can use the second one and add more functionality
router.route('/pay').put(protect, customer, updatePaymentRequest)


export default router
