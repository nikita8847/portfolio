import React from "react";
import "./Header.css";
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
// import Me from "../../assets/images/me.png";
import Me from "../../assets/images/p2.jpg";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1>Nikita Sharma</h1>
        <h5>Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="me" className="Me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
