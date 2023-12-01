import { memo } from "react";
import { FooterList } from "./components";
import { LiaReact } from "react-icons/lia";
import { BiLogoTailwindCss } from "react-icons/bi";

function FooterLists({ darkMode }) {

  const footerListsStyle = "flex gap-20 justify-around items-start";

  const resourcesTitle = "Resources";
  const resourcesLinks = [
    { text: "Rami", url: "https://www.github.com/rami24t" },
    { text: "React", url: "https://react.dev/", Logo: LiaReact },
    {
      text: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      Logo: BiLogoTailwindCss,
    },
  ];
  const followMeTitle = "Follow Me";
  const followMeLinks = [
    { text: "Github", url: "https://www.github.com/rami24t" },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
    },
  ];

  return (
    <div className={footerListsStyle}>
      <FooterList
        darkMode={darkMode}
        title={resourcesTitle}
        links={resourcesLinks}
      />
      <FooterList
        darkMode={darkMode}
        title={followMeTitle}
        links={followMeLinks}
      />
      {/* <FooterList title="Legal" links={[{ text: "Privacy Policy" }, { text: "Terms & Conditions" }]} /> */}
    </div>
  );
}

export default memo(FooterLists);
