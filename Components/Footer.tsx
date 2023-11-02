import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className="h-[calc(100vh-4rem)] text-brown p-4 pt-8 flex flex-col gap-16 md:gap-48 justify-center items-start md:border-t-2 border-brown  md:flex-row md:h-[25vh] relative md:px-40 ">
      <div className="text-5xl md:font-bold md:text-5xl">
        <Link href="/" className="font-DancingScript absolute top-8 left-2 md:top-6 md:left-2  text-3xl  font-extrabold" >
          FOOD--HUT
        </Link>
      </div>
       <div className="flex flex-col md:flex-row justify-between md:gap-12 gap-16">
      <div className="flex flex-col gap-2 ">
        <p className="font-bold text-2xl">Deals</p>
        <p className="cursor-pointer hover:text-yellow-500">Today's Deals</p>
        <p className="cursor-pointer hover:text-yellow-500">About Us</p>
        <p className="cursor-pointer hover:text-yellow-500">Terms and Conditions</p>
      </div>

      <div className="flex flex-col gap-2 ">
        <p className="font-bold text-2xl">Contact Us</p>
        <p className="cursor-pointer hover:text-yellow-500">Reach out to us</p>
        <p className="cursor-pointer hover:text-yellow-500">Delivery</p>
        <p className="cursor-pointer hover:text-yellow-500">Careers</p>
        <p className="cursor-pointer hover:text-yellow-500">FAQs</p>
      </div>
      </div>

      <hr className="w-full bg-brown h-1 md:hidden" />

      <div className="flex  gap-16 md:flex-row md:justify-between  md:gap-8 lg:gap-16 self-center cursor-pointer">
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30} />
      </div>
      <div className="self-center text-sm md:">
        <p>&copy; 2023 Chukwunenye Obinna </p>
     
      </div>
    </div>
  );
};

export default Footer;
