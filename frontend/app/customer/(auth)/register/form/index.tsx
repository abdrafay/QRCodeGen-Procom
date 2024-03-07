'use client'
import React, { useEffect, useState } from 'react'

// hooks
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, useForm } from "react-hook-form"
import { z } from "zod"

import { getSession, register } from '@/lib'
import { useRouter } from "next/navigation";
import { UserInterface } from '@/loginInterface'


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
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    accountNo: z.string().min(2, {
        message: "Account No must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phoneNo: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),

})

const defaultValues = {
    username: "",
    accountno: "",
    email: "",
    phone: "",
    password: "",
}

const LoginForm = () => {
    const router = useRouter()
    const [buttonLoading, setButtonLoading] = useState<boolean>(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // login(values as LoginInterface)
        const AllValues = {
            ...values,
            role: 'customer'
        }
        setButtonLoading(true)
        const registered = await register(AllValues as UserInterface)
        setButtonLoading(false)
        if(registered) {
            router.push('/customer')
        }
    }
    useEffect(() => {
        const run = async () => {
            const session = await getSession()
            if(session) {
                router.push('/customer')
            }
        }
        run()
    },[])

    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 my-5">
           
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder='Enter username'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
            control={form.control}
            name="accountNo"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Account No</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder='Enter account no'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input {...field} type="email" placeholder='Enter email'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name='phoneNo'
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                        <Input {...field} type="tel" placeholder='Enter email'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input {...field} type="password" placeholder='Enter password'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <div className='text-center'>
                <Button type="submit" disabled={buttonLoading} className='bg-cyan-500 w-full my-2'>
                {buttonLoading ? 'Submitting..' : 'Submit' }
                    
                </Button>
            </div>
        </form>
    </Form>
    )
}

export default LoginForm

