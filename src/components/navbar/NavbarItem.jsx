import React from "react";
import { navLinksData } from "../../constants/index";
import { Link } from "react-router-dom";

const NavbarItem = ({ className }) => {
  return (
    <ul className="hidden md:inline-flex items-center gap-5 lg:gap-10">
      {navLinksData.map(({ _id, title, link }) => (
        <li
          key={_id}
          className="text-accent text-lg font-medium tracking-wide cursor-pointer hover:text-primary duration-200 "
        >
          <Link to={link}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarItem;
