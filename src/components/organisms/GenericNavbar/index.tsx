import PrimaryButton, { SecondaryButton } from "@/components/atoms/Button";
import CustomLink from "@/components/atoms/Link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const GenericNavbar = () => {
  return (
    <div className="w-full border-b border-CareerCraftForeGroundLight sticky top-0 bg-CareerCraftBackground">
      <div className=" flex justify-between w-full px-4 py-2 items-center">
        {/* left side */}
        <GiHamburgerMenu className="md:hidden text-CareerCraftWhite"></GiHamburgerMenu>
        <div className="hidden md:flex gap-4 ">
          {/* <Image></Image> */}
          <CustomLink text="Features" href="/" />
          <CustomLink text="Pricing" href="/" />
          <CustomLink text="Resources" href="/" />
        </div>

        {/* right side */}
        <div className="flex gap-4 w-full justify-end">
          <SecondaryButton text="Sign In" />
          <PrimaryButton text="Join Us" />
        </div>
      </div>
    </div>
  );
};

export default GenericNavbar;
