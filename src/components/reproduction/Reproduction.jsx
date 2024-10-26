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
      <Section1 />
      {/*Process of Reproduction*/}

      <HighlightBlock heading={"KEY TERMS"} items={keyTerms} />
      <SectionReversed />

      {/*Pregnancy*/}
      <SectionCardsGrid />
      {/*Consequences*/}
      <Section2 />
      {/*Prevention*/}
      <SectionCardsGrid2 />
      {/*Contraceptives*/}
    </div>
  );
}

export default Reproduction;
