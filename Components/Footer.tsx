import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className="h-[calc(100vh-4rem)] text-brown p-4 pt-12 flex flex-col gap-16 md:gap-48 md:border-t-2 border-brown  md:flex-row md:h-[35vh] relative justify-around bg-[#DADFDF] ">
      <div className="text-5xl md:font-bold md:text-5xl ">
        <Link href="/"  >
          <p className="font-DancingScript text-2xl md:text-4xl font-bold">FOOD--HUT</p>
        </Link>
      </div>
       <div className="flex flex-col md:flex-row justify-between md:gap-12 gap-16">
      <div className="flex flex-col gap-4 md:gap-3 text-center text-sm md:text-lg">
        <p className="font-bold uppercase ">Deals</p>
        <p className="cursor-pointer hover:text-yellow-500">Today's Deals</p>
        <p className="cursor-pointer hover:text-yellow-500">About Us</p>
        <p className="cursor-pointer hover:text-yellow-500">Delivery</p>
        <p className="cursor-pointer hover:text-yellow-500">Terms and Conditions</p>
        <p className="cursor-pointer hover:text-yellow-500">FAQs</p>
      </div>
{/* 
      <div className="flex flex-col gap-2  ">
        <p className="font-bold uppercase">Contact Us</p>
        <p className="cursor-pointer hover:text-yellow-500">Reach out to us</p>
      
        <p className="cursor-pointer hover:text-yellow-500">Careers</p>

      </div> */}
      </div>

      <hr className="w-full bg-brown h-0.5 md:hidden" />

      <div className="flex  gap-16 md:flex-row md:justify-between  md:gap-4 lg:gap-16 self-center cursor-pointer">
        <FaFacebook size={25} className="" />
        <FaInstagram size={25} />
        <FaTwitter size={25} />
      </div>
      <div className="self-center text-sm md:">
        <p>&copy; 2023 Chukwunenye Obinna </p>
     
      </div>
    </div>
  );
};

export default Footer;
