import Image from "next/image";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-CareerCraftForeGroundLight px-2">
      <GiHamburgerMenu className="md:hidden text-CareerCraftWhite"></GiHamburgerMenu>
      <Image alt="logo" src="/logo.png" height={50} width={50}></Image>
    </div>
  );
};

export default Navbar;
