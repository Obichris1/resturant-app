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
      title: "we deliver your order wherever you are in NY",
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
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h[calc(100vh-9rem)] md:flex-row '>
        
        {/* TEXT CONTAINER */}
        <div className='h-1/2 text-center items-center justify-center text-red-500 font-bold flex flex-col gap-8'>
            <h1 className='uppercase text-5xl md:p-10  md:text-5xl xl:text-6xl'>{data[currentSlide].title}</h1>
            <button className='border-2 px-2 py-2 bg-red-500 text-white'>Order Now</button>
        </div>

        {/* IMAGE CONTAINER */}

        <div className='h-1/2 relative'>
           <Image src={data[currentSlide].image} alt='' fill={true} className='object-cover'  />
        </div>
    </div>
  )
}

export default Slider