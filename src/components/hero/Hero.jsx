import { heroBackground } from "../../assets";
import HeroBackground from "./HeroBackground";
import Button from "../Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden" id="hero">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <HeroBackground />
      </motion.div>

      <div className="relative z-10 min-h-screen flex items-center max-w-screen-2xl mx-auto py-[8rem]">
        <div className="px-11 md:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.4,
                  duration: 1.2,
                  ease: "easeOut",
                },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-tight text-accent font-bold max-w-[59.375rem]"
            >
              Biomedical Perspective in Gender and Sexuality
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-accent text-lg md:text-xl leading-9 md:leading-9 my-5 max-w-[51.25rem]"
            >
              Explore the biological and medical foundations that shape our
              understanding of gender identity and sexual orientation, revealing
              how science plays a key role in the study of gender and sexuality.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <motion.div
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button href="#reproduction">Get Started</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
