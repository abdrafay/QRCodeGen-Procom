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
                                        <div className='text-center'>
                                            <Image src={image} className='max-w-full mx-auto' width={300} height={200} alt="Charts"/>                      
                                            <h2 className="text-2xl text-white font-bold text-center my-3">Visualize payment statistics</h2>
                                            <p className="text-xs text-center text-white">These visuals are used to analyze and understand various aspects of payment activity, trends, and patterns</p>
                                        </div>
                                    </CarouselItem>
                                ))}
                                
                            </CarouselContent>
                            <div className='absolute left-1/2 mt-10'>
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