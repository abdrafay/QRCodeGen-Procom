'use client'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getSession } from '@/lib';
import { Customer } from '@/interfaces/customerInterface';


const Customers = () => {
    const [customers, setCustomers] = useState<Customer[]>([])
    const getData = async () => {
        const session = await getSession()
        const {data, status} = await axios.get('http://localhost:5000/api/payment/merchant/customers', {
            headers: {
                Authorization: `Bearer ${session}`
            }
        
        })
        console.log(data,'data')
        if(status === 200) {
            setCustomers(data)
        }
    }
    useEffect(() => {
        getData()
    },[])
  return (

    customers && customers.length === 0 ? <div>No Data Found</div> :
    (
    <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer Name</TableHead>
              <TableHead>Customer Account No</TableHead>
              <TableHead>Customer Email</TableHead>
              <TableHead>Customer Phone No</TableHead>
              
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((cst, index) => (
              <TableRow key={index}>
                <TableCell>{cst.username}</TableCell>
                <TableCell>{cst.accountNo}</TableCell>
                <TableCell>{cst.email}</TableCell>
                <TableCell>{cst.phoneNo}</TableCell>
                
                
              </TableRow>
            ))}
          </TableBody>
      </Table>
      )
  )
}

export default Customers