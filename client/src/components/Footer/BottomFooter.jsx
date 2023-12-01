import { memo } from "react";

import { CopyrightDisclaimer, Icons } from "./components";

function BottomFooter({ darkMode=true }) {
  const copyright = {
    year: "2023",
    author: "Rami Al-saadi",
    rights: "All Rights Reserved",
  };
  return (
    <div
      className={`footer-bottom pt-1.5 pb-2 rounded-sm flex flex-col-reverse sm:flex-row flex-wrap gap-4 items-center justify-around
    ${darkMode ? "" : "bg-gradient-to-r to-yellow-200"}
    `}
    >
      <CopyrightDisclaimer
        year="2023"
        author={copyright.author}
        rights={copyright.rights}
        link="https://rami-al-saadi.vercel.app/"
        darkMode={darkMode}
      />
      <Icons darkMode={darkMode}/>
    </div>
  );
}

export default memo(BottomFooter);
