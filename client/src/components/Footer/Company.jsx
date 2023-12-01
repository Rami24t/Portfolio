import { memo } from "react";
import logo from "../../assets/logo/logo.svg";

function Company({
  name = "Rami Al-Saadi", 
  subtext = "Web Development",
  link = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  darkMode = true,
  rtl = false,
}) {
  return (
    <div className="mb-6 md:mb-0">
      <a
        href={link}
        aria-label={`${name} ${subtext} - link`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center animate-pulse"
      >
        <img
          src={logo}
          className={`h-14 mr-2 -mb-4 aspect-square ${
            darkMode ? "" : "filter invert"
          }`}
          alt={name + "'s Logo"}
        />
        <span
          className={`yellow-tail self-center font-semibold whitespace-nowrap ${
            rtl ? "text-2xl ml-1" : "text-2xl"
          } ${darkMode ? " text-white" : "text-red-900"}`}
        >
          {name}
        </span>
      </a>
      <p
        className={`block w-36 opacity-50 select-none -mt-1 text-end ${
          !rtl ? "text-xs ml-auto" : "text-sm ml-auto"
        }`}
      >
        {subtext}
      </p>
    </div>
  );
}

export default memo(Company);
