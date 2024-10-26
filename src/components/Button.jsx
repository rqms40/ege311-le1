import React, { useCallback, useEffect, useState } from "react";

const Button = ({ className = "", href, onClick, children, px = "px-6" }) => {
  const [offset, setOffset] = useState(80);
  const classes =
    `bg-primary hover:bg-primary-hover text-white text-sm md:text-xl py-2 md:py-4 rounded-[0.625rem] mt-5 ${px} ${className}`.trim();
  const spanClasses = "relative z-10";

  useEffect(() => {
    const handleResize = () => {
      setOffset(window.innerWidth < 768 ? 48 : 80);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollWithOffset = useCallback(
    (element) => {
      if (!element) return;
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    },
    [offset]
  );

  const handleClick = useCallback(
    (e) => {
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        scrollWithOffset(targetElement);
      }
      if (onClick) {
        onClick(e);
      }
    },
    [href, onClick, scrollWithOffset]
  );

  const renderButton = () => (
    <button className={classes} onClick={handleClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={`${classes} inline-block`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
