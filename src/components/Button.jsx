const Button = ({ className, href, onClick, children, px }) => {
  const classes = `bg-primary hover:bg-primary-hover text-white text-sm md:text-xl ${
    px || "px-6"
  } py-4 rounded-[0.625rem] mt-5 ${className || ""}`;
  const spanClasses = "relative z-10";
  const linkClasses = "inline-block";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={`${classes} ${linkClasses}`}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
