import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="background-image-container">
      <div className="landing-page-container">
        <header>
          <a href="#" className="logo">
            TravelTalk
          </a>

          <ul className="navlist">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="bx bx-menu" id="menu-icon"></div>
        </header>

        <div className="quote-container">
          <h1 className="quote-text">
            "Travel is the only thing you can buy that makes you richer."
          </h1>
          <div className="buttons-container">
            <a href="/local">
              <button className="button">Local</button>
            </a>
            <a href="/tourists">
              <button className="button">Tourists</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
