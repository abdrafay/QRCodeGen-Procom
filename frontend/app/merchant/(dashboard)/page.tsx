'use client'
import React, { useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from 'axios'
import { getSession } from '@/lib'
import { Payment } from '@/interfaces/paymentInterface'
import StatusBadge from '@/components/ui/status-badge'

const data = [
    {
        customerAccountNo: '1234567890',
        merchantAccountNo: '0987654321',
        status: 'success',
        description: "Payment Purpose",
        time: "3:00 PM",
        date:"2021-10-10",
        amount: 100,
    }
]

const Merchant = () => {
    const [payments, setPayments] = React.useState<Payment[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession()
            const {data,status} = await axios.get('http://localhost:5000/api/payment/merchant', {
                headers: {
                    Authorization: `Bearer ${session}`
                }
            
            })
            const processedData = data.map((item: any) => {
                const createdAtDate = new Date(item.createdAt);
                const formattedTime = createdAtDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            const formattedDate = createdAtDate.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
                return {
                    ...item,
                    time: formattedTime,
                    date: formattedDate
                };
            });
            console.log(processedData)
            setPayments(processedData);
            if(status !== 200)
                return <div>No Data Found</div>
        }
        fetchData()

    },[])
    // const {data,status} = await axios.post('http://localhost:5000/api/payments/merchant')
    // if(status !== 200)
    //     return <div>No Data Found</div>
    return (
    <div className='p-5'>
        <h1 className="text-5xl font-bold">Payments</h1>
        <Table className='my-5'>
            <TableHeader>
                <TableRow>
                    <TableHead>Customer Account No</TableHead>
                    <TableHead>Merchant Account No</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {payments.map((payment, index) => (
                <TableRow key={index}>
                    <TableCell>{payment.customerAccountNo}</TableCell>
                    <TableCell>{payment.merchantAccountNo}</TableCell>
                    <TableCell><StatusBadge value={payment.status} /></TableCell>
                    <TableCell>{payment.paymentPurpose}</TableCell>
                    <TableCell>{payment.time}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.paymentAmount}</TableCell>
                    
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </div>
    )
}

export default Merchant