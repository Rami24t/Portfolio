// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import tw from "../tw-styles";
import { ServiceCard } from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={tw.sectionSubText}>Introduction</p>
        <h2 className={tw.sectionHeadText}>Overview</h2>
      </motion.div>

      <p className={tw.heroSubText}>
        An aspiring junior <span className="text-blue-500">web developer</span>{" "}
        with a passion for <span className="text-blue-500">software</span>{" "}
        engineering and
        <span className="text-blue-500"> web development</span>.
      </p>
      <p className={tw.heroSubText}>
        I enjoy developing <span className="text-blue-500">websites</span> and{" "}
        <span className="text-blue-500">webapplications</span> using new
        technologies.
      </p>

      <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
