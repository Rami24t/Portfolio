import { memo } from "react";
import { FooterIconLink, SendEmailIconLink, SvgGithub } from "./components";
import { BsYoutube, BsLinkedin } from "react-icons/bs";

function Icons({ darkMode }) {

  return (
    <div className="footer-icons flex flex-wrap mt-4 space-x-6 sm:justify-center sm:mt-0">
      <SendEmailIconLink title="e-mail" darkMode={darkMode} />
      <FooterIconLink
        Icon={BsLinkedin}
        url="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
        title="LinkedIn profile"
        darkMode={darkMode}
      />
      {/* <FooterIconLink icon={SvgFB} url="https://www.facebook.com/XtremeSale" title="Facebook page" />
          <FooterIconLink icon={SvgInstagram} url="https://www.instagram.com/ramissaadi/" title="Instagram page" /> */}
      <FooterIconLink
        Icon={SvgGithub}
        url="https://github.com/Rami24t"
        title="Github profile"
        darkMode={darkMode}
      />
      <FooterIconLink
        Icon={BsYoutube}
        url="https://www.youtube.com/@ramial-saadi3113/videos"
        title="Youtube channel"
        darkMode={darkMode}
      />
    </div>
  );
}

export default memo(Icons);
