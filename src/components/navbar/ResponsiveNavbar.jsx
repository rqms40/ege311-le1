import React, { useEffect, useState } from "react";
import { navLinksData } from "../../constants/index";
import { Link as LinkScroll } from "react-scroll";

const ResponsiveNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }

    // Cleanup to ensure body scroll is reset when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div>
      <span
        className="text-primary text-xl font-normal tracking-wide cursor-pointer md:hidden hover:text-primary-hover duration-200"
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className="fa-solid fa-bars-staggered"></i>
      </span>

      <div
        className={`w-full h-screen absolute top-0 right-0 bg-primary opacity-95 transform transition-transform duration-500 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden overflow-scroll scrollbar-hide`}
      >
        <span
          className="absolute top-5 left-6 text-white text-xl font-normal tracking-wide cursor-pointer md:hidden hover:text-primary-hover duration-200"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </span>

        <div>
          <ul className="flex flex-col justify-center items-center gap-6 relative translate-y-3/4">
            {navLinksData.map(({ _id, title, link }) => (
              <li
                key={_id}
                className="font-medium tracking-wide cursor-pointer last:pb-10"
              >
                <LinkScroll
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-48}
                  spy={true}
                  onClick={() => setShowMenu(false)}
                  className="cursor-pointer text-white hover:text-violet-400 duration-200"
                  activeClass="text-violet-400"
                >
                  {title}
                </LinkScroll>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
