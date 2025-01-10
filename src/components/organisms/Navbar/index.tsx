import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-black bg-CareerCraftBackground bg-gradient-to-r from-CareerCraftBackground to-CareerCraftPrimaryDark/40 px-2 ">
      <GiHamburgerMenu className="md:hidden text-CareerCraftWhite"></GiHamburgerMenu>
      <Link href="/">
        <Image alt="logo" src="/logo.png" height={50} width={50}></Image>
      </Link>
    </div>
  );
};

export default Navbar;
