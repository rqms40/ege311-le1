import React, { useEffect, useState } from "react";
import { navLinksData } from "../../constants/index";
import { Link } from "react-router-dom";

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
        className="text-violet-800 text-2xl font-normal tracking-wide cursor-pointer md:hidden hover:text-violet-500 duration-200"
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className="fa-solid fa-bars-staggered"></i>
      </span>

      {showMenu && (
        <div className="w-full h-full absolute top-0 right-0 bg-violet-950/80">
          <span
            className="absolute top-6 left-6 text-white text-2xl font-normal tracking-wide cursor-pointer md:hidden hover:text-violet-800 duration-200"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </span>

          <div>
            <ul className="flex flex-col justify-center items-center gap-6 relative translate-y-3/4">
              {navLinksData.map(({ _id, title, link }) => (
                <li
                  key={_id}
                  className="text-white font-medium tracking-wide cursor-pointer hover:text-violet-400 duration-200 "
                >
                  <Link to={link}>{title}</Link>
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
