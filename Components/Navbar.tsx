import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import {FaPhone} from 'react-icons/fa'

const Navbar = () => {
    const user = false
  return (
    <div className="h-12 text-brown p-4 flex justify-between items-center  border-b-2 border-b-brown uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-3 flex-1 text-base lg:text-lg" >
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
      
      </div>

      {/* LOGO */}
      <div className="text-4xl md:font-bold flex-1 md:text-center font-DancingScript md:text-4xl xl:text:6xl">
        <Link href="/">FOOD--HUT</Link>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Menu /> 
      </div>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex gap-3 flex-1 justify-end text-base lg:text-lg">
            <div className="md:absolute lg:static top-3 right-2 flex items-center gap-2 cursor-pointer rounded-md px-1 z-10">
                <FaPhone size={20}/>
                <span>123 456 78</span>

            </div>
        {!user ? <Link href="/">Login</Link> : <Link href='/orders'>Orders</Link>}

        <Link href="/cart"><CartIcon /></Link>
      </div>
    </div>
  );
};

export default Navbar;
