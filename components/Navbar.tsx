import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constant";
const Navbar = () => {
  return (
    <nav className=" navbar containers flexBetween">
        <Link href="/" className="logo">
          Joseph M
        </Link>
      <div className="nav-links">
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
