import React from "react";
import Profile1 from '../Assets/Dhanush.png';
import './About.css';

const About = () => {
  return (
      <div>
        <div className="home-container">

      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading2">
          DHANA SEKAR V
          </h1>
          <p className="primary-text">
          Frontend-Developer of To Cook
          </p>
        </div>
        <div className="home-image-section">
          <img src={Profile1} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;