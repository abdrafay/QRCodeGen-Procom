import mongoose from 'mongoose'

const paymentSchema = mongoose.Schema(
    {
        paymentAmount: {
            type: Number,
            required: true
        },
        customerName: {
            type: String,
            required: true
        },
        paymentPurpose: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: 'pending'
        },
        customerAccountNo: {
            type: String,
            required: true
        },
        customerBankName: {
            type: String,
            required: true
        },
        merchantAccountNo: {
            type: String,
            required: true
        },
        merchant: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const Payment = mongoose.model('Payment', paymentSchema)

export default Payment