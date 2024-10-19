import React from "react";
import PropTypes from "prop-types";
import { Link as LinkScroll } from "react-scroll";
import { logo } from "../../assets";

const NavbarLogo = ({ heroSectionId = "hero" }) => {
  return (
    <LinkScroll
      to={heroSectionId}
      smooth={true}
      duration={500}
      offset={-100}
      className="cursor-pointer"
    >
      <img
        src={logo}
        alt="Website logo"
        className="w-7 md:w-[2.875rem] cursor-pointer"
        tabIndex="0"
        role="button"
      />
    </LinkScroll>
  );
};

NavbarLogo.propTypes = {
  heroSectionId: PropTypes.string,
};

export default NavbarLogo;
