import React from "react";
import { ReactComponent as Instagram } from "./assets/instagram.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import { ReactComponent as Github } from "./assets/github.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a
        href="https://www.instagram.com/shubhamthechaudhary/"
        className="social-link"
        aria-label="instagram"
      >
        <Instagram />
      </a>
      <a
        href="https://www.linkedin.com/in/shubham-chaudhary-934373111/"
        className="social-link"
        aria-label="linkedin"
      >
        <LinkedIn />
      </a>
      <a
        href="https://github.com/DarkMagician0611"
        className="social-link"
        aria-label="github"
      >
        <Github />
      </a>
      <div className="copyright">© 2020 Shubham</div>
    </footer>
  );
}

export default Footer;
