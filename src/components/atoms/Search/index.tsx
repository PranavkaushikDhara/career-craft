import React from "react";

interface SearchProps {
  placeholder: string;
  icon?: any;
  name: string;
  type?: string;
}
const Search = (props: SearchProps) => {
  return (
    <input
      className="bg-CareerCraftForeGroundLight text-CareerCraftText p-2 text-sm"
      type={props.type ? props.type : "text"}
      placeholder={props.placeholder}
    />
  );
};

export default Search;
