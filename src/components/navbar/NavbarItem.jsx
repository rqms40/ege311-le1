import React from "react";
import { navLinksData } from "../../constants/index";
import { NavLink } from "react-router-dom";

const NavbarItem = () => {
  return (
    <ul className="hidden md:inline-flex items-center gap-5 lg:gap-10">
      {navLinksData.map(({ _id, title, link }) => (
        <li
          key={_id}
          className="text-accent text-lg font-medium tracking-wide hover:text-primary duration-200 "
        >
          <NavLink
            to={link}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarItem;
