import React from "react";
import { logo } from "../../constants/index";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="home">
      <img src={logo} alt="logo" className="w-10 md:w-14" />
    </Link>
  );
};

export default NavbarLogo;
