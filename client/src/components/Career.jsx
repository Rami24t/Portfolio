import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import tw from "../tw-styles";
import { careers } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { CareerCard } from "./CareerCard";

const Career = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${tw.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${tw.sectionHeadText} text-center`}>Career Path</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {careers.map((career, index) => (
            <CareerCard key={`career-${index}`} career={career} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Career, "work");
