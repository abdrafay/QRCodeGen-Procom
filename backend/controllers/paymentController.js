import Payment from "../models/paymentModel.js"
import User from "../models/userModel.js"
// @desc    Create a new payment
// @route   POST /api/payments
// @access  Private

const createPaymentRequest = async (req, res) => {
    const { paymentAmount, customerBank, paymentPurpose, customerAccountNo, customerName, merchantAccountNo } = req.body

    
    const customer = await User.findOne({ username: customerName })

    if(!customer)
    {
        res.status(400)
        throw new Error('Customer not found')
        
    } else {
        console.log({
            paymentAmount,
            customerBank,
            paymentPurpose,
            customerAccountNo,
            customerName,
            merchantAccountNo
        
        }, 'body')
        if (paymentAmount && customerBank && paymentPurpose && customerAccountNo && customerName && merchantAccountNo) {
            const payment = new Payment({
                paymentAmount: parseFloat(paymentAmount),
                customerBankName: customerBank,
                paymentPurpose,
                customerAccountNo,
                customerName,
                merchantAccountNo,
                merchant: req.user._id,
                customer: customer._id
            })

            const createdPayment = await payment.save()

            res.status(201).json(createdPayment)
        } else {
            res.status(400)
            throw new Error('Invalid payment data')
        }
    }
}

// @desc    Get payment request : customer
// @route   GET /api/payments/customer
// @access  Private

const getCustomerPaymentRequest = async (req, res) => {
    const payment = await Payment.find({customer: req.user._id})
    if(payment) {
        res.status(200).json(payment)
    } else {
        res.status(404)
        throw new Error('Payment not found')
    }
}

// @desc    Get payment request : merchant
// @route   GET /api/payments/merchant
// @access  Private

const getMerchantPaymentRequest = async (req, res) => {
    const payment = await Payment.find({merchant: req.user._id})
    if(payment) {
        res.status(200).json(payment)
    } else {
        res.status(404)
        throw new Error('Payment not found')
    }
}

// @desc    Get all customers of a merchant
// @route   GET /api/payment/merchant/customers
// @access  Private

const getMerchantCustomers = async (req, res) => {
    const customers = await Payment.find({merchant: req.user._id}).distinct('customer')
    if(customers) {
        // now get the customer details but do not send the password
        const customerDetails = await User.find({_id: {$in: customers}}, {password: 0})
        res.status(200).json(customerDetails)
    } else {
        res.status(404)
        throw new Error('No customers found')
    }
}


// @desc    Update payment request
// @route   PUT /api/payments/:id
// @access  Private

const updatePaymentRequest = async (req, res) => {
    const payment = await Payment.findById(req.params.id)

    if(payment) {
        payment.status = req.body.status || payment.status

        const updatedPayment = await payment.save()

        res.json(updatedPayment)
    } else {
        res.status(404)
        throw new Error('Payment not found')
    }
}

export {
    createPaymentRequest,
    getCustomerPaymentRequest,
    updatePaymentRequest,
    getMerchantPaymentRequest,
    getMerchantCustomers
}