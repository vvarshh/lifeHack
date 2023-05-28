import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default LandingPage;
