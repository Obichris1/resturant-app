import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="text-xl md:font-bold">
        <Link href="/">MASSIMO</Link>
      </div>

      <p>copyright &copy;</p>
    </div>
  );
};

export default Footer;
