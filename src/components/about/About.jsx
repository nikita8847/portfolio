import React from "react";
import "./About.css";
// import Me from "../../assets/images/me-about.jpg";
import Me from "../../assets/images/p1.jpg";
import { BsFillBagCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className=" about_me">
          <div className=" about_me-image ">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsFillBagCheckFill className="about_icon" />
              <h5>Experience</h5>
              <small>full stack developer</small>
            </article>

            <article className="about_card">
              <BsFillBagCheckFill className="about_icon" />
              <h5>Experience</h5>
              <small>full stack developer</small>
            </article>

            <article className="about_card">
              <BsFillBagCheckFill className="about_icon" />
              <h5>Experience</h5>
              <small>full stack developer</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
            aspernatur ipsam? Vero neque quos dolorum excepturi. Sint possimus
            sit architecto velit ipsum repellat enim rerum aliquam praesentium
            excepturi. Vitae, aliquam.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
