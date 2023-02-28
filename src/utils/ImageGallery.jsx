import React from "react";
import "./ImageGallery.css";
function ImageGallery({ images }) {
  return (
    <div className="w-100 resto-image-container">
      <div className="firstImage">
        <img src={images[0]} />
      </div>
      <div className="secondThird-img">
        <div className="secondImage">
          <img src={images[1]} />
        </div>
        <div className="thirdImage">
          <img src={images[2]} />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
