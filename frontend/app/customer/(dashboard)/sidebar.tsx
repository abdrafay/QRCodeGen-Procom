'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    {
        path: '/customer',
        name: 'Payments',
    },
    {
        path: "/customer/instant-payment",
        name: "Instant Payment"
    },
    {
        path: "/customer/qr-scan",
        name: "QR Scan"
    
    }

]

const SideBar = () => {
    // get the current path
    const path = usePathname()
    // if(path) {
    const active = navItems.find(item => item.path === path)
    // }

  return (
    <aside className='lg:w-3/12 xl:w-2/12 bg-slate-100 h-full min-h-screen py-5 px-4 fixed'>
        
       
        <div className="flex flex-col gap-3">
        {navItems.map((item, index) => (
            <SideNavItem key={index} item={item} className={path === item.path ? 'bg-cyan-500 text-white': ""} />
        ))}
        </div>
    </aside>
  )
}

export default SideBar

type SideNavProps = {
    item: {
        path: string;
        name: string;
    },
    className: string
}

const SideNavItem = ({item, className}: SideNavProps) => {
    return (
        <Link href={item.path} className={`w-full block hover:bg-cyan-500 p-3 rounded-md hover:text-white ${className}`}>
            {item.name}
        </Link>
        
    )
}
