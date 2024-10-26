import React from "react";
import SexualHygiene from "./SexualHygiene";
import HygienePractice from "./HygienePractice";
import SexualHealth from "./SexualHealth";
import { sexualHealthComponents } from "../../constants";
import HighlightBlock from "../HighlightBlock";

const Hygiene = () => {
  return (
    <section id="hygiene" className="pt-16 md:pt-24 lg:pt-28">
      <SexualHealth />
      <HighlightBlock heading={"COMPONENTS"} items={sexualHealthComponents} />
      <SexualHygiene />
      <HygienePractice />
    </section>
  );
};

export default Hygiene;
