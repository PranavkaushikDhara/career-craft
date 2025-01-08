"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
interface ButtonProps {
  text: string;
  icon?: any;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClickMethod: () => void;
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
      onClick={props.onClickMethod}
      type={props.type}
      className={clsx(
        "flex gap-1 rounded-md py-2 px-2 border items-center text-sm",
        props.className
      )}
    >
      {props.icon} {props.text}
    </button>
  );
};

interface FormButtonProps {
  buttonText: string;
  pendingText: string;
  className?: string;
  icon?: any;
  type: any;
}
export const FormSubmitButton = (props: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col gap-3">
      <button
        type={props.type}
        className="text-CareerCraftWhite rounded-md bg-CareerCraftPrimary py-2 px-2 text-sm hover:bg-CareerCraftPrimaryDark flex items-center gap-2"
      >
        {props.icon}
        {pending ? props.pendingText : props.buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
