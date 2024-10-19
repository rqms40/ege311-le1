import React, { useEffect, useState } from "react";
import { navLinksData } from "../../constants/index";
import { NavLink } from "react-router-dom";

const ResponsiveNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }

    // Handle screen resize to hide menu on 'md' breakpoint
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check on mount to handle cases when resizing happens before interaction
    handleResize();

    // Cleanup to ensure body scroll is reset when component unmounts
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize); // Remove listene
    };
  }, [showMenu]);

  return (
    <div>
      <span
        className="text-primary text-2xl font-normal tracking-wide cursor-pointer md:hidden hover:text-primary-hover duration-200"
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className="fa-solid fa-bars-staggered"></i>
      </span>

      {showMenu && (
        <div className="w-full h-screen overflow-scroll absolute top-0 right-0 bg-primary/90 scrollbar-hide md:hidden">
          <span
            className="absolute top-6 left-6 text-neutral-white text-2xl font-normal tracking-wide cursor-pointer md:hidden hover:text-secondary duration-200"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </span>

          <div>
            <ul className="flex flex-col justify-center items-center gap-6 pb-10 relative translate-y-3/4">
              {navLinksData.map(({ _id, title, link }) => (
                <li
                  key={_id}
                  className="text-neutral-white font-medium tracking-wide cursor-pointer hover:text-primary-hover duration-200 "
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNavbar;
