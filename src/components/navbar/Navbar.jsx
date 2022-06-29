import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { MdOutlineContacts } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <FiUser />
      </a>

      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <MdOutlineContacts />
      </a>
    </nav>
  );
};

export default Navbar;
