import { memo } from "react";
import { BsSend } from "react-icons/bs";

function SendEmailIconLink({
  lastPartOfEmail = "24@gmail.com",
  firstPartOfEmail = "alsaadi.rami",
  title = "Email Me",
  darkMode,
}) {
  return (
    <a
      title={title}
      aria-label={title}
      href="#send-email"
      className={` ${
        darkMode
          ? "hover:text-white focus:text-white"
          : "hover:text-gray-900 focus:text-gray-900"
      } text-gray-500 `}
      onClick={() => {
        lastPartOfEmail = lastPartOfEmail || "24@gmail.com";
        window.open(
          "mailto:" + (firstPartOfEmail || "alsaadi.rami") + lastPartOfEmail
        );
      }}
    >
      <BsSend />
      <span className="sr-only">Email Me</span>
    </a>
  );
}

export default memo(SendEmailIconLink);
