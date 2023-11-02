'use client'
import Image from 'next/image'
import React from 'react'
import {useState, useEffect} from 'react'


const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in Lagos",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];


const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(0)

    useEffect(() =>{
        const interval = setInterval(() => setCurrentSlide(prev =>(prev === data.length - 1 ? 0 : prev + 1)),4000);


        return () => clearInterval(interval)
    },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h[calc(100vh-9rem)] lg:flex-row'>
        
        {/* TEXT CONTAINER */}
        <div className='h-1/2 items-center justify-center text-yellow-500 font-bold flex flex-col gap-8 lg:h-full lg:w-1/2'>
            <h1 className='uppercase text-5xl md:p-10 p-4 md:text-6xl xl:text-7xl text-center'>{data[currentSlide].title}</h1>
            <button className='border-2 p-4 bg-yellow-500 text-brown'>Order Now</button>
        </div>

        {/* IMAGE CONTAINER */}

        <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
           <Image src={data[currentSlide].image} alt='' fill className='object-cover'  />
        </div>
    </div>
  )
}

export default Slider