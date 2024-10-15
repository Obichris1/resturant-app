import Price from "@/Components/Price";
import { singleProduct } from "@/app/config/data";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:items-center gap-6 justify-around p-4 lg:px-20 xl:px-40 text-brown ">
      {/* IMAGE CONTAINER */}

      <div className="relative h-1/2 w-full md:h-[70%] ">{singleProduct.img && <Image src={singleProduct.img} alt="" fill className="object-contain " />}</div>

      {/* TEXT CONTAINER */}

      <div className="h-1/2 md:h-[70%] flex flex-col md:gap-6 xl:gap-8 md:justify-center">
        <h1 className="font-bold uppercase text-3xl xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
        <button></button>
      </div>
    </div>
  );
};

export default SingleProduct;
