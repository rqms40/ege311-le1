const SubsectionWrapper = ({ children, className, id }) => {
  return (
    <section className={"w-full " + className} id={id}>
      <div className="max-w-screen-2xl mx-auto lg:px-20">{children}</div>
    </section>
  );
};

export default SubsectionWrapper;
