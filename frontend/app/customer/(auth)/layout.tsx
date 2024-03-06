import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    const images = [
        '/bar.png',
        '/line.png'
    ]
    return (
        <div className='flex items-center justify-center w-screen h-screen p-5'>
            <div className="flex w-full md:w-10/12 max-w-[1000px] h-[90vh] border-2 rounded-lg p-2">
                <div className='w-full md:w-1/2'>
                    {children}
                </div>
                <div className='hidden md:block w-full md:w-1/2 rounded-lg bg-cyan-600 overflow-hidden relative'>
                    
                    <div className='absolute w-[200px] h-[200px] transform rounded-xl rotate-[14deg] -bottom-[5rem] -left-32 bg-cyan-500'></div>
                    <div className='absolute w-[200px] h-[200px] transform rounded-xl rotate-[14deg] -top-[5rem] -right-20 bg-cyan-500'></div>

                    <div className="flex w-full h-full justify-center items-center p-10">
                        <Carousel>
                            <CarouselContent>
                                {images.map((image, ind) => (
                                    <CarouselItem key={ind}>
                                        <Image src={image} width={300} height={300} style={{width: "100%"}} alt="Charts"/>
                                    </CarouselItem>
                                ))}
                                
                            </CarouselContent>
                            <div>
                                <CarouselPrevious />
                                <CarouselNext />
                            </div>
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthLayout