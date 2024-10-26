import { keyTerms } from "../../constants";
import HighlightBlock from "../HighlightBlock";
import Section1 from "./Section1";
import Section2 from "./Section2";
import SectionCardsGrid from "./SectionCardsGrid";
import SectionCardsGrid2 from "./SectionCardsGrid2";
import SectionReversed from "./SectionReversed";
function Reproduction() {
  return (
    <div id="reproduction">
      {/*Pregnancy*/}
      <Section1 />

      {/* Key Terms */}
      <HighlightBlock heading={"KEY TERMS"} items={keyTerms} />

      {/*Process of Reproduction*/}
      <SectionReversed />

      {/*Consequences*/}
      <SectionCardsGrid />

      {/*Prevention*/}
      <Section2 />

      {/*Contraceptives*/}
      <SectionCardsGrid2 />
    </div>
  );
}

export default Reproduction;
