import { heroBackground } from "../../assets";
import HeroBackground from "./HeroBackground";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="relative" id="hero">
      <HeroBackground backgroundImage={heroBackground} />
      <div className="relative z-10 min-h-screen flex items-center max-w-screen-2xl mx-auto py-[8rem]">
        <div className="px-11 md:px-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-tight text-accent font-bold max-w-[59.375rem]">
            Biomedical Perspective in Gender and Sexuality
          </h1>
          <p className="text-accent text-lg md:text-xl leading-9 md:leading-9 my-5 max-w-[51.25rem]">
            Explore the biological and medical foundations that shape our
            understanding of gender identity and sexual orientation, revealing
            how science plays a key role in the study of gender and sexuality.
          </p>
          <Button href="#reproduction">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
