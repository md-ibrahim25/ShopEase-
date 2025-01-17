import React from "react";
import { SearchIcon } from "../ui/SearchIcon";
import { InputBar } from "../ui/InputBar";
import { CloseIcon } from "../ui/CloseIcon";

function Searchbar() {
  return (
    <div className="m-auto flex items-center space-x-4">
      <SearchIcon width={30} height={30} />
      <InputBar className="max-w-[400px]" />
      <CloseIcon width={16} height={16}/>
    </div>
  );
}

export default Searchbar;
