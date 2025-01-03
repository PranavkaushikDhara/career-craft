import React from "react";

interface DropdownProps {
  title: String;
  name: string;
  default?: string;
  options: string[];
}
const Dropdown = (props: DropdownProps) => {
  return (
    <div className="flex flex-col items-start w-full gap-2 p-4">
      <p className="text-sm text-CareerCraftInputText capitalize ">
        {props.title}
      </p>
      <select className="text-sm" name={props.name} id={props.name}>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
