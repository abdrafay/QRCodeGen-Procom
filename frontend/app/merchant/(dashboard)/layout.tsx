import React from 'react'
import Navbar from './navbar'
import SideBar from './sidebar'

type CustomerLayoutProps = {
  children: React.ReactNode
}


const CustomerLayout = ({children}: CustomerLayoutProps) => {
  
  return (
    <div>
        
          <Navbar />
        
        <div className="flex flex-wrap">
            <SideBar />
            <div className='relative lg:9/12 xl:w-10/12 ml-auto p-5'>
                {children}
            </div>
        </div>
        
    </div>
  )
}

export default CustomerLayout

