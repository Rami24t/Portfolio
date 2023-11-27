import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import tw from "../tw-styles";
import { ProjectCard } from "./ProjectCard";

export const Projects = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${tw.sectionSubText} `}>My work</p>
        <h2 className={`${tw.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and career through
          practical examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}, "");
