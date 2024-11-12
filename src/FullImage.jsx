import React from 'react';
import './FullImage.css';

const FullImage = () => {
  return (
    <div className="image-container">
      {/* Full-width image */}
      <div className="full-width-image"/>

      {/* Content overlay */}
      <div className="content-overlay">
        <h1> <p id="purple">IELTS Preparation</p> <p id="blue"> Online Best Learning </p> <p id="lightBlue">opportunity in The World </p></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Animi accusantium dicta cumque similique non sunt, nisi repellendus exercitationem omnis illum quidem, iusto, fugiat<br/> quis magnam quod?<br/>Suscipit vel illo molestias!</p>
      </div>

    </div>
  );
};

export default FullImage;