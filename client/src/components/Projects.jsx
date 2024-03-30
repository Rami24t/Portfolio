import { SectionWrapper } from "../hoc";
// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../constants";
import tw from "../tw-styles";

export const Projects = SectionWrapper(() => {
  return (
    <>
      <div>
        {/* <motion.div variants={textVariant()}> */}
        <p className={tw.sectionSubText}>My work</p>
        <h2 className={tw.sectionHeadText}>Projects</h2>
        {/* </motion.div> */}
      </div>

      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        > */}
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The following projects showcase my skills and career through
          practical examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
        {/* </motion.p> */}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}, "");
