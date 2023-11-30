import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const CareerCard = ({ career }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={career.date}
      iconStyle={{ background: career.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={career.icon}
            alt={career.company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{career.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {career.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {career.points.map((point, index) => (
          <li
            key={`career-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
