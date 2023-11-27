import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import tw from "../tw-styles";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[62px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[7px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

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

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
