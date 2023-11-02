import Image from "next/image"
import Counter from "./Counter"


const Offer = () => {
    return(
        <div className="bg-black h-screen flex flex-col md:flex-row text-white md:bg-[url('/offerBg.png')] md:h-[70vh]" >
           {/* TEXT CONTAINER */}
           <div className="flex flex-col  items-center justify-center gap-8 pt-4 flex-1">
              <h1 className="text-5xl font-bold xl:text-6xl text-center ">Delicious burgers and french fries</h1>
              <p className="xl:text-3xl  text-center">Stay tuned to keep up with our mouth watering offers every two weeks </p>
              <Counter />
              <button className="bg-yellow-500 px-8 py-4  text-brown rounded-md">Order now</button>
           </div>

           {/* IMAGE CONTAINER */}
           <div className="relative w-full flex-1 ">
             <Image src='/offerProduct.png' alt='' fill className="object-contain" />
           </div>
        </div>
    )
}

export default Offer