"use client";
import { usePathname } from "next/navigation";
import ButtonLink from "@/components/atoms/ButtonLink";
import React from "react";
import { FaTools } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaRegFlag } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { LuFileBadge } from "react-icons/lu";
import { RiBookShelfLine } from "react-icons/ri";

const topElements = [
  { title: "Contact", icon: <IoIosContact />, href: "/dashboard" },
  { title: "Experience", icon: <FaTools />, href: "/resumes" },
  { title: "Education", icon: <RiBookShelfLine />, href: "/pitch" },
  { title: "Certifications", icon: <LuFileBadge />, href: "/linkedin" },
  { title: "Skills", icon: <FaMagic />, href: "/email" },
  { title: "Summary", href: "/profile", icon: <FaRegFlag /> },
];

const ResumeNav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="hidden md:flex md:flex-col md:w-[200px] md:h-full justify-between ">
      <div className="flex flex-col gap-2 h-full">
        {topElements.map((element) => (
          <ButtonLink
            key={element.title}
            text={element.title}
            icon={element.icon}
            href={element.href}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ResumeNav;
