import React from "react";
import Logo from "../img/SQ-logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerElements">
          <div class="footer__logo">
            <img src={Logo} alt="Safari logo" />
          </div>
        </div>

        <div className="footerElements">
          <ul className="footer__nav">
            <li>
              <a href="https://x.com/quest_safari4">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/safari-quest-0b584830b/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:safariquest4@gmail.com ">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>

          <p className="footer-paragraph">
            Email Address: safariquest4@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
