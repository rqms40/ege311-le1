import { keyTerms } from "../../constants";
import HighlightBlock from "../HighlightBlock";
import Section from "./Section";
import SectionReversed from "./SectionReversed";

function Reproduction() {
  return (
    <div>
      <Section />
      <SectionReversed />

      <HighlightBlock heading={"KEY TERMS"} items={keyTerms} />
    </div>
  );
}

export default Reproduction;
