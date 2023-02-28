import React from 'react'
import "./getApp.css";
function GetApp() {
  return (
    <div className="get-app-container">
      <div className="get-app-decription">
        <div className="img-container">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png"
            alt="mobile-img"
          />
        </div>
        <div className="right-section">
          <h1>Get the Zomato app</h1>
          <h3>
            We will send you a link, open it on your phone to download the app
          </h3>
          <div className="radioboxes">
            <input type="radio" value="Email" name="android" checked />Email
            <input type="radio" value="mobile" name="android" />Phone
          </div>
          <div className="shareButton">
            <input type="text" placeholder="Email" />
            <button>Share App Link</button>
          </div>
          <h4>Download app from</h4>
          <div className="download_options">
            <img
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              alt=""
            />
            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetApp