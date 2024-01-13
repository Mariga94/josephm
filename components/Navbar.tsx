import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constant";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 lg:top-0 bg-white h-20 text-gray-700 flex flex-row container justify-between  items-center border-t-2 border-t-gray-200 lg:border-b-2 lg:border-b-gray-200">
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
