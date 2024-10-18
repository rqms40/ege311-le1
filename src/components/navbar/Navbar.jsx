import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  return (
    <nav className="bg-violet-600/20">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="w-full h-20 mx-auto flex justify-between items-center">
          <div>
            <NavbarLogo />
          </div>
          <div>
            <NavbarItem />
            <ResponsiveNavbar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
