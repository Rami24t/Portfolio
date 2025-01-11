import tw from "../tw-styles";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { careers } from "../constants";
import { CareerCard } from "./CareerCard";
import { SectionWrapper } from "../hoc";

const Career = () => (
  <>
    <div>
      <p className={`${tw.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${tw.sectionHeadText} text-center`}>Career Path</h2>
    </div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {careers.map((career, index) => (
          <CareerCard key={`career-${index}`} career={career} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

const wrappedCareerWorkSection = SectionWrapper(Career, "work");
export default wrappedCareerWorkSection;
