import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Nikita Sharma
      </a>

      <ul className="websiteLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Serviecs</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          {" "}
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          {" "}
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          {" "}
          <BsTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&CopyRight. Nikita Sharma. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
