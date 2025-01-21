import React from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { Input } from "./input";

export const InputBar = ({
  placeholder = "Search for Products",
  className = "",
  ...props
}) => {
  return (
    <div className={`relative w-full font-mono ${className}`} {...props}>
      <SearchIcon className="absolute left-1 top-[6px]" fill="#7E8A8C" />
      <Input
        className="bg-[#EBEDED] px-8 py-2"
        type="text"
        placeholder="Search for Products"
      />
    </div>
  );
};
