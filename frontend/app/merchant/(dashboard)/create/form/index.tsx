'use client'
import React, {useState} from 'react'
import { Payment } from '@/interfaces/paymentInterface'
// hooks
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, useForm } from "react-hook-form"
import { z } from "zod"
import { getSession } from '@/lib'
import { useRouter } from "next/navigation";
import axios from 'axios'


// UI elements
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    customerName: z.string().min(2, {
        message: "Customer Name must be at least 2 characters.",
    }),
    customerEmail: z.string().email(),
    paymentAmount: z.string().min(1, {
        message: "Amount must be at least 1.",
    }),
    paymentPurpose: z.string().min(2, {
        message: "Payment Purpose must be at least 2 characters.",
    }),
    customerAccountNo: z.string().min(2, {
        message: "Customer Account No must be at least 2 characters.",
    }),
    merchantAccountNo: z.string().min(2, {
        message: "Merchant Account No must be at least 2 characters.",
    }),
    customerBank: z.string().min(2, {
        message: "Select Customer Bank",
    })
    
})

const defaultValues = {
    customerName: "",
    customerEmail: "",
    paymentAmount: "",
    paymentPurpose: "",
    customerAccountNo: "",
    merchantAccountNo: "",
    customerBank: "",
}

const PaymentForm = () => {
    const router = useRouter()
    const [buttonLoading, setButtonLoading] = useState<boolean>(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const session = await getSession()
        setButtonLoading(true)
        try{
            const {data, status} = await axios.post('http://localhost:5000/api/payment', values, {
                headers: {
                    Authorization: `Bearer ${session}`
                }
            }
            )
            if(status === 200) {
                // use toast
                form.reset()
            }
            setButtonLoading(false)
            
        } catch(e) {
            setButtonLoading(false)
            console.error(e)
        }

        // if(status === 200) {
        //     router.push('/merchant')
        // }
    }
    
  return (
    <div className='p-5 border rounded-lg my-5'>
    <h1 className="text-3xl font-bold">Payment request for customer</h1>
<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 my-5">
            <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Enter Customer Name</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder='Enter Customer Name'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="customerEmail"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input {...field} type="email" placeholder='Enter customer email'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="paymentAmount"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Payment Amount</FormLabel>
                    <FormControl>
                        <Input {...field} type="text" placeholder='Enter payment amount'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="customerAccountNo"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Customer Account No</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder='Enter customer account no'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="merchantAccountNo"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Merchant Account No</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder='Enter merchant account no'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="customerBank"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Customer Bank</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder='Enter customer bank'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="paymentPurpose"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Payment Purpose</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder='Enter payment purpose'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />

            <Button disabled={buttonLoading} type="submit" className="w-full bg-purple-500">
                {buttonLoading ? "Submitting.." : "Submit"}
            </Button>
        </form>
    </Form>
    </div>
  )
}

export default PaymentForm