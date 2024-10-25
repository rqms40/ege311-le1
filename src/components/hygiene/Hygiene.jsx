import React from "react";
import SexualHygiene from "./SexualHygiene";
import HygienePractice from "./HygienePractice";

const Hygiene = () => {
  return (
    <section
      id="hygiene"
      className="bg-neutral-white max-w-screen-xl mx-auto p-16 space-y-16"
    >
      <SexualHygiene />
      <HygienePractice />
    </section>
  );
};

export default Hygiene;
