import React from "react";
import { Outlet } from "react-router-dom";
import { Searchbar, NavbarFooter, Header } from "./components";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet className="" />
      </main>
      <footer className="mb-2">
        <NavbarFooter />
      </footer>
    </div>
  );
}

export default Layout;
