import React from "react";
import { SearchIcon } from "../ui/icons/SearchIcon";
import { InputBar } from "../ui/InputBar";
import { CloseIcon } from "../ui/icons/CloseIcon";
import { Button } from "../ui/button";

function Searchbar() {
  return (
    <div className="flex max-w-[800px] items-center space-x-4">
      <InputBar className="max-w-[600px] flex-grow" />
      <Button variant="">Search</Button>
    </div>
  );
}

export default Searchbar;
