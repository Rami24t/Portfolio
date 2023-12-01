import { memo } from "react";
import { Company, FooterLists } from "./components";
import logoSvg from "../../assets/logo/logo.svg";

function TopFooter({ darkMode }) {
  const company = {
    name: "Rami Al-Saadi",
    subtext: "Web Development",
  };

  return (
    <div
      className={`rounded-sm md:pr-8 pt-6 items-center footer-top flex flex-col md:flex-row flex-wrap gap-2.5 justify-between
  ${darkMode ? "" : "bg-gradient-to-l to-yellow-200"}
  `}
    >
      <Company
        logo={logoSvg}
        name={company.name}
        subtext={company.subtext}
        link="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
        darkMode={darkMode}
      />
      <FooterLists darkMode={darkMode} />
    </div>
  );
}

export default memo(TopFooter);
