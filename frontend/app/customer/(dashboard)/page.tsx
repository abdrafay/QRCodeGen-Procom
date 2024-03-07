import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
// import { Table as TableIcon } from 'lucide-react'
import React from 'react'

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
            {data.map((payment, index) => (
              <TableRow key={index}>
                <TableCell>{payment.customerAccountNo}</TableCell>
                <TableCell>{payment.merchantAccountNo}</TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>{payment.description}</TableCell>
                <TableCell>{payment.time}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell className='flex gap-2'>
                  <button className="bg-green-500 text-white p-2 rounded-md">Pay</button>
                  <button className="bg-red-500 text-white p-2 rounded-md">Reject</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </div>
  )
}

export default Customer