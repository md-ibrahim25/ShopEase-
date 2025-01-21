import React from "react";
import { Searchbar, TabBar } from "..";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="my-2 px-2 text-center font-roboto text-2xl font-semibold italic md:mr-32">
        ShopEase
      </header>
      <div className="relative mx-auto flex w-full max-w-[800px] flex-col items-center gap-3 md:flex-row">
        {/* Navigation BAr */}
        <div className="my-3">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `rounded-lg px-6 py-3 font-semibold shadow-lg transition duration-300 ${isActive ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-blue-300"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              `rounded-lg px-6 py-3 font-semibold shadow-lg transition duration-300 ${isActive ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-blue-300"}`
            }
          >
            Cart
          </NavLink>
        </div>
        <Searchbar />
      </div>
      {/* <div className="mt-2">
        <TabBar />
      </div> */}
    </div>
  );
}

export default Header;
