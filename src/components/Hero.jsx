import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { comp } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-[60vh] sm:h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Lasha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software engineer with 4+ years of experience{" "}
            <br className="sm:block hidden" />
            developing high-performance web applications.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center absolute inset-0 top-[250px] sm:top-[350px]">
        <img
          src={comp}
          alt="comp"
          className="w-[80%] h-[200px] sm:h-[500px] object-contain"
        />
      </div>
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
