import { memo } from "react";
import { TopFooter, BottomFooter } from "./components";
import { footerStyles } from "./footerStyles";

function Footer({ darkMode = true }) {
  return (
    <footer
      id="footer"
      className={`${footerStyles.footer.common} ${
        darkMode ? footerStyles.footer.dark : footerStyles.footer.light
      }`}
    >
      <div className={footerStyles.container.common}>
        <TopFooter darkMode={darkMode} />

        <hr
          className={`${footerStyles.hr.common} ${
            darkMode ? footerStyles.hr.dark : footerStyles.hr.light
          }`}
        />

        <BottomFooter darkMode={darkMode} />
      </div>
    </footer>
  );
}

export default memo(Footer);
