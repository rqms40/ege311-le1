import React from "react";
import SexualHygiene from "./SexualHygiene";
import HygienePractice from "./HygienePractice";
import SexualHealth from "./SexualHealth";
import { sexualHealthComponents } from "../../constants";
import HighlightBlock from "../HighlightBlock";

const Hygiene = () => {
  return (
    <section id="hygiene" className="py-16 md:py-24 lg:py-28">
      <SexualHealth />
      <HighlightBlock heading={"COMPONENTS"} items={sexualHealthComponents} />
      <SexualHygiene />
      <HygienePractice />
    </section>
  );
};

export default Hygiene;
