import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import {FaPhone} from 'react-icons/fa'

const Navbar = () => {
    const user = false
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center  border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-3 flex-1" >
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="">MASSIMO</Link>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Menu /> 
      </div>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex gap-3 flex-1 justify-end">
            <div className="md:absolute lg:static top-3 right-2 flex items-center gap-2 cursor-pointer bg-orange-300 rounded-md px-1">
                <FaPhone size={20}/>
                <span>123 456 78</span>

            </div>
        {!user ? <Link href="/login">Login</Link> : <Link href='/orders'>Orders</Link>}

        <Link href="/cart"><CartIcon /></Link>
      </div>
    </div>
  );
};

export default Navbar;