import React from "react";
import "./Portfolio.css";
import Img1 from "../../assets/images/portfolio1.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={Img1} alt="" className="portfolio_img" />
          </div>
          <h3>this is the tittle </h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a href="http://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={Img1} alt="" className="portfolio_img" />
          </div>
          <h3>this is the tittle </h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a href="http://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={Img1} alt="" className="portfolio_img" />
          </div>
          <h3>this is the tittle </h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a href="http://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={Img1} alt="" className="portfolio_img" />
          </div>
          <h3>this is the tittle </h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a href="http://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={Img1} alt="" className="portfolio_img" />
          </div>
          <h3>this is the tittle </h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a href="http://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={Img1} alt="" className="portfolio_img" />
          </div>
          <h3>this is the tittle </h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a href="http://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
