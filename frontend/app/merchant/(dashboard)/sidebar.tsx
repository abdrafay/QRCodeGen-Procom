'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    {
        path: '/merchant',
        name: 'Payments',
    },{
        path: '/merchant/create',
        name: 'Create Payment',
    },{
        path: '/merchant/customers',
        name: 'Customers',
    
    }

]

const SideBar = () => {
    // get the current path
    const path = usePathname()
    // if(path) {
    const active = navItems.find(item => item.path === path)
    // }

  return (
    <aside className='lg:w-3/12 xl:w-2/12 bg-slate-100 h-full min-h-screen py-5 px-4'>
        {navItems.map((item, index) => (
            <SideNavItem key={index} item={item} className={path === item.path ? 'bg-purple-500 text-white': ""} />
        ))}
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
        <Link href={item.path} className={`w-full block hover:bg-purple-500 p-3 rounded-md hover:text-white ${className}`}>
            {item.name}
        </Link>
        
    )
}
