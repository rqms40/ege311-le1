import React from "react";
import { logo } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-custom-violet">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="w-full h-20 mx-auto flex justify-between items-center">
          <div>
            <div>
              <img src={logo} alt="logo" className="w-10 md:w-14" />
            </div>
          </div>
          <div>
            <span className="text-white font-medium text-sm md:text-base">
              &copy;2024 All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
