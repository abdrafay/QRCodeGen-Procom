'use client'
import React, { useEffect } from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

import {Doughnut} from 'react-chartjs-2'
import { Payment } from '@/interfaces/paymentInterface'
import { getSession } from '@/lib'
import axios from 'axios'

const Chart = () => {
    const [payments, setPayments] = React.useState<Payment[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession()
            const {data,status} = await axios.get('http://localhost:5000/api/payment/merchant', {
                headers: {
                    Authorization: `Bearer ${session}`
                }
            
            })
            
            setPayments(data);
            if(status !== 200)
                return <div>No Data Found</div>
        }
        fetchData()

    },[])

    const data = {
        labels: ['Success', 'Failed', 'Pending'],
        datasets: [
            {
                label: 'Payments',
                data: [payments.filter((payment) => payment.status === 'success').length, payments.filter((payment) => payment.status === 'failed').length, payments.filter((payment) => payment.status === 'pending').length],
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }
        ]
    }

    
return (
    <div>
            <Doughnut
                    data={data}
                    options={{ plugins: { legend: { display: true, position: 'bottom' } } }}
            ></Doughnut>
    </div>
)
}

export default Chart