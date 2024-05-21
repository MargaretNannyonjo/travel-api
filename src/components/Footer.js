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
              <a href="https://twitter.com/Leaney27">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/Leaney27">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:questsafari43@gmail.com ">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Leaney27">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
          </ul>

          <p className="footer-paragraph">
            Email Address: questsafari43@gmail.com{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
