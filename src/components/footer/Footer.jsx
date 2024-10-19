import React from "react";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="w-full h-20 mx-auto flex justify-between items-center">
          <div>
            <div>
              <img src={logo} alt="logo" className="w-7 md:w-[2.875rem]" />
            </div>
          </div>
          <div>
            <span className="text-white font-semibold text-xs md:text-xl">
              &copy;2024 All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
