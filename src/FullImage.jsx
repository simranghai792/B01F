import React from 'react';
import './FullImage.css';
import map from "./assets/map.png";
import group from "./assets/group.png";

const FullImage = () => {
  return (
    <div className="image-container">
      {/* Full-width image */}
      <div className="full-width-image"/>

      {/* Content overlay */}
      <div className="content-overlay">
        <h1> <p id="purple">IELTS Preparation</p> <p id="blue"> Online Best Learning </p> <p id="lightBlue">opportunity in The World </p></h1>
        <p>Lorem ipsum dolor sit amet elit.<br/> Animi dicta cumque similique non sunt quis magnam<br/>Suscipit molestias!</p>
      </div>

      <img src={map} alt="error" className="map"/>
      <img src={group} alt="error" className="group"/>
    </div>
  );
};

export default FullImage;