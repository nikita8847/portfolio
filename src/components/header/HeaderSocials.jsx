import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://github.com">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
