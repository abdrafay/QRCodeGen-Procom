'use client'
import StatusBadge from '@/components/ui/status-badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Payment } from '@/interfaces/paymentInterface'
import { getSession } from '@/lib'
import axios from 'axios'
// import { Table as TableIcon } from 'lucide-react'
import React, { useEffect } from 'react'

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

const Customer = () => {
  const [payments, setPayments] = React.useState<Payment[]>([])
  const fetchData = async () => {
    console.log('fetching data')
    const session = await getSession()
    const {data,status} = await axios.get('http://localhost:5000/api/payment/customer', {
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
    useEffect(() => {
        
        fetchData()

    },[])

    const doPayment = async (id: string) => {
      const session = await getSession()
      const {data,status} = await axios.put(`http://localhost:5000/api/payment/${id}`, {
        status: 'success',
      }, {
        headers: {
            Authorization: `Bearer ${session}`
        }
    })
      console.log(data)
      fetchData();
      if(status !== 200)
          console.log('error')
    }

  return (
    <div>
      <h1 className="text-5xl font-bold">Payments</h1>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer Account No</TableHead>
              <TableHead>Merchant Account No</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Actions</TableHead>
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
                <TableCell className='flex gap-2'>
                  {payment.status === 'pending' && 
                  (<>
                    <button onClick={() => doPayment(payment._id)} className="bg-green-500 text-white p-2 rounded-md">Pay</button>
                  <button className="bg-red-500 text-white p-2 rounded-md">Reject</button>
                  </>)
                }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </div>
  )
}

export default Customer