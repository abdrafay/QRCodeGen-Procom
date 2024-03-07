'use client'
import React from 'react'
import { logout } from '@/lib'

const LogoutButton = () => {
    return (
        <button onClick={async () => await logout()}>
            Logout
        </button>
    )
}

export default LogoutButton