'use client'
import React from 'react'
import { getRole, logout } from '@/lib'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
    const router = useRouter()
    const handleLogout = async () => {
        const role = await getRole()
        await logout()
        if(role === 'merchant') {
            router.push('/merchant/login')
        } else {
            router.push('/customer/login')
        }
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}

export default LogoutButton