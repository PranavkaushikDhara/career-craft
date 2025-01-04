"use client";
import React from "react";
import { redirect } from "next/navigation";
interface ButtonProps {
  text: string;
  icon?: any;
  className?: string;
}
const PrimaryButton = (props: ButtonProps) => {
  return (
    <button className="text-CareerCraftWhite rounded-md bg-CareerCraftPrimary py-2 px-2 text-sm hover:bg-CareerCraftPrimaryDark flex items-center gap-2">
      {props.icon} {props.text}
    </button>
  );
};

export const SecondaryButton = (props: ButtonProps) => {
  return (
    <button
      onClick={() => redirect("/create-resume")}
      className="text-CareerCraftPrimary rounded-md py-2 px-2 border border-CareerCraftPrimary text-sm hover:bg-CareerCraftPrimary hover:text-CareerCraftWhite "
    >
      {props.icon} {props.text}
    </button>
  );
};

export default PrimaryButton;
