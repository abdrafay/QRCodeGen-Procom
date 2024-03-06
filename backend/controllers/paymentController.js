import Payment from "../models/paymentModel.js"

// @desc    Create a new payment
// @route   POST /api/payments
// @access  Private

const createPaymentRequest = async (req, res) => {
    const { paymentAmount, customerBankName, paymentPurpose, customerAccountNo } = req.body
    
    const customer = await User.findOne({ accountNo: customerAccountNo })

    if(!customer)
    {
        res.status(400)
        throw new Error('Customer not found')
        
    } else {
        if (paymentAmount && customerBankName && paymentPurpose) {
            const payment = new Payment({
                paymentAmount,
                customerBankName,
                paymentPurpose,
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
    getMerchantPaymentRequest
}