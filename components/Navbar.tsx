import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constant";

const Navbar = () => {
  return (
    <nav
      className="fixed bottom-0 lg:top-0 md:top-0 w-full
     bg-white h-20 text-gray-700 flex flex-row container justify-between
       items-center sm:border-t-2 border-t-gray-200 lg:right-0 lg:left-0" 
    >
      <h1 className="text-xl lg:text-3xl font-semibold text-primary">
        <Link href="/" className="">
          Joseph
        </Link>
      </h1>
      <div className="flex flex-row lg:gap-10 gap-2 font-semibold lg:text-xl">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.key} className="nav-link">
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
