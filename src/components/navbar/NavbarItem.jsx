import React from "react";
import { navLinksData } from "../../constants/index";
import { Link as LinkScroll } from "react-scroll";

const NavbarItem = () => {
  return (
    <ul className="hidden md:inline-flex items-center gap-5 lg:gap-10">
      {navLinksData.map(({ _id, title, link }) => (
        <li
          key={_id}
          className="text-accent text-lg font-medium tracking-wide cursor-pointer"
        >
          <LinkScroll
            to={link}
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
            activeClass="text-primary"
            className="cursor-pointer hover:text-primary duration-200"
          >
            {title}
          </LinkScroll>
        </li>
      ))}
    </ul>
  );
};

export default NavbarItem;
