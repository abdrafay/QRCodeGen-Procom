'use client'
import React, { useEffect } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ChevronDown } from 'lucide-react'
import LogoutButton from '@/components/logout-button'
import Logo from '@/components/logo'
import { getRole, getSession } from '@/lib'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()

    useEffect(() => {
        
        const check = async () => {
        const session = await getSession()
        const role = await getRole()
         
        if(session) {   
            if(role !== 'merchant') {
                router.push('/merchant/login')
            }
        } else {
            router.push('/merchant/login')
        }
     }
     check()
 },[])
  return (
    <nav className='w-full px-5 py-4 relative z-10 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.1)]'>
        <div className='flex justify-between items-center'>
            <Logo role="merchant" />
            <div className='flex gap-5'>
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex flex-wrap items-center gap-4'>
                        <Avatar> 
                            <AvatarFallback>
                                {"Abdul Rafay".split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                        </Avatar>    
                        Abdul Rafay
                        <ChevronDown />
                        </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogoutButton />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </nav>
    )
}

export default Navbar