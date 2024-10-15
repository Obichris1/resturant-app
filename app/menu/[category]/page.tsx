import React from "react";
import { pizzas } from "@/config/data";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-brown">
      {pizzas.map((item) => (
        <Link href={`/products/${item.id}`} className="w-full h-[60vh] p-4 sm:w-1/2 lg:w-1/3 border-b-2 border-r-2 border-brown flex flex-col even:bg-fuchsia-50 justify-between group" key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl p-2 uppercase">{item.title}</h1>
            <h2 className="group-hover:hidden">${item.price}</h2>
            <button className="bg-yellow-500 group-hover:block p-2 text-white rounded hidden uppercase ">Add to cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
