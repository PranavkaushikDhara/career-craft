import clsx from "clsx";
import React from "react";

interface InputProps {
  placeholder: string;
  icon?: any;
  name: string;
  type?: string;
  className?: string;
}
const Input = (props: InputProps) => {
  return (
    <input
      className={clsx(
        "bg-CareerCraftForeGroundLight text-CareerCraftText p-2 text-sm",
        props.className
      )}
      name={props.name}
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
