import clsx from "clsx";
import React from "react";

interface InputProps {
  placeholder: string;
  icon?: React.ReactNode;
  name: string;
  type?: string;
  className?: string;
  required: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: InputProps) => {
  return (
    <input
      className={clsx(
        "bg-CareerCraftForeGroundLight text-CareerCraftText p-2 text-sm outline-none focus:ring-2 focus:ring-CareerCraftPrimary",
        props.className
      )}
      required
      name={props.name}
      onChange={props.onChange}
      defaultValue={props.value}
      type={props.type ? props.type : "text"}
      placeholder={props.placeholder}
    />
  );
};

export const TextArea = (props: InputProps) => {
  return (
    <textarea
      className={clsx(
        "w-full p-2 rounded-md shadow-sm text-sm bg-CareerCraftForeGroundLight focus:ring-2 focus:ring-CareerCraftPrimary outline-none",
        props.className
      )}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
