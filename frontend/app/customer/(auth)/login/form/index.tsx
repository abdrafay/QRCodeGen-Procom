'use client'
import React, { useEffect, useState } from 'react'

// hooks
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, useForm } from "react-hook-form"
import { z } from "zod"

import { getSession, login } from '@/lib'
import { useRouter } from "next/navigation";
import { LoginInterface } from '@/loginInterface'
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
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),

})

const defaultValues = {
    email: "",
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
        
        setButtonLoading(true)
        const loggedIn = await login(values as LoginInterface)
        setButtonLoading(false)
        if(loggedIn) {
            router.push('/customer')
        }
    }
    useEffect(() => {


        const run = async () => {
            const session = await getSession()
            console.log(session,'session')
            if(session) {
                const {data, status} = await axios.get('http://localhost:5000/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${session}`
                    }                    
                })
                if(status === 200) {
                    router.push(`/${data.role}`)
                }
                // router.push('/customer')
            }
        }
        run()
    },[])

    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 my-5">
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

