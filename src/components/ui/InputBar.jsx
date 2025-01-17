import React from "react";
import { SearchIcon } from "./SearchIcon";

export const InputBar = ({ placeholder = "Search for Products", className = "", ...props }) => {
  return (
    <div className="relative">
      <SearchIcon className="absolute top-[6px] left-1" fill="#7E8A8C" />
      <input
        type="text"
        placeholder={placeholder}
        className={`${className} w-full rounded-xl bg-[#EBEDED] px-7 py-2 font-mono text-[#7E8A8C] outline-none`}
        {...props}
      />
    </div>
  );
};
