import React from "react";
import { menu } from "@/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div>
      {/* TEXT CONTAINER */}
      <div className="h-[calc(100vh-6rem)] p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center">
        {menu.map((item) => (
          <Link
            href={`/menu/${item.slug}`}
            key={item.id}
            className="w-full h-1/3 bg-cover p-8 md:h-1/2"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <h1 className='uppercase font-bold text-3xl' style={{color : `${item.color}`}}>{item.title}</h1>
            <p className="text-sm my-8">{item.desc}</p>
            <button className={`hidden 2xl:block bg-${item.color} rounded py-2 px-2 text-${item.color === "black" ? "white" : 'black'} hover:scale-95`}>Explore</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
