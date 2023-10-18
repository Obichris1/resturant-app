"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import CartIcon from "./CartIcon";

const links = [{ id: 1, title: "Homepage",url:'/' },
{ id: 2, title: "Menu",url:'/menu' },
{ id: 3, title: "Working Hours ",url:'/' },
{ id: 4, title: "Contact",url:'/' }
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  let user = false

  const showMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="menu" onClick={showMenu}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {isOpen && <div className="bg-red-500 text-white flex flex-col absolute left-0 top-24 w-full h-[calc(100vh-6rem)] gap-8 justify-center items-center z-10" >
        {links.map((link) =>
        <Link href={link.url}  key={link.id} onClick={showMenu}>
            {link.title}

        </Link>
        )}
        {!user ? <Link href='/login'>Login</Link> 
        : 
        <Link href='/orders'>Orders</Link>}
        <CartIcon />
      </div>
      }
    </div>
  );
};

export default Menu;
