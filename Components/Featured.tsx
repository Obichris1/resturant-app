import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/config/data";

const Featured = () => {
  return (
    <div id="products" className="w-screen overflow-x-scroll text-brown">
      {/* WRAPPER */}
      <div className="flex flex-col w-max md:flex-row ">
        {/* SINGLE ITEMS */}

        {featuredProducts.map((item) => (
          <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative w-full flex-1 hover:rotate-[60deg]">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center mt-4 gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-2xl">{item.title}</h1>
              <p className="p-4 2xl:p-8 ">{item.desc}</p>
              <p className="font-bold text-2xl">&#8358; {item.price}</p>
              <button className="bg-yellow-500 py-2 px-6  text-brown rounded-md">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
