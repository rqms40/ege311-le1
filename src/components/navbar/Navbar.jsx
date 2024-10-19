import React, { useState, useEffect } from "react";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm backdrop-blur-sm" : ""
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="w-full h-12 md:h-20 mx-auto flex justify-between items-center">
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
