import React from "react";
import { Outlet } from "react-router-dom";
import { Searchbar, NavbarFooter } from "./components";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="font-roboto my-2 px-2 text-center text-2xl font-semibold italic">
        ShopEase
      </header>
      <Searchbar />
      <main className="flex-grow bg-blue-300">
        <Outlet className="bg-blue-300" />
      </main>
      <footer className="mb-2">
        <NavbarFooter />
      </footer>
    </div>
  );
}

export default Layout;
